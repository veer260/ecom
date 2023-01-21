import { useField } from 'formik'
import React from 'react'

const testFormikHOC = (IncomingComponent) => {
  return function OutputComponent({name, ...rest}) {
    const field = useField(name);
    const [data, meta] = field;
    const {value, onChange, onBlur} = data;
    const {touched, error} = meta;

    return (
        <IncomingComponent
        // {...rest}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        touched={touched}
        name={name}
        error={error}
        {...rest}
        
        />
    )
  }
}

export default testFormikHOC