import axios from "axios";
import { withFormik } from "formik";
import AlertToast from "../../components/global/alertToast";
import InnerInsertUserForm from "../../components/user/form/innerInsertUserForm";
import { InsertUserFormValuesProps } from "../../contracts/userContractInterface";
import { insertUserFormSchima } from "../../validate/user/insertFormValidate";

interface InsertUserFormProps {
    name?: string,
    setInserUserModal : React.Dispatch<React.SetStateAction<boolean>>,
    setShowLoading : React.Dispatch<React.SetStateAction<boolean>>,
    fetchAllUserHandler : (path: any, search?: string) => Promise<void>,
    token : any
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
            description : '',
            is_admin : '0',
            status : '1'
        }
    },
    handleSubmit: async (values , props) => {
        props.props.setShowLoading(true)
        let res = await axios.post('http://127.0.0.1:8000/api/user/insert',values,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.props.token}`
            }
        }).catch(function (error) {
            if (error.response) {
                AlertToast('خطا در درج','error');
            }
        });
        AlertToast(res?.data?.Message,'success');
        props.props.fetchAllUserHandler('http://127.0.0.1:8000/api/user/collection');
        props.props.setInserUserModal(false);
    },
    validationSchema : insertUserFormSchima
})(InnerInsertUserForm)

export default InsertUserForm;