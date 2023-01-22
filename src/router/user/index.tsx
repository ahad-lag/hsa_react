import axios from "axios";
import { useEffect, useState } from "react";
import LoadingModal from "../../components/global/loading";
import Pagination from "../../components/global/pagination";
import MasterPage from "../../components/masterPage";
import ModalForm from "../../components/modalForm";
import InnerShowUserForm from "../../components/user/form/innerShowUserForm";
import UserList from "../../components/user/userList";
import SearchForm from "../../froms/global/searchFrom";
import InsertUserForm from "../../froms/user/insertUserForm";
import UpdateUserForm from "../../froms/user/updateUserForm";


const UserIndex = () => {
    
    const defaultPath = 'http://127.0.0.1:8000/api/user/collection';
    const [showLoading, setShowLoading] = useState(false);
    const [showUserModal, setUserModal] = useState(false);
    const [showInsertUserModal, setInsertUserModal] = useState(false);
    const [showUpdateUserModal, setUpdateUserModal] = useState(false);
    const [usersList, setUsersList] = useState([]);
    const [user, setUser] = useState<any>({});
    const [search, setSearch] = useState('');
    const [meta, setMeta] = useState<any>({});

    useEffect(() => {
        setShowLoading(true);
        fetchAllUserHandler(meta.path ? meta.path : defaultPath)
    },[]);

    // fetch all users data from api
    let fetchAllUserHandler = async (path : any , search = '') => {
        let data = new FormData();
        data.append('search', search);
        let apiResult = await axios.post(
        path,
        data
        );
        setUsersList(apiResult?.data?.data);
        setMeta(apiResult?.data?.meta);
        setShowLoading(false);
    };

    // fetch user data from api
    let fetchUserHandler = async (id : any) => {
        const res = await axios.post('http://127.0.0.1:8000/api/user',{'id' : id}).catch(function (error) {
            if (error.response) {
                console.log('Error');
            }
        });
        return res;
    };

    // show user haneler
    let showUserHandler = async (id : any) => {
        setShowLoading(true);
        const user = await fetchUserHandler(id);
        setUser(user?.data?.data);
        setUserModal(true);
        setShowLoading(false);
        console.log(user);
    };

    //delete user handler
    const updateUserHandler = async (id : any) => {
        setShowLoading(true);
        let res = await fetchUserHandler(id)
        setUser(res?.data?.data);
        setUpdateUserModal(true);
        setShowLoading(false);
    }

    //delete user handler
    const deleteUserHandler = async (id : any) => {
        setShowLoading(true);
        const res = await axios.post('http://127.0.0.1:8000/api/user/destroy',{'id' : id}).catch(function (error) {
            if (error.response) {
                console.log('Error');
            }
        });
        if(res?.data?.status == 'success'){
            console.log(res?.data?.Message);
        }else{
            console.log(res?.data?.Message);
        }
        fetchAllUserHandler(defaultPath,search);
    }

    // for chenge page handler
    const pageination = (e : any) => {
        setShowLoading(true);
        const url = e.target.getAttribute('data-url');
        if(url != null){
            fetchAllUserHandler(url,search);
        }
    }

    // for search handler
    const searchBoxHandler = () => {
        setShowLoading(true);
        if(search.search.length > 0){
            fetchAllUserHandler(defaultPath , search)
        }else{
            fetchAllUserHandler(meta.path ? meta.path : defaultPath)
        }
    }

    return (
        <MasterPage>
            <div className='sm:flex sm:items-center -mx-4 shadow ring-1 ring-black bg-white ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg p-4'>
                <div className="w-full">
                    <SearchForm setSearch={setSearch} searchBoxHandler={searchBoxHandler} />
                </div>
                <div className="flex-auto">
                    <button
                        type="button"
                        onClick={() => setInsertUserModal(true)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto cursor-pointer sm:mr-2"
                    >
                        جدید
                    </button>
                </div>
            </div>
    
            <UserList usersList={usersList} deleteUserHandler={deleteUserHandler} updateUserHandler={updateUserHandler} showUserHandler={showUserHandler} />

            <div className="mt-6">
                { meta.from && <Pagination meta={meta} pageination={pageination} />}
            </div>
            { showLoading && <LoadingModal showLoading={showLoading} />}
            { showUserModal && <ModalForm subject="مشاهده کاربر" show={showUserModal} setShow={setUserModal} ><InnerShowUserForm user={user} /></ModalForm>}
            { showInsertUserModal && <ModalForm subject="کاربر جدید" show={showInsertUserModal} setShow={setInsertUserModal} ><InsertUserForm setInserUserModal={setInsertUserModal} setShowLoading={setShowLoading} fetchAllUserHandler={fetchAllUserHandler} /></ModalForm>}
            { showUpdateUserModal && <ModalForm subject="ویرایش کاربر" show={showUpdateUserModal} setShow={setUpdateUserModal} ><UpdateUserForm user={user} setShowLoading={setShowLoading} fetchAllUserHandler={fetchAllUserHandler} setUpdateUserModal={setUpdateUserModal} /></ModalForm>}
        </MasterPage>
    )
}

export default UserIndex;