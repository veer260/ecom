import { useField } from "formik";
import React from "react";

const FormikHOC = (IncomingComponent) => {
  return function OutputComponent({ name, ...rest }) {
    const field = useField(name);
    const [data, meta] = field;
    // console.log(field);
    const { onChange, onBlur, value } = data;
    const { touched, error } = meta;
    // console.log('value of ');
    // console.log(value);
    let borderClass = "border-gray-300";
    if (error && touched) {
      borderClass = "border-primary-default";
    }
    return (
      <IncomingComponent
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        touched={touched}
        error={error}
        borderClass={borderClass}
        {...rest}
      />
    );
  };
};

export default FormikHOC;
