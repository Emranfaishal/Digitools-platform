import React, { use } from 'react';
import CardToAdd from './CardToAdd';

const Card = ({ getPromise, cardTo, setCardTo }) => {
    const data = use(getPromise);
    // console.log(cardTo);

    return (
        <div className='container mx-auto'>
            <div className="">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
                    {data.map(card => <div key={card.id}>
                        <CardToAdd card={card} cardTo={cardTo} setCardTo={setCardTo}></CardToAdd>
                    </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Card;