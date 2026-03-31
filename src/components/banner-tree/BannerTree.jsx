import Card from './Card';
import Tools from './Tools'
import React, { useState } from 'react';

const getData = async () => {
    const res = await fetch('/public/data.json');
    return res.json();
}
const getPromise = getData();

const BannerTree = ({ cardTo, setCardTo }) => {
    const [active, setActive] = useState('Products');

    // const [cardTo, setCardTo] = useState([]);
    // console.log(cardTo);
    return (
        <div className=''>

            <div className='p-20'>
                <div className="tabs tabs-box justify-center bg-transparent">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className=
                        {`tab rounded-full w-50 ${active === 'Products' ? 'bg-linear-to-t from-sky-500 to-indigo-500 text-white font-bold' : 'bg-gray-200 text-bold'
                            }`}
                        aria-label="Products"
                        onClick={() => setActive('Products')}
                        defaultChecked />

                    <input
                        type="radio"
                        name="my_tabs_1"
                        className=
                        {`tab rounded-full w-50 ${active === 'Card' ? 'bg-linear-to-t from-sky-500 to-indigo-500 text-white font-bold' : 'bg-gray-200 text-bold'
                            }`}
                        aria-label={`Card (${cardTo.length})`}
                        onClick={() => setActive('Card')} />
                </div>
            </div>

            {active === 'Products' &&
                <Card
                    getPromise={getPromise}
                    cardTo={cardTo}
                    setCardTo={setCardTo}></Card>}
            {active === 'Card' && <Tools
                cardTo={cardTo} setCardTo={setCardTo}></Tools>}

        </div>



    );
};

export default BannerTree;