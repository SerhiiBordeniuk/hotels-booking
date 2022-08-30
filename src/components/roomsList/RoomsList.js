import "./RoomsList.scss";
import trash from "../../resources/img/trash.png";
import singleroom from "../../resources/img/singleroom.jpg";
import doubleroom from "../../resources/img/doubleroom.jpg";
import twinroom from "../../resources/img/twinroom.jpg";

const RoomsList = () => {
    return (
        <div className="rooms__list">
            <div className="rooms__info">
                <h1 className="rooms__text">Rooms and rates</h1>
                <p className="rooms__descr">
                    Each of our bright, light-flooded rooms come with everything you could possibly
                    need for a comfortable stay. And yes, comfort isn't our only objective, we also
                    value good design, sleek contemporary furnishing complemented by the rich tones
                    of nature's palette as visible from our rooms' sea-view windows and terraces.
                </p>
            </div>
            <div className="rooms__item__list">
                <ul className="rooms__grid">
                    <li className="room__item">
                        <img className="room__img" src={singleroom} alt="rooms photo" />
                        <div className="room__title">Single room</div>
                        <div className="room__interaction">
                            <div className="room__buttons">
                                <div className="room__counter">
                                    <button className="button inc">+</button>
                                    <p className="counter">1</p>
                                    <button className="button dec">-</button>
                                </div>
                                <div className="rooms__price">$147</div>
                            </div>
                            <div className="rooms_button_delete">
                                <img className="trash__icon" src={trash} />
                            </div>
                        </div>
                    </li>
                    <li className="room__item">
                        <img className="room__img" src={doubleroom} alt="rooms photo" />
                        <div className="room__title">Double room</div>
                        <div className="room__interaction">
                            <div className="room__buttons">
                                <div className="room__counter">
                                    <button className="button inc">+</button>
                                    <p className="counter">1</p>
                                    <button className="button dec">-</button>
                                </div>
                                <div className="rooms__price">$147</div>
                            </div>
                            <div className="rooms_button_delete">
                                <img className="trash__icon" src={trash} />
                            </div>
                        </div>
                    </li>
                    <li className="room__item">
                        <img className="room__img" src={twinroom} alt="rooms photo" />
                        <div className="room__title">Twine room</div>
                        <div className="room__interaction">
                            <div className="room__buttons">
                                <div className="room__counter">
                                    <button className="button inc">+</button>
                                    <p className="counter">1</p>
                                    <button className="button dec">-</button>
                                </div>
                                <div className="rooms__price">$147</div>
                            </div>
                            <div className="rooms_button_delete">
                                <img className="trash__icon" src={trash} />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RoomsList;
