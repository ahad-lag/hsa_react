import { toast } from "react-toastify";

const AlertToast= (msg : string, msgType : 'info'|'success'|'warning'|'error'|'default') => {
    return toast(
        msg, {
            position: "bottom-right",
            type: msgType,
            rtl:true,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }
    );
}



export default AlertToast ;