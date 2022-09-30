import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItem } from '../Redux/Reducers/ItemSlice';

const Header = () => {
    const MenuItems =
        <>
            <li><Link to='/'>Home</Link></li>
            {/* <li><Link to='/blogs'>Blogs</Link></li> */}

        </>

    const [price, setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state) => state.ItemReducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const dlt = (pid) => {
        //console.log(pid);
        dispatch(deleteItem(pid))
    }


    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.quantity + price;
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                            {MenuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">Treat me</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {MenuItems}
                    </ul>
                </div>


                <div className="navbar-end">

                    {/* ======= */}

                    <label htmlFor="my-modal" className="btn modal-button">

                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item bg-none">{getdata.length}</span>
                        </div>

                    </label>
                    {getdata.length ? <div>
                        <input type="checkbox" id="my-modal" className="modal-toggle" />

                        <div className="modal">
                            <div className="modal-box">
                                <div className="overflow-x-auto w-full">

                                    <table className="table w-full">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Selected Item
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {getdata.map(item => <tr key={item.id}>

                                                <td>
                                                    {item.title}
                                                </td>
                                                <td>
                                                    quantity:{item.quantity}
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary btn-xs" onClick={() => dlt(item.pid)}>delete</button>
                                                </td>
                                            </tr>
                                            )}

                                        </tbody>


                                    </table>
                                    <p className='text-center'>Total :{price}</p>
                                </div>



                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn">close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                        : <div>
                            <input type="checkbox" id="my-modal" className="modal-toggle" />

                            <div className="modal">
                                <div className="modal-box">
                                    No data

                                    <div className="modal-action">
                                        <label htmlFor="my-modal" className="btn">close</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        // alert('empty')
                    }

                </div>

            </div>
        </div >
    );
};

export default Header;


