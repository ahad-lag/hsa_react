import Cookies from 'universal-cookie';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AlertToast from '../global/alertToast';

interface Props {
  setSideBar : React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar : React.FC<Props> = ({ setSideBar }) => {

  const cookies = new Cookies();
  const navigate = useNavigate();
  const { token , userInfo } = useAuth();
  
  const logout = () => {
    let res = axios.post('http://127.0.0.1:8000/api/logout',{},{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    cookies.remove('hsa_token');
    AlertToast('به امید دیدار','info');
    navigate("/login");
  }

  return(
      <div className="flex justify-end bg-gray-50 shadow h-16 items-center px-4">
        {/* close side-bar section */}
        <button className="lg:hidden text-gray-500 ml-2 p-2 focus:ring-gray-200 focus:ring-2" onClick={() => {setSideBar(true)}}>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>

        {/* <div className="w-full">
          <form className="flex w-full items-center">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <input type='text' className="w-full h-14 pr-4 outline-none bg-gray-50" placeholder="جستجو" />
          </form>
        </div> */}
        <div className="flex items-center">
          <div className="pl-3">
            <span className="flex bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-500">{userInfo?.first_name && `${userInfo?.first_name} ${userInfo?.last_name}`}</span>
          </div>
          <div className="pl-3">
            <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-rose-700 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
            </svg>
          </div>
        </div>
      </div>
  )
}

export default NavBar;