import { useState } from "react";
import LoadingModal from "../global/loadingModal";


const UserBody = () => {
    
    const [ showLoading , setShowLoading ] = useState(false);

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
                </div>
            </form>
            <div className="-mx-4 mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:pr-6">
                            ردیف
                            </th>
                            <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 lg:table-cell"
                            >
                            نام شرکت
                            </th>
                            <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                            >
                            کد/شناسه ملی
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                            رابط
                            </th>
                            <th scope="col" className="relative py-3.5 pr-3 pl-4 sm:pl-6">
                            <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        
                        <tr key={1}>
                            <td className="w-full max-w-0 py-4 pr-4 pl-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pr-6">
                                1
                                <dl className="font-normal lg:hidden">
                                <dt className="sr-only">نام شرکت</dt>
                                <dd className="mt-1 truncate text-gray-700">ahad</dd>
                                <dt className="sr-only sm:hidden">0018663400</dt>
                                <dd className="mt-1 truncate text-gray-500 sm:hidden">0018663400</dd>
                                </dl>
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">ahad</td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">0018663400</td>
                            <td className="px-3 py-4 text-sm text-gray-500">ahad lag</td>
                            <td className="py-4 pr-3 pl-4 text-center text-sm font-medium sm:pl-6">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                ویرایش<span className="sr-only">, ahad</span>
                                </a>
                            </td>
                        </tr>

                    </tbody>

                    {/* <div className="mt-6">
                        { meta.from && <Pagination meta={meta} pageination={pageHandler} />}
                    </div> */}
                    { showLoading && <LoadingModal showLoading={showLoading} setShowLoading={setShowLoading} />}

                </table>
            </div>
        </>
    )
}

export default UserBody;