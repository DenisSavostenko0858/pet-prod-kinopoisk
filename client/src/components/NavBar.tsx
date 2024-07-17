import { useNavigate} from "react-router-dom";
import { LOGIN_ROUT } from "../utils/consts_rout";

function NavBar(){
    const navigate = useNavigate();

    return(
        <div className="container-nav-bar">
            <div className="nav-bar-left">
                <div className="nav-bar-logo">
                    <h2>Kinopolis</h2>
                </div>
                <div className="nav-bar-links">
                    <a href="">Главная</a>
                    <a href="">Фильмы</a>
                    <a href="">Категории</a>
                    <a href="">О проекте</a>
                </div>
            </div>
            <div className="nav-bar-right">
                <div className="nav-bar-search">
                    <input type="text" placeholder="Поиск..." className="input-search"/>
                </div>
                <div className="nav-bar-auth">
                    <a href="/login">Войти</a>
                    <button onClick={()=> navigate(LOGIN_ROUT)}>Войти</button>
                    <a href="">Регистрация</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;