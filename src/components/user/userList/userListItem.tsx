
interface Props {
    index : number
    user : any,
}

const UserListItem : React.FC<Props> = ({ index , user }) => {
    return(
        <tr key={1}>
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
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                ویرایش<span className="sr-only">, ahad</span>
                </a>
            </td>
        </tr>
    );
}

export default UserListItem;