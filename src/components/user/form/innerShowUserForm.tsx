
interface Props {
    user : any
}

const InnerShowUserForm : React.FC<Props> = ({ user }) => {
    return(
        <>
            <div className="flex justify-between">
                <div>
                    <div className="mb-6">
                        <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">نام</div>
                        <div className="pr-1">{user.first_name}</div>
                    </div>
                    <div className="mb-6">
                        <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">شماره همراه</div>
                        <div className="pr-1">{user.phone}</div>
                    </div>
                    <div className="mb-6">
                        <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">نام کاریری</div>
                        <div className="pr-1">{user.username}</div>
                    </div>
                </div>
                <div className="mr-7">
                    <div className="mb-6">
                        <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">نام خانوادگی</div>
                        <div className="pr-1">{user.last_name}</div>
                    </div>
                    <div className="mb-6">
                        <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">ایمیل</div>
                        {
                            user.email
                                ? <div className="pr-1">{user.email}</div>
                                : <div className="pr-1 text-rose-400">مقداری ثبت نشده</div>
                        }
                    </div>
                    <div className="mb-6">
                        <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">کلمه عبور</div>
                        <div className="pr-1">{user.password}</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mb-6">
                <div className=" grow">
                    <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">جنسیت</div>
                    <div className="pr-1">{user.gender == 'male' ? 'مرد' : 'زن'}</div>
                </div>
                <div className="mr-5 grow">
                    <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">نوع</div>
                    <div className="pr-1">{user.is_admin == 1 ? 'ادمین' : 'عادی'}</div>
                </div>
                <div className="mr-5 grow">
                    <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">وضعیت</div>
                    <div className="pr-1">{user.status == 1 ? 'فعال' : 'غیرفعال'}</div>
                </div>
            </div>
            <div className="flex mb-6">
                <div className="grow">
                    <div className="border-b-2 border-slate-600 text-slate-600 pb-1 px-1 mb-2">توضیحات</div>
                    {
                        user.description 
                            ? <div className="pr-1">{user.description}</div>
                            : <div className="pr-1 text-rose-400">مقداری ثبت نشده</div>
                    }
                </div>
            </div>
        </>
    )
}

export default InnerShowUserForm;