import * as yup from 'yup';

let loginFormValidate = yup.object().shape({
    username : yup.string().required().min(4),
    password : yup.string().required().min(8)
});

export default loginFormValidate