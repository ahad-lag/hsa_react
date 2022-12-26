import * as yup from 'yup';

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

export let insertUserFormSchima = yup.object().shape({
    first_name: yup.string().required().min(3),
    last_name: yup.string().required().min(3),
    gender:yup.string().required(),
    username: yup.string().required().min(4),
    phone: yup.string().required().min(8).matches(phoneRegExp, 'فرمت شماره همراه صحیح نیست'),
    email: yup.string().email(),
    password: yup.string().required().min(8),
    confirm_password: yup.string().required().oneOf([yup.ref('password'), null], 'کلمه های عبور همخوانی ندارند'),
    description: yup.string(),
    is_admin: yup.number().required(),
    status:yup.number().required(),
});