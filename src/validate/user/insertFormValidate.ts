import axios from 'axios';
import * as yup from 'yup';
import useAuth from '../../hooks/useAuth';

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

export let insertUserFormSchima = yup.object().shape({
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