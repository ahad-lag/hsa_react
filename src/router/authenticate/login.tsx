import axios from "axios";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

import LoginForm from "../../froms/auth/loginForm";
import AlertToast from "../../components/global/alertToast";




const Login : any = () => {

    const cookies = new Cookies();
    let navigate = useNavigate();
    let token = cookies.get('hsa_token');
    if(token) return navigate('/')
   
    const loginHandler = async (value : object) => {

        let res = await axios.post('http://127.0.0.1:8000/api/login',value);

        if(res.data.status === "success"){
            cookies.set('hsa_token', res?.data?.data?.token , { path: '/' ,  maxAge: 10 * 60 * 60 });
            AlertToast('خوش امدی ;-)','info');
            navigate("/")
        }else{
            AlertToast(res?.data?.Message,'error');
        }

    }

    return(
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">صفحه ورود</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LoginForm loginHandler={loginHandler}/>
                </div>
                </div>
            </div>
        </>
    )
}

export default Login;