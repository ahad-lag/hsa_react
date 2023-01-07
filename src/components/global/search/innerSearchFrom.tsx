import { FormikProps, Form } from "formik"
import { SearchValuesProps } from "../../../contracts/searchContractInterface";
import FormButton from "../../global/form/formButton";
import InputFrom from "../../global/form/input";

const InnerSearchForm = (props: FormikProps<SearchValuesProps>) => {

    return (
        <Form className="sm:flex mt-4 sm:mt-0 sm:mr-3">
            
            <div className="w-full">
                <InputFrom name="search" fieldClassName="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm" />
            </div>
            <FormButton label="جستجو" buttonClassName="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto cursor-pointer sm:mr-2" />

        </Form>
    )
}

export default InnerSearchForm;