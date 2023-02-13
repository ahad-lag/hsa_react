import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertToast from "../../components/global/alertToast";
import LoadingModal from "../../components/global/loading";
import Pagination from "../../components/global/pagination";
import MasterPage from "../../components/masterPage";
import ModalForm from "../../components/modal/modalForm";
import InsertSupply from "../../components/supply/insert";
import SearchForm from "../../froms/global/searchFrom";
import useAuth from "../../hooks/useAuth";


const SupplyIndex : any = () => {

    const [showLoading, setShowLoading] = useState(false);
    const [showInsertSupplyModal, setInsertSupplyModal] = useState(false);
    const [search, setSearch] = useState('');
    const [meta, setMeta] = useState<any>({});

    //for redirect
    let navigate = useNavigate();
    let { token , error } = useAuth();

    useEffect(() => {
        if(!token || error) return navigate('/login')
    },[]);


    // for chenge page handler
    const pageination = (e : any) => {
        setShowLoading(true);
        const url = e.target.getAttribute('data-url');
        if(url != null){
            // fetchAllUserHandler(url,search);
        }
    }

    // for search handler
    const searchBoxHandler = () => {
        // setShowLoading(true);
        // if(search.search.length > 0){
        //     fetchAllUserHandler(defaultPath , search)
        // }else{
        //     fetchAllUserHandler(meta.path ? meta.path : defaultPath)
        // }
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
                        onClick={() => setInsertSupplyModal(true)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto cursor-pointer sm:mr-2"
                    >
                        جدید
                    </button>
                </div>
            </div>
    
            {/* supply list */}
            {/* <UserList usersList={usersList} deleteUserHandler={deleteUserHandler} updateUserHandler={updateUserHandler} showUserHandler={showUserHandler} /> */}

            <div className="mt-6">
                { meta.from && <Pagination meta={meta} pageination={pageination} />}
            </div>
            { showLoading && <LoadingModal showLoading={showLoading} />}
            { showInsertSupplyModal && <ModalForm subject="تامین کننده جدید" show={showInsertSupplyModal} setShow={setInsertSupplyModal} ><InsertSupply /></ModalForm>}
        </MasterPage>
    )
}

export default SupplyIndex;