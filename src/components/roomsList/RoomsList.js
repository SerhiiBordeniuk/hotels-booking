import "./RoomsList.scss";
import trash from "../../resources/img/trash.png";
import singleroom from "../../resources/img/singleroom.jpg";
import doubleroom from "../../resources/img/doubleroom.jpg";
import twinroom from "../../resources/img/twinroom.jpg";

import Spinner from "../spinner/Spinner";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
const { default: axios } = require("axios");

const RoomsList = () => {
    const [hotelData, setHotelData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setLoading(true);
        await axios.get("https://6308173c46372013f5762546.mockapi.io/hotels").then((res) => {
            const allHotels = res.data;
            setLoading(false);
            return setHotelData(allHotels);
        });
    };

    const renderItems = (arr) => {
        const items = arr.map((item) => {
            if (!Array.isArray(arr)) {
                return <p>There was an error loading your data!</p>;
            } else {
                return (
                    <li className="room__item" key={item.id}>
                        <img className="room__img" src={item.image} alt="rooms photo" />
                        <div className="room__title">{item.title}</div>
                        <div className="room__interaction">
                            <div className="room__buttons">
                                <div className="room__counter">
                                    <button className="button inc">+</button>
                                    <p className="counter">1</p>
                                    <button className="button dec">-</button>
                                </div>
                                <div className="rooms__price">{`$${item.price}`}</div>
                            </div>
                            <div className="rooms_button_delete">
                                <input className="trash__icon" type="image" src={trash} />
                            </div>
                        </div>
                    </li>
                );
            }
        });

        return <ul className="rooms__grid">{items}</ul>;
    };

    const items = renderItems(hotelData);
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
            <div className="buy__container">
                <h2 className="price__total">Total price: $0</h2>
                <Link to="/payment" className="buy__button">
                    Buy
                </Link>
            </div>
        </div>
    );
};

export default RoomsList;
