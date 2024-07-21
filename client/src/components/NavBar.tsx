import { useContext} from "react";
import {Context} from '../main';
import {observer} from 'mobx-react-lite'
import { logout } from '../http/userAPI';

const NavBar = observer(() =>{
    const context = useContext(Context);

    const logOut = () => {
        logout();
        window.location.reload(); 
    }
    return(
        <div className="container-nav-bar">
            <div className="nav-bar-left">
                <div className="nav-bar-logo">
                    <a href="/"><h2>Kinopolis</h2></a>
                </div>
                <div className="nav-bar-links">
                    <a href="/">Главная</a>
                    <a href="/movie">Фильмы</a>
                    <a href="/category">Категории</a>
                    <a href="/about">О проекте</a>
                </div>
            </div>
            <div className="nav-bar-right">
                <div className="nav-bar-search">
                    <input type="text" placeholder="Поиск..." className="input-search"/>
                </div>
                <div className="nav-bar-auth">
                {context?.user.isAuth ?
                    <>
                        <a href="/profile">Профиль</a>
                        <button onClick={() => logOut()}>Выйти</button>
                    </>    
                    :
                    <>
                        <a href="/login">Войти</a>
                        <a href="/register">Регистрация</a>
                    </>
                }
                </div>
            </div>
        </div>
    )
});

export default NavBar;