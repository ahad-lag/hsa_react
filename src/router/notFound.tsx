import React from "react";
import { useNavigate } from "react-router-dom";
import MasterPage from "../components/masterPage";
import useAuth from "../hooks/useAuth";

const NotFound : any = () => {

  let navigate = useNavigate();
  let { token , error } = useAuth();
  if(!token || error) return navigate('/login')

  return (
    <MasterPage>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
            <div className="text-6xl">۴۰۴</div>
            <hr className="mb-2" />
            <div>داداش داری اشتباه میزنی ;-)</div>
          </div>
        </div>
      </div>
    </MasterPage>
  );
}

export default NotFound;