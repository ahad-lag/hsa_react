import axios from "axios";
import { useEffect, useState } from "react";
import LoadingModal from "../../components/global/loading";
import ModalForm from "../../components/modalForm";
import UserList from "../../components/user/userList";
import InsertUserForm from "../../froms/user/insertUserForm";


const UserIndex = () => {
    
    const [ showLoading , setShowLoading ] = useState(false);
    const [ showInserUserModal , setInserUserModal ] = useState(false);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetchAllUserHandler()
    },[]);

    // fetch data from api
    let fetchAllUserHandler = async () => {
        setShowLoading(true)
        let apiResult = await axios.get('http://127.0.0.1:8000/api/user/collection');
        setUserList(apiResult?.data?.data)
        setShowLoading(false)
    };

    return (
        <>
            <form className='sm:flex sm:items-center -mx-4 shadow ring-1 ring-black bg-white ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg p-4'>
                <div className="w-full">
                    <input
                        type="text"
                        name="search"
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                    />
                </div>
                <div className="mt-4 sm:mt-0 sm:mr-3 sm:flex-none">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto cursor-pointer"
                    >
                        جستجو
                    </button>
                    <button
                        type="button"
                        onClick={() => setInserUserModal(true)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto cursor-pointer sm:mr-2"
                    >
                        عضو جدید
                    </button>
                </div>
            </form>
            
            <UserList userList={userList} />

            {/* <div className="mt-6">
                { meta.from && <Pagination meta={meta} pageination={pageHandler} />}
            </div> */}
            { showLoading && <LoadingModal showLoading={showLoading} />}
            { showInserUserModal && <ModalForm subject="کاربر جدید" show={showInserUserModal} setShow={setInserUserModal} ><InsertUserForm /></ModalForm>}
        </>
    )
}

export default UserIndex;