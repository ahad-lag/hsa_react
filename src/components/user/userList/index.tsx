import UserListItem from "./userListItem";

interface Props {
    userList : any[],
    deleteUserHandler : (id: any) => void
}

const UserList : React.FC<Props> = ({ userList , deleteUserHandler }) => {

    return(
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
                        نام
                        </th>
                        <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                        نام کاربری
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                        موبایل
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                        نوع کاربر
                        </th>
                        <th scope="col" className="relative py-3.5 pr-3 pl-4 sm:pl-6">
                        <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">

                    {
                        userList.map((user,index) => <UserListItem key={user.id} index={index} user={user} deleteUserHandler={deleteUserHandler} />)
                    }

                </tbody>
            </table>
        </div>
    );
}

export default UserList;