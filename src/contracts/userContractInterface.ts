
export interface InsertUserFormValuesProps {
    first_name : string,
    last_name : string,
    gender : 'male' | 'famale',
    username : string,
    phone : string,
    email : string,
    password : string,
    confirm_password : string,
    description : string,
    is_admin : 0 | 1,
    status : 0 | 1
}