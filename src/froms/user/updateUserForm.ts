import axios from "axios";
import { withFormik } from "formik";
import InnerUpdateUserForm from "../../components/user/form/innerUpdateUserForm";
import { InsertUserFormValuesProps } from "../../contracts/userContractInterface";
import { insertUserFormSchima } from "../../validate/user/insertFormValidate";

interface UpdateUserFormProps {
    user : any,
    setShowLoading : React.Dispatch<React.SetStateAction<boolean>>,
    fetchAllUserHandler : (path: any, search?: string) => Promise<void>,
    setUpdateUserModal : React.Dispatch<React.SetStateAction<boolean>>,
}

const UpdateUserForm = withFormik<UpdateUserFormProps, InsertUserFormValuesProps>({
    mapPropsToValues: props => {
        return {
            id : props.user.id,
            first_name : props.user.first_name,
            last_name : props.user.last_name,
            gender : props.user.gender,
            username : props.user.username,
            phone : props.user.phone,
            email : props.user.email,
            password : props.user.password,
            description : props.user.description,
            is_admin : props.user.is_admin,
            status : props.user.status
        }
    },
    handleSubmit: async (values , props) => {
        props.props.setShowLoading(true)
        let res = await axios.post('http://127.0.0.1:8000/api/user/edit',values).catch(function (error) {
            if (error.response) {
                console.log('Error');
            }
        });
        console.log("update : " , res?.data);
        props.props.fetchAllUserHandler('http://127.0.0.1:8000/api/user/collection');
        props.props.setUpdateUserModal(false);
    },
    validationSchema : insertUserFormSchima
})(InnerUpdateUserForm)

export default UpdateUserForm;