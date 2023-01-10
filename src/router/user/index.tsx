import axios from "axios";
import { useEffect, useState } from "react";
import LoadingModal from "../../components/global/loading";
import Pagination from "../../components/global/pagination";
import ModalForm from "../../components/modalForm";
import UserList from "../../components/user/userList";
import SearchForm from "../../froms/global/searchFrom";
import InsertUserForm from "../../froms/user/insertUserForm";


const UserIndex = () => {
    
    const defaultPath = 'http://127.0.0.1:8000/api/user/collection';
    const [ showLoading , setShowLoading ] = useState(false);
    const [ showInserUserModal , setInserUserModal ] = useState(false);
    const [userList, setUserList] = useState([]);
    const [search, setSearch] = useState('');
    const [meta, setMeta] = useState<any>({});

    useEffect(() => {
        fetchAllUserHandler(meta.path ? meta.path : defaultPath)
    },[]);

    // fetch data from api
    let fetchAllUserHandler = async (path : any , search = '') => {
        setShowLoading(true);
        let data = new FormData();
        data.append('search', search);
        let apiResult = await axios.post(
        path,
        data
        );
        setUserList(apiResult?.data?.data);
        setMeta(apiResult?.data?.meta);
        setShowLoading(false);
    };

    // for chenge page handler
    const pageination = (e : any) => {
        const url = e.target.getAttribute('data-url');
        if(url != null){
            fetchAllUserHandler(url,search);
        }
    }

    // for search handler
    const searchBoxHandler = () => {
        if(search.search.length > 0){
            fetchAllUserHandler(defaultPath , search)
        }else{
            fetchAllUserHandler(meta.path ? meta.path : defaultPath)
        }
    }

    return (
        <>
            <div className='sm:flex sm:items-center -mx-4 shadow ring-1 ring-black bg-white ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg p-4'>
                <div className="w-full">
                    <SearchForm setSearch={setSearch} searchBoxHandler={searchBoxHandler} />
                </div>
                <div className="flex-auto">
                    <button
                        type="button"
                        onClick={() => setInserUserModal(true)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto cursor-pointer sm:mr-2"
                    >
                        جدید
                    </button>
                </div>
            </div>
    
            <UserList userList={userList} />

            <div className="mt-6">
                { meta.from && <Pagination meta={meta} pageination={pageination} />}
            </div>
            { showLoading && <LoadingModal showLoading={showLoading} />}
            { showInserUserModal && <ModalForm subject="کاربر جدید" show={showInserUserModal} setShow={setInserUserModal} ><InsertUserForm setInserUserModal={setInserUserModal} fetchAllUserHandler={fetchAllUserHandler} /></ModalForm>}
        </>
    )
}

export default UserIndex;