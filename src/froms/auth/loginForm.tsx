import { withFormik } from "formik";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "../../contracts/authContractInterface";
import loginFormValidate from "../../validate/auth/loginFormValidate";

interface LoginFormPropsInterface {

}

const LoginForm = withFormik<LoginFormPropsInterface, LoginFormValuesInterface>({
    mapPropsToValues: props => {
        return {
            username: '',
            password: ''
        }
    },
    handleSubmit: (value) => {
        console.log(value);
    },
    validationSchema : loginFormValidate
})(InnerLoginForm)

export default LoginForm;