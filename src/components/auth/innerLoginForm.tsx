import { Form, FormikProps } from "formik";
import { LoginFormValuesInterface } from "../../contracts/authContractInterface";
import InputFrom from "../global/form/input";
import FormButton from "../global/form/formButton";

const InnerLoginForm = (props : FormikProps<LoginFormValuesInterface>) => {
    return (
        <Form className="space-y-6">
            <div>
                <InputFrom name="username" label="نام کاربری" type="username"/>
            </div>

            <div>
                <InputFrom name="password" label="کلمه عبور" type="password"/>
            </div>

            <div>
                <FormButton label="ورود" />
            </div>
        </Form>
    )
}

export default InnerLoginForm;