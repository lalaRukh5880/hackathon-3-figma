import Image from "next/image";
import Common from "@/Components/Common";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

type ItemParams = {
  params: { id: string };
};

async function getItems(id: string) {
  const fetchResult = await client.fetch(
    `*[_type == "food" && _id == $id]{
      _id,
      name,
      description,
      price,
      category,
      originalPrice,
      tags,
      "imageUrl": image.asset->url,
      available,
      rating,
      reviews
    }`,
    { id }
  );

  if (!fetchResult.length) {
    return null;
  }
  return fetchResult[0];
}

export default async function Page({ params }: ItemParams) {
  const itemsInfo = await getItems(params.id);

  if (!itemsInfo) {
    return (
      <div>
        <Common title="Item Not Found" subtitle="Shop Details" />
        <div className="text-center py-16">No item found with this ID.</div>
      </div>
    );
  }

  return (
    <div>
      <Common title="Shop Details" subtitle="Shop Details" />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt={itemsInfo.name}
              src={itemsInfo.imageUrl}
              width={500}
              height={500}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {itemsInfo.name}
              </h1>
              <p className="leading-relaxed mb-4">{itemsInfo.description}</p>
              <p className="text-lg font-bold text-orange-500">
                Price: ${itemsInfo.price}
              </p>
              <p className="text-sm text-gray-600">
                Category: {itemsInfo.category}
              </p>
              <Link href="/shop">
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Back to Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
