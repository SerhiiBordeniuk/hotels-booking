import "./RoomsList.scss";
import trash from "../../resources/img/trash.png";

import Spinner from "../spinner/Spinner";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {inc, dec} from "../../actions"

const { default: axios } = require("axios");

const RoomsList = () => {
    const [hotelData, setHotelData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setLoading(true);
        const res = await axios.get("https://6308173c46372013f5762546.mockapi.io/hotels")
        setLoading(false);
        setHotelData(res.data);
    };

    // const {hotelsCounter} = useSelector(state => state)
    const dispatch = useDispatch();

    const onDelete = async (id) => {
        const res = await axios
            .delete(`https://6308173c46372013f5762546.mockapi.io/hotels/${id}`)
            .then(setHotelData((data) => data.filter((item) => item.id !==id)));
    };


    function TotalPrice(price, quantity){
        return Number(price * quantity).toLocaleString('en-US');
    }

    const renderItems = (arr) => {
        const items = arr.map((item) => {

            if (arr.length === 0) {
                return <div>Array is empty</div>
            } else {
                return (
                    <li className="room__item" key={item.id}>
                        <img className="room__img" src={item.image} alt="rooms photo" />
                        <div className="room__title">{item.title}</div>
                        <div className="room__interaction">
                            <div className="room__buttons">
                                <div className="room__counter">
                                    <button onClick={() => dispatch(dec(item))} className="button dec">-</button>
                                    <p className="counter">{item.quantity}</p>
                                    <button onClick={() => dispatch(inc(item))} className="button inc">+</button>
                                </div>
                                <div className="rooms__price">{`$${TotalPrice(item.price, item.quantity)}`}</div>
                            </div>
                            <div className="rooms_button_delete">
                                <input
                                    key={item.id}
                                    onClick={() => onDelete(item.id)}
                                    className="trash__icon"
                                    type="image"
                                    src={trash}
                                />
                            </div>
                        </div>
                    </li>
                );
            }
        });

        return <ul className="rooms__grid">{items}</ul>;
    };

    const items = renderItems(hotelData);
    console.log(loading);
    const spinner = loading ? <Spinner /> : null;

    return (
        <div className="rooms__list">
            <div className="rooms__info">
                <h1 className="rooms__text">Rooms and rates</h1>
            </div>
            <div className="rooms__item__list">
                <p className="rooms__descr">
                    Each of our bright, light-flooded rooms come with everything you could possibly
                    need for a comfortable stay. And yes, comfort isn't our only objective, we also
                    value good design, sleek contemporary furnishing complemented by the rich tones
                    of nature's palette as visible from our rooms' sea-view windows and terraces.
                </p>
                {spinner}
                {items}
            </div>
        </div>
    );
};

export default RoomsList;
