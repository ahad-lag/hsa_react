import { FC } from "react";
import { Field, ErrorMessage } from "formik"

interface Props {
    name : string,
    label : string,
    options : string[][],
    labelClassName? : string,
    fieldClassName? : string,
    errorMassageClassName? : string
}

const SelectBoxFrom : FC<Props> = ({ name , label , options , labelClassName , fieldClassName , errorMassageClassName }) => {
    return (
        <>
            <label htmlFor={name} className={`block text-sm font-medium text-gray-700 ${labelClassName ?? ''}`}>
                {label}
            </label>
            <Field name={name} as='select' className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${fieldClassName ?? ''}`}>
                {
                    options.map((value) => <option value={value[0]}>{value[1]}</option>)
                }
            </Field>
            <ErrorMessage name={name} className={`text-sm text-rose-500 ${errorMassageClassName ?? ''}`} component="div" />
        </>
    )
}

export default SelectBoxFrom;