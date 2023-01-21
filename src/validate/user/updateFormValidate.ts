import axios from 'axios';
import * as yup from 'yup';

let toPersian : any = { 
    first_name : 'نام',
    last_name : 'نام خانوادگی',
    gender : 'جنسیت',
    phone : 'شماره همراه',
    email : 'ایمیل',
    description : 'توضیحات',
    is_admin : 'نوع کاربر',
    status : 'وضعیت',
    username : 'نام کاربری', 
    password : 'کلمه عبور'
};

yup.setLocale({
mixed : {
    required : ({ path }) => `فیلد ${toPersian[path]} الزامی است`
},
string : {
    min : ({ path , min }) => `حداقل طول ${toPersian[path]} ${min} کاراکتر می باشد`
}
});

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

let username : any = null;
const checkUsername = async (value : any) {
    username == null ? username = value :null
    const res = await axios.post('http://127.0.0.1:8000/api/user/username/available',{'username' : username}).catch(function (error) {
        if (error.response) {
            console.log('Error username');
        }
    });
    return !(res?.data)
}

let phone : any = null;

export let updateUserFormSchima = yup.object().shape({
    first_name: yup.string().required().min(2),
    last_name: yup.string().required().min(2),
    gender:yup.string(),
    username: yup.string().required().min(4),
    phone: yup.string().required().min(8).matches(phoneRegExp, 'فرمت شماره همراه صحیح نیست'),
    email: yup.string().email().nullable(),
    password: yup.string().required().min(8),
    description: yup.string().nullable(),
    is_admin: yup.string(),
    status:yup.string(),
});