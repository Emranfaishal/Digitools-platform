import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { IoMdCheckmark } from "react-icons/io";

const CardToAdd = ({ card, cardTo, setCardTo }) => {
    const [buy, setBuy] = useState(false);
    // console.log(cardTo);
    const handleBuy = () => {
        // console.log(cardTo);
        // console.log(card);
        setBuy(true);

        const isFond = cardTo.find(item => item.id === card.id);
        // console.log(isFond);
        if (isFond) {
            toast.error("Item already added to card!");
            return;

        }
        setCardTo([...cardTo, card]);
        toast.success("Item to add success")
    }
    return (
        <div className='shadow-lg rounded-lg mt-10 border-amber-200  hover:-translate-y-3 duration-300 hover:shadow-xl'>

            <div className='p-10 space-y-3'>
                <div className='flex justify-between  items-center'>
                    <button className='btn w-15 h-15 rounded-full'>
                        <span className="text-4xl">{card.icon}</span>
                    </button>

                    <div
                        className={
                            `top-6 right-6 
                            ${card.tag == 'popular' && 'bg-[#FEF3C7] text-[#92400E]'}
                             ${card.tag == 'best seller' && 'text-[#4F39F6] bg-purple-100'}  
                             text-md ${card.tag == 'new' && 'bg-green-100 text-green-600'} font-semibold px-4 py-1.5 rounded-full`}>
                        {card.tag}
                    </div>
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
                    <button
                        onClick={handleBuy}
                        className={`btn mt-5 text-bold w-full rounded-lg 
                            ${buy ? "bg-green-500" : "bg-linear-to-r from-indigo-600 to-purple-600"
                            }`} >
                        {buy ? "Added to cart!" : "Buy Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardToAdd;