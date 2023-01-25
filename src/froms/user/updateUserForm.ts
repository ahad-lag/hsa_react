import axios from "axios";
import { withFormik } from "formik";
import AlertToast from "../../components/global/alertToast";
import InnerUpdateUserForm from "../../components/user/form/innerUpdateUserForm";
import { InsertUserFormValuesProps } from "../../contracts/userContractInterface";
import { updateUserFormSchima } from "../../validate/user/updateFormValidate";

interface UpdateUserFormProps {
    user : any,
    setShowLoading : React.Dispatch<React.SetStateAction<boolean>>,
    fetchAllUserHandler : (path: any, search?: string) => Promise<void>,
    setUpdateUserModal : React.Dispatch<React.SetStateAction<boolean>>,
    token : any
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
        let res = await axios.post('http://127.0.0.1:8000/api/user/edit',values,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.props.token}`
            }
        }).catch(function (error) {
            if (error.response) {
                AlertToast('خطا در ویرایش','error');
            }
        });
        AlertToast(res?.data?.Message,'success');
        props.props.fetchAllUserHandler('http://127.0.0.1:8000/api/user/collection');
        props.props.setUpdateUserModal(false);
    },
    validationSchema : updateUserFormSchima
})(InnerUpdateUserForm)

export default UpdateUserForm;