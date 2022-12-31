import { FormikProps, Form } from "formik"
import { InsertUserFormValuesProps } from "../../../contracts/userContractInterface";
import FormButton from "../../global/form/formButton";
import InputFrom from "../../global/form/input";
import SelectBoxFrom from "../../global/form/selectBox";
import TextareaFrom from "../../global/form/textarea";

const InnerInsertUserForm = (props: FormikProps<InsertUserFormValuesProps>) => {

    const genderOptions = [["male", "مرد"], ["famale", "زن"]];
    const typeOptions = [["0", "کاربر"], ["1", "مدیر"]];
    const statusOptions = [["0", "فعال"], ["1", "غیرفعال"]];
    
    return (
        <Form className="space-y-3">
            
            <div className="flex bg-white justify-center">
                <div className="flex-1">
                    <InputFrom name="first_name" label="نام" />
                </div>
                <div className="flex-1 mr-3">
                    <InputFrom name="last_name" label="نام خانوادگی" />
                </div>
            </div>
            <div className="flex bg-white justify-center">
                <div className="flex-1">
                    <InputFrom name="phone" label="شماره همراه" />
                </div>
                <div className="flex-1 mr-3">
                    <InputFrom name="email" label="ایمیل" />
                </div>
            </div>
            <div className="flex bg-white justify-center">
                <div className="flex-1">
                    <InputFrom name="username" label="نام کاربری" />
                </div>
                <div className="flex-1 mr-3">
                    <InputFrom name="password" label="کلمه عبور" />
                </div>
            </div>
            <div className="flex bg-white justify-center items-stretch">
                <div className="flex-1">
                    <SelectBoxFrom name="gender" label="جنسیت" options={genderOptions}/>
                </div>
                <div className="flex-1 mr-3">
                    <SelectBoxFrom name="is_admin" label="نوع کاربر" options={typeOptions}/>
                </div>
                <div className="flex-1 mr-3">
                    <SelectBoxFrom name="status" label="وضعیت" options={statusOptions}/>
                </div>
            </div>
            <div className="flex-1">
                <TextareaFrom name="description" label="توضیحات" />
            </div>

            <div>
                <FormButton label="تایید"/>
            </div>

        </Form>
    )
}

export default InnerInsertUserForm;

    // first_name : '',
    // last_name : '',
    // gender : 'male',
    // username : '',
    // phone : '',
    // email : '',
    // password : '',
    // confirm_password : '',
    // description : '',
    // is_admin : 0,
    // status : 1
    // | count | : 11