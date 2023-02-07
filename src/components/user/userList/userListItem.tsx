
interface Props {
    index : number,
    user : any,
    deleteModal : (user: any) => void,
    updateUserHandler : (id: any) => void,
    showUserHandler: (id: any) => void
}

const UserListItem : React.FC<Props> = ({ index , user , deleteModal , updateUserHandler , showUserHandler}) => {

    return(
        <tr key={user.id}>
            <td className="w-full max-w-0 py-4 pr-4 pl-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pr-6">
                {index + 1}
                <dl className="font-normal lg:hidden">
                    <dt className="sr-only">نام</dt>
                    <dd className="mt-1 truncate text-gray-700">{user.name}</dd>
                    <dt className="sr-only sm:hidden">{user.username}</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{user.type}</dd>
                </dl>
            </td>
            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{user.name}</td>
            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{user.username}</td>
            <td className="px-3 py-4 text-sm text-gray-500">{user.phone}</td>
            <td className="px-3 py-4 text-sm text-gray-500">{user.type}</td>
            <td className="py-4 pr-3 pl-4 text-center text-sm font-medium sm:pl-6">
                <button onClick={() => showUserHandler(user.id)} className="text-xs text-green-700 hover:text-white border border-green-700 hover:bg-green-800 rounded-lg px-3 py-1.5 text-center">
                    مشاهده<span className="sr-only">show</span>
                </button>
                <button onClick={() => updateUserHandler(user.id)} className="text-xs text-indigo-700 hover:text-white border border-indigo-700 hover:bg-indigo-800 rounded-lg px-3 py-1.5 text-center mr-1">
                    ویرایش<span className="sr-only">edit</span>
                </button>
                <button onClick={() => deleteModal(user)} className="text-xs text-rose-700 hover:text-white border border-rose-700 hover:bg-rose-800 rounded-lg px-3 py-1.5 text-center mr-1">
                    حذف<span className="sr-only">delete</span>
                </button>
            </td>
        </tr>
    );
}

export default UserListItem;