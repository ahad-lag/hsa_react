import { withFormik } from "formik";
import InnerInsertUserForm from "../../components/user/form/innerInsertUserForm";
import { InsertUserFormValuesProps } from "../../contracts/userContractInterface";
import { insertUserFormSchima } from "../../validate/user/insertFormValidate";

interface InsertUserFormProps {
    name?: string
}

const InsertUserForm = withFormik<InsertUserFormProps, InsertUserFormValuesProps>({
    mapPropsToValues: props => {
        return {
            first_name : '',
            last_name : '',
            gender : 'male',
            username : '',
            phone : '',
            email : '',
            password : '',
            confirm_password : '',
            description : '',
            is_admin : 0,
            status : 1
        }
    },
    handleSubmit: async (values) => {
        console.log("Connect To API" , values)
    },
    validationSchema : insertUserFormSchima
})(InnerInsertUserForm)

export default InsertUserForm;