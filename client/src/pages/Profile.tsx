import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { useContext } from 'react';
import { logout } from '../http/userAPI';

const Profile = observer(() => {

    const context = useContext(Context);

    const logOut = () => {
        logout();
        window.location.reload(); 
    }

    return(
        <div className="container">
            <div className="container-profile">
                <h2>Профиль</h2>
                <p>Почта:  {context?.user.user?.email}</p>
                <p>Роль:  {context?.user.user?.role}</p>
                <button onClick={() => logOut()}>Выйти</button>
            </div>
        </div>
    )
})

export default Profile;