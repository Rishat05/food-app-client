import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import products from './products';
import { AddItem } from '../Redux/Reducers/ItemSlice';

const Items = () => {

    const dispatch = useDispatch();


    const AddToCart = (item) => {
        dispatch(AddItem(item));
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fast-dusk-76858.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);


    return (
        <div className='grid md:grid-cols-3 gap-4 grid-cols-1 container mx-auto px-4 my-5'>
            {
                data.map((item, id) =>
                    <div className="card bg-base-100 shadow-xl" key={id}>
                        <figure className=''><img className='h-3/4 w-3/4 mx-auto' src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <h4>Price: {item.price}$</h4>
                            <p>{item.des}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => AddToCart(item)}>Order Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Items;