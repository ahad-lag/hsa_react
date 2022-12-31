import { FC } from "react";
import { Field, ErrorMessage } from "formik"

interface Props {
    name : string,
    label : string,
    labelClassName? : string,
    fieldClassName? : string,
    errorMassageClassName? : string
}

const TextareaFrom : FC<Props> = ({ name , label , labelClassName , fieldClassName , errorMassageClassName }) => {
    return (
        <>
            <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClassName ?? ''}`}>
                {label}
            </label>
            <Field name={name} as='textarea' className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${fieldClassName ?? ''}`} />
            <ErrorMessage name={name} className={`text-sm text-rose-500 ${errorMassageClassName ?? ''}`} component="div" />
        </>
    )
}

export default TextareaFrom;