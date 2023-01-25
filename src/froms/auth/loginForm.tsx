import { withFormik } from "formik";

import InnerLoginForm from "../../components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "../../contracts/authContractInterface";
import loginFormValidate from "../../validate/auth/loginFormValidate";


interface LoginFormPropsInterface {
    loginHandler : (value: object) => Promise<void>
}



// useEffect(() => {
//     if (LoggedIn){
//        return navigate("/");
//     }
//  },[LoggedIn]);

const LoginForm = withFormik<LoginFormPropsInterface, LoginFormValuesInterface>({
    mapPropsToValues: props => {
        return {
            username: '',
            password: ''
        }
    },
    handleSubmit: (value,props) => {
        props.props.loginHandler(value)
    },
    validationSchema : loginFormValidate
})(InnerLoginForm)

export default LoginForm;