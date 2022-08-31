import "./PaymentForm.scss";

import { Formik } from "formik";

const PaymentForm = () => {
    return (
        <div className="payment__form">
            <div className="payment__info">
                <h1 className="payment__info_title">Proceed with your order</h1>
                <p className="payment__info_text">
                    497 Evergreen Rd. Roseville, <br /> CA 95673 <br />
                    Phone: +44 345 678 903 <br />
                    Email: luxury_hotels@gmail.com
                </p>
            </div>
            <div className="payment__data">
                <div className="payment__header">
                    <h1 className="payment__title">Payment</h1>
                    <p className="payment__total">Total price: $0</p>
                </div>
                <form className="payment__form_inner">
                    <div className="payment__form__data">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" />
                        <label htmlFor="email">E-mail</label>
                        <input id="email" name="email" type="email" />
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" name="phone" type="text" />
                        <label htmlFor="adress">Adress</label>
                        <input id="adress" name="adress" type="text" />
                    </div>
                    <button className="payment_button">Click to pay</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;
