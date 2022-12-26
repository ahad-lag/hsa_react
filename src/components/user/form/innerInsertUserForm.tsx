import { FormikProps, Form } from "formik"
import { InsertUserFormValuesProps } from "../../../contracts/userContractInterface";
import FormButton from "../../global/form/formButton";
import InputFrom from "../../global/form/input";

const InnerInsertUserForm = (props: FormikProps<InsertUserFormValuesProps>) => {
    return (
        <Form className="space-y-6">
            
            <div>
                <InputFrom name="first_name" label="نام و نام خانوادگی" />
            </div>

            <div>
                <FormButton label="تایید"/>
            </div>

        </Form>
    )
}

export default InnerInsertUserForm;