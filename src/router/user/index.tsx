import MasterPage from "../../components/masterPage";
import UserBody from "../../components/user";

interface Props {

}

const UserPage : React.FC<Props> = () => {
    return (
        <MasterPage>
            <UserBody />
        </MasterPage>
    )
}

export default UserPage;