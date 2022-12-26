import { FC } from "react";
import { Field, ErrorMessage } from "formik"

interface Props {
    name : string,
    label : string,
    type? : string,
    labelClassName? : string,
    fieldClassName? : string,
    errorMassageClassName? : string
}

const InputFrom : FC<Props> = ({ name , label , type = 'text' , labelClassName , fieldClassName , errorMassageClassName }) => {
    return (
        <>
            <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClassName ?? ''}`}>
                {label}
            </label>
            <Field name={name} type={type} className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${fieldClassName ?? ''}`} />
            <ErrorMessage name={name} className={`text-sm text-rose-500 ${errorMassageClassName ?? ''}`} component="div" />
        </>
    )
}

export default InputFrom;