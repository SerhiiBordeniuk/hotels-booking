import "./PaymentForm.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PaymentForm = () => {
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .min(3, "Name must be at least 3 characters")
                            .required("Name is required!"),
                        email: Yup.string()
                            .email("Email is invalid or already taken")
                            .required("Email is required!"),
                        phone: Yup.string()
                            .required("Phone is required!")
                            .matches(phoneRegExp, "Phone number is not valid"),
                        address: Yup.string()
                            .min(3, "Address must be at least 4 characters")
                            .required("Address is required!")
                    })}
                    onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
                >
                    <Form className="payment__form_inner">
                        <div className="payment__form__data">
                            <label htmlFor="name">Name</label>
                            <Field id="name" name="name" type="text" />
                            <ErrorMessage className="error" name="name" component="div" />

                            <label htmlFor="email">E-mail</label>
                            <Field id="email" name="email" type="email" />
                            <ErrorMessage className="error" name="email" component="div" />

                            <label htmlFor="phone">Phone</label>
                            <Field id="phone" name="phone" type="text" />
                            <ErrorMessage className="error" name="phone" component="div" />

                            <label htmlFor="address">Adress</label>
                            <Field id="address" name="address" type="text" />
                            <ErrorMessage className="error" name="address" component="div" />
                        </div>
                        <button type="submit" className="payment_button">
                            Click to pay
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default PaymentForm;
