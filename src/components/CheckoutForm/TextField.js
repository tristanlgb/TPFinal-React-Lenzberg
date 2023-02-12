import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="field">
      <label htmlFor={field.name} className="field__label">
        {label}
      </label>
      <input
        type="text"
        {...field}
        {...props}
        autoComplete="off"
        className={`field__input ${
          meta.touched && meta.error && "field__input--is-invalid"
        }`}
        placeholder={label}
      />
      <ErrorMessage
        component="span"
        name={field.name}
        className="field__error"
      />
    </div>
  );
};

export default TextField;
