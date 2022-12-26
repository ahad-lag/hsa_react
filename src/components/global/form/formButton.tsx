import { FC } from "react"

interface Props {
    label: string,
    type?: "submit" | "button" | "reset" | undefined
    buttonClassName?: string
}

const FormButton: FC<Props> = ({ label, type = "submit", buttonClassName }) => {
    return (
        <button
            type={type}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${buttonClassName ?? ''}`}
        >
            {label}
        </button>
    )
}

export default FormButton;