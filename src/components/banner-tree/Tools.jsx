import React from 'react';

const Tools = ({ cardTo, setCardTo }) => {
    // console.log(cardTo);
    const totalPrice = cardTo.reduce((sum, item) => sum + item.price, 0);
    const Checkout = () => {
        setCardTo([]);
    }
    const deleteBtn = (item) => {
        const filteredArray = cardTo.filter(c => c.id !== item.id);
        setCardTo(filteredArray);

    }

    return (
        <div className='container mx-auto'>
            <div className='text-center space-y-3'>
                <h1 className='text-6xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>
            <div className='shadow-lg rounded-lg mt-10 p-20'>
                <h2 className='text-2xl font-bold'>Your Cart</h2>

                {
                    cardTo.length === 0 ? <div> card is emtry</div> :
                        <>
                            <div>
                                {
                                    cardTo.map(item =>
                                        <div key={item.id}>
                                            <div
                                                className='flex justify-between items-center shadow-lg bg-gray-100 rounded-lg mt-5 p-5'>
                                                <div className='flex gap-2'>
                                                    <div>
                                                        <span className="text-5xl">{item.icon}</span>
                                                    </div>
                                                    <div>
                                                        <p className='text-xl font-bold'>{item.name}</p>
                                                        <span className='text-xl font-bold'>{item.price}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button onClick={() => deleteBtn(item)}
                                                        className='btn text-red-500'>Remove</button>
                                                </div>
                                            </div>

                                        </div>)

                                }
                                <div className='flex justify-between items-center  rounded-lg bg-gray-300 mt-10 p-5'>
                                    <div className='text-2xl font-bold'>total</div>
                                    <div className='text-2xl font-bold'>$ {totalPrice}</div>
                                </div>
                                <button
                                    onClick={Checkout}
                                    className='p-5 btn mt-5 w-full rounded-full bg-linear-to-r from-indigo-600 to-purple-600'>
                                    Proceed to Checkout</button>

                            </div>
                        </>
                }


            </div>

        </div>
    );
};

export default Tools;