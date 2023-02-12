import { Form, Formik } from "formik";
import { addNewOrder } from "../../utils/firebaseFetching";
import { useCartContext } from "../../context/CartState";
import { serverTimestamp } from "firebase/firestore";
import TextField from "./TextField";
import * as Yup from "yup";
import { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";

const CheckoutForm = ({ setId }) => {
  const { items } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, resetForm) => {
    setLoading(true);
    const order = {
      purcharse_data: {
        firsName: values.firstName,
        lastName: values.lastName,
        email: values.email.toLowerCase(),
      },
      products: items,
      date: serverTimestamp(),
    };
    const orderId = await addNewOrder(order);
    setId(orderId);
    resetForm({ values: "" });
    setLoading(false);
  };
  const emailRegEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "15 letras o menos")
      .required("info obligatoria"),
    lastName: Yup.string()
      .max(15, "15 letras o menos")
      .required("info obligatorio"),
    email: Yup.string()
      .email("correo electronico invalido", emailRegEx)
      .required("info obligatoria"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "los correos no coinciden")
      .required("info obligatoria"),
  });
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {(formik) => (
          <Form className="form">
            <div className="form__group">
              <TextField
                label="nombre"
                name="firstName"
                type="text"
                className="form__item"
              />
              <TextField
                label="apellido"
                name="lastName"
                type="text"
                className="form__item"
              />
            </div>
            <TextField label="Email" name="email" type="text" />
            <TextField label="Confirmar Email" name="confirmEmail" type="text" />
            <button type="submit" className="form__submit">
              {loading ? <ButtonLoader /> : "Completar mi compra 🐼"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
