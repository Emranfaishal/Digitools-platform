import React, { use } from 'react';
import CardToAdd from './CardToAdd';

const Card = ({ getPromise }) => {
    const data = use(getPromise);

    return (
        <div className='mt-20 container mx-auto'>

            <div className='text-center space-y-3'>
                <h1 className='text-6xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>
            <div className="">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
                    {data.map(card => <div key={card.id}>
                        <CardToAdd card={card}></CardToAdd>
                    </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Card;