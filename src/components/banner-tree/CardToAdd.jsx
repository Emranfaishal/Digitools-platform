import React, { useState } from 'react';

const CardToAdd = ({ card }) => {
    const [buy, setBuy] = useState(false);
    const handleBuy = () => {
        setBuy(true);
    }
    return (
        <div className='shadow-lg rounded-lg mt-10'>

            <div className='p-10 space-y-3'>
                <div className='flex justify-between  items-center'>
                    <button className='btn w-15 h-15 rounded-full'>
                        <span className="text-4xl">{card.icon}</span>
                    </button>
                    <button className='bg-blue-400 w-25 rounded-2xl ml-5'>
                        {card.tag}
                    </button>

                </div>
                <div>
                    <h2 className='text-2xl font-bold'>{card.name}</h2>
                    <p className='text-[#627382]'>{card.description}</p>
                </div>
                <div>
                    <p><span className='text-2xl font-bold'> $ {card.price}</span> /{card.period}</p>
                </div>
                <div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card.features}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card.features[1]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card.features[2]}</span>
                        </li>
                    </ul>
                    <button onClick={handleBuy}
                        className='btn mt-5 w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600'>{buy ? "Now Add" : "Buy Add"}</button>
                </div>
            </div>
        </div>
    );
};

export default CardToAdd;