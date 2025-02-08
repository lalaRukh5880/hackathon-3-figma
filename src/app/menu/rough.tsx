import React from 'react';
import Image from 'next/image';
import Common from '@/Components/Common';

const Page = () => {
    return (
        <div className='h-[3600px]'>
            <Common title='Our Menu' subtitle='Menu' />

            {/* Starter Menu Section */}
            <div className='mt-[60px] flex flex-col lg:flex-row items-center lg:items-start'>
                <div className='w-full lg:w-auto flex justify-center lg:block'>
                    <Image src='/menu/starter.png' alt='Starter Menu' width={348} height={520} className='lg:ml-52' />
                </div>
                <div className='w-1/2 p-8'>
                    <h1 className='text-3xl font-bold h-[56px]'>Starter Menu</h1>
                    {menuItems.starter.map((item, index) => (
                        <MenuItem key={index} {...item} />
                    ))}
                </div>
            </div>

            {/* Main Course Section */}
            <Section title='Main Course' imageSrc='/menu/maincourse.png' items={menuItems.mainCourse} />

            {/* Statistics Section */}
            <StatsSection />

            {/* Dessert Section */}
            <div className='mt-[60px] flex'>
                <Image src='/menu/dessert.png' alt='Dessert' width={348} height={520} className='ml-52' />
                <div className='w-1/2 p-8'>
                    <h1 className='text-3xl font-bold h-[56px]'>Dessert</h1>
                    {menuItems.dessert.map((item, index) => (
                        <MenuItem key={index} {...item} />
                    ))}
                </div>
            </div>

            {/* Drinks Section */}
            <Section title='Drinks' imageSrc='/menu/drink.png' items={menuItems.drinks} />

            {/* Partners and Clients Section */}
            <PartnersSection />
        </div>
    );
};

const MenuItem = ({ name, price, description, calories }) => (
    <div className='border-b border-gray-300 pb-4 mb-4'>
        <h2 className='h-[32px] font-bold'>
            {name}
            <span className='text-[#FF9F0D] font-bold text-1xl float-right'>{price}$</span>
        </h2>
        <p className='font-normal h-[24px] text-[#4F4F4F]'>{description}</p>
        <p className='text-[#828282] font-normal'>{calories} CAL</p>
    </div>
);

const Section = ({ title, imageSrc, items }) => (
    <main className='max-w-6xl mx-auto py-12 space-y-12'>
        <section className='flex'>
            <div className='w-1/2 p-8 ml-20'>
                <h1 className='text-3xl font-bold h-[56px]'>{title}</h1>
                {items.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
            <div className='w-1/2 flex justify-end items-center pr-8'>
                <Image src={imageSrc} alt={title} width={348} height={526} />
            </div>
        </section>
    </main>
);

const StatsSection = () => (
    <div className='bg-black-2'>
        <div className='w-full h-[250px] flex justify-center items-center'>
            <div className='w-[80%] flex justify-between gap-[40px] items-center text-white px-10 md:lg:px-20'>
                <div className='flex justify-between gap-[20px] max-sm:grid max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                    {stats.map((stat, index) => (
                        <div key={index} className='flex flex-col gap-3 items-center justify-center'>
                            <Image src={stat.img} alt={stat.label} width={100} height={100} />
                            <p className='font-bold text-[18px] leading-[32px]'>{stat.label}</p>
                            <h1 className='font-bold text-[20px]'>{stat.value}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const PartnersSection = () => (
    <div className='text-center mt-10'>
        <h6 className='text-[#333333]'>Partners and Clients</h6>
        <h1 className='text-[#333333] font-bold text-3xl'>We work with the best people</h1>
        <div className='flex justify-center space-x-4 mt-10'>
            {partners.map((partner, index) => (
                <Image key={index} src={partner.img} alt='client' width={partner.width} height={partner.height} />
            ))}
        </div>
    </div>
);

const menuItems = {
    starter: [
        { name: 'Alder Grilled Chinook Salmon', price: 32, description: 'Toasted French bread topped with romano, cheddar', calories: 560 },
        { name: 'Berries and Creme Tart', price: 43, description: 'Gorgonzola, ricotta, mozzarella, taleggio', calories: 700 },
        { name: 'Tormentoso Bush Pizza Pintoage', price: 14, description: 'Ground cumin, avocados, peeled and cubed', calories: 1000 },
        { name: 'Spicy Vegan Potato Curry', price: 35, description: 'Spreadable cream cheese, crumbled blue cheese', calories: 500 },
    ],
    mainCourse: [
        { name: 'Optic Big Breakfast Combo', price: 32, description: 'Toasted French bread topped with romano, cheddar', calories: 560 },
        { name: 'Cashew Chicken With Stir-Fry', price: 32, description: 'Gorgonzola, ricotta, mozzarella, taleggio', calories: 560 },
        { name: 'Vegetables & Green Salad', price: 14, description: 'Ground cumin, avocados, peeled and cubed', calories: 1000 },
        { name: 'Spicy Vegan Potato Curry', price: 35, description: 'Spreadable cream cheese, crumbled blue cheese', calories: 500 },
    ],
    dessert: [
        { name: 'Fig and Lemon Cake', price: 32, description: 'Toasted French bread topped with romano, cheddar', calories: 560 },
        { name: 'Creamy mascarpone cake', price: 32, description: 'Gorgonzola, ricotta, mozzarella, taleggio', calories: 560 },
        { name: 'Pastry, blueberries, lemon juice', price: 14, description: 'Ground cumin, avocados, peeled and cubed', calories: 1000 },
        { name: 'Pain au chocolat', price: 35, description: 'Spreadable cream cheese, crumbled blue cheese', calories: 500 },
    ],
    drinks: [
        { name: 'Caffè Macchiato', price: 32, description: 'Toasted French bread topped with romano, cheddar', calories: 560 },
        { name: 'Aperol Spritz Capacianno', price: 32, description: 'Gorgonzola, ricotta, mozzarella, taleggio', calories: 560 },
        { name: 'Caffe Latte Campuri', price: 14, description: 'Ground cumin, avocados, peeled and cubed', calories: 1000 },
        { name: 'Tormentoso BushTea Pintoage', price: 35, description: 'Spreadable cream cheese, crumbled blue cheese', calories: 500 },
    ],
};

const stats = [
    { img: '/services/Group.png', label: 'Professional Chefs', value: 420 },
    { img: '/services/Group (1).png', label: 'Items Of Food', value: 320 },
    { img: '/services/Group (2).png', label: 'Years Of Experienced', value: 30 },
    { img: '/services/Group (3).png', label: 'Happy Customers', value: 220 },
];

const partners = [
    { img: '/menu/people1.png', width: 240.96, height: 129.23 },
    { img: '/menu/people2.png', width: 166.04, height: 128.68 },
    { img: '/menu/people3.png', width: 143.98, height: 127.01 },
    { img: '/menu/people4.png', width: 130.98, height: 129.37 },
    { img: '/menu/people5.png', width: 169.97, height: 129.17 },
    { img: '/menu/people6.png', width: 113.98, height: 129.08 },
];

export default Page;
