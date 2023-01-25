import useSWR from 'swr'
import Cookies from 'universal-cookie';
import axios from "axios";

const getUser = async (token : string) => {

    let res = await axios.post('http://127.0.0.1:8000/api/userInfo',{},{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return res?.data
}

const useAuth = () => {

    const cookies = new Cookies();
    let token = cookies.get('hsa_token');

    const { data , error , isLoading } = useSWR(
        'user_info',
        () => getUser(token)
    );
    
    return {
        isLoading,
        token,
        userInfo : data?.data,
        error
    }
}

export default useAuth;