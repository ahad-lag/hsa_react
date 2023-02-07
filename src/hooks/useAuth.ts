import useSWR from 'swr'
import Cookies from 'universal-cookie';
import axios from "axios";
import AlertToast from '../components/global/alertToast';

const cookies = new Cookies();

const getUser = async (token : string) => {

    let res = await axios.post('http://127.0.0.1:8000/api/userInfo',{},{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).catch(function (error) {
        if (error.response) {
          AlertToast('لطفا وارد شود','error');
          cookies.remove('hsa_token');
        }
      });
    return res?.data
}

const useAuth = () => {

    let token = cookies.get('hsa_token');

    const { data , error , isLoading } = useSWR(
        'user_info',
        () => getUser(cookies.get('hsa_token'))
    );

    return {
        isLoading,
        token,
        userInfo : data?.data,
        error
    }
}

export default useAuth;