import Common from '@/Components/Common';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';


interface IChef{
  _id: string,
  name: string,
  position: string,
  image_url: "url"
}

const getChef = async () => {
  const chefs = await client.fetch(
    `
    *[_type=="chef"]{
    _id,
    name,
    position,
    "image_url":image.asset->url
    }[]
    `
  )
  return chefs
}

const Ourchef = async() =>{
  const chefs = await getChef();
  console.log(chefs)

  return(
    <div>
      <Common title="Our Chef" subtitle="Chef" />
      {/*grid*/}
      <div className='wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] space-y-1 my-[50px] md:my-[120px]'>
        {
          chefs.map((chef:IChef)=>{
            return (
              <div className='w-full lg-w-[250px] h-[430px]' key={chef._id}>
                <div className='w-full h-[365px] flex justify-center items-center'>
                  <Image 
                  src={chef.image_url}
                  alt={chef.name}
                  width={300}
                  height={300}
                  className='w-full h-full object-cover'/>
                  </div>
                  <div className='flex flex-col items-center w-full h-[65px]'>
                    <h2 className='font-[700] text-[20px]'>{chef.name}</h2>
                    <p>{chef.position}</p>
                    </div>
                    </div>
            )
          }
          )
        }

    </div>
    </div>
  )
}
export default Ourchef

