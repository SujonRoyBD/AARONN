import Image from 'next/image';
import React from 'react';

const Mywork = () => {
    const data = [
        {
            id: 1,
            img: "/aseats/my project/mywork/work1.jpg",
            title: "blue",
            desc: "Orvillebury"
        },
        {
            id: 2,
            img: "/aseats/my project/mywork/work2.jpg",
            title: "green",
            desc: "West Lavada"
        },
        {
            id: 3,
            img: "/aseats/my project/mywork/work3.jpg",
            title: "aqua",
            desc: "Rempelshire"
        },
        {
            id: 4,
            img: "/aseats/my project/mywork/work4.jpg",
            title: "lime",
            desc: "Delfinaland"
        },
        {
            id: 5,
            img: "/aseats/my project/mywork/work5.jpg",
            title: "fuchsia",
            desc: "Buckridgeburgh"
        },
        {
            id: 6,
            img: "/aseats/my project/mywork/work6.jpg",
            title: "black",
            desc: "Pfefferstad"
        },
        {
            id: 7,
            img: "/aseats/my project/mywork/work7.jpg",
            title: "purple",
            desc: "South Adrenne"
        },
        {
            id: 8,
            img: "/aseats/my project/mywork/work8.jpg",
            title: "maroon",
            desc: "Lake Trevor"
        },
    ]
    return (
        <div className='px-9 md:px-[150px]'>
            <div className='mt-12'>
                <h3 className='text-4xl font-bold'>My works</h3>
                <p className='mt-5'>Showcase About Works</p>
                <hr className='w-100% h-1 mt-20' />




            </div>
            <div className={`mt-9 grid grid-cols-1 md:grid-cols-3 gap-10`}>
                {
                    data.map((data) => {
                    return <div key={data.id} className={`${data?.id === 5 ? "w-full" : "w-[300px]"} `}>
                             
                            <Image src={data.img} alt='work' height={361} width={34} className='w-[5361px] h-[347px]' />
                            <p>{data.title}</p>
                            <p>{data.desc}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Mywork;


// 'use client';
// import Image from 'next/image';

// const data = [
//     {
//         id: 1,
//         img: "/aseats/my project/mywork/work1.jpg",
//         title: "blue",
//         desc: "Orvillebury"
//     },
//     {
//         id: 2,
//         img: "/aseats/my project/mywork/work2.jpg",
//         title: "green",
//         desc: "West Lavada"
//     },
//     {
//         id: 3,
//         img: "/aseats/my project/mywork/work3.jpg",
//         title: "aqua",
//         desc: "Rempelshire"
//     },
//     {
//         id: 4,
//         img: "/aseats/my project/mywork/work4.jpg",
//         title: "lime",
//         desc: "Delfinaland"
//     },
//     {
//         id: 5,
//         img: "/aseats/my project/mywork/work5.jpg",
//         title: "fuchsia",
//         desc: "Buckridgeburgh"
//     },
//     {
//         id: 6,
//         img: "/aseats/my project/mywork/work6.jpg",
//         title: "black",
//         desc: "Pfefferstad"
//     },
//     {
//         id: 7,
//         img: "/aseats/my project/mywork/work7.jpg",
//         title: "purple",
//         desc: "South Adrienne"
//     },
//     {
//         id: 8,
//         img: "/aseats/my project/mywork/work8.jpg",
//         title: "maroon",
//         desc: "Lake Trevor"
//     },
// ]

// const Card = ({ item }) => {
//     return (
//         <div className="border border-dashed border-blue-500 p-4 rounded-xl shadow-lg">
//             <Image src={item.img} alt={item.title} width={300} height={300} className="rounded-lg" />
//             <div className="text-center mt-3">
//                 {/* <p className="text-xs text-gray-400">{item.color}</p> */}
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//             </div>
//         </div>
//     );
// };

// export default function Mywork() {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//             {data.map((item) => (
//                 <Card key={item.id} item={item} />
//             ))}
//         </div>
//     );
// }
