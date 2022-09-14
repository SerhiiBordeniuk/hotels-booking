import trash from "../../resources/img/trash.png";
import "./RoomItem.scss"

import { useSelector, useDispatch } from "react-redux";
import {inc, dec, hotelTotal} from "../../actions"
import { useState } from "react";

const RoomItem = (props) => {
  const {item, onDelete} = props

  const [hotelQuantity, setHotelQuantity] = useState(0)

  

  const hotelInc = (data) => {
    dispatch(inc(data))
    setHotelQuantity(hotelQuantity + 1)
    dispatch(hotelTotal())
  }

  const hotelDec = (data) => {
    dispatch(dec(data))
    setHotelQuantity(hotelQuantity !== 0 ? hotelQuantity - 1 : hotelQuantity)
    dispatch(hotelTotal())
  }


  const totalPrice = (quantity, price) => {
    if (quantity === 0) {
      let quantity = 1
      const total = quantity * price 
      return total
    } else {
      const total = quantity * price 
      return total
    }
  }

  const dispatch = useDispatch();

    return (
        <li className="room__item" key={item.id}>
            <img className="room__img" src={item.image} alt="rooms photo" />
            <div className="room__title">{item.title}</div>
            <div className="room__interaction">
                <div className="room__buttons">
                    <div className="room__counter">
                        <button onClick={() => hotelDec(item)} className="button dec">
                            -
                        </button>
                        <p className="counter">{hotelQuantity}</p>
                        <button onClick={() => hotelInc(item)} className="button inc">
                            +
                        </button>
                    </div>
                    <div className="rooms__price">{`$ ${totalPrice(hotelQuantity, item.price)}`}</div>
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
};


export default RoomItem;