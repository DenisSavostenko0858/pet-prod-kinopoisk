import {useContext, useState} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { HOME_ROUT, LOGIN_ROUT, REGISTER_ROUT } from '../utils/consts_rout';
import { useNavigate } from 'react-router-dom';
import {login, registration} from '../http/userAPI';

const Auth = observer(() => {
    const context = useContext(Context);
    const isLogin = location.pathname === LOGIN_ROUT;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const click = async (): Promise<void> => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(name, email, password);
            }
            context?.user.setUser(data);
            context?.user.setIsAuth(true);
            history(HOME_ROUT);
        } catch (error: any) {
            console.log(error.message); 
        }
      }

    return(
        <div className="container-auth">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 54px)' }}>
                <div style={{ width: 600, padding: 20 }}>
                    <h2 style={{ margin: 'auto' }}>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {!isLogin ?
                          <input
                                className="mt-3"
                                placeholder="Ваше Имя..."
                                value={name}
                                onChange={e => setName(e.target.value)}
                                type="name"
                            />
                         : <> </>
                         }
                        <input
                            className="mt-3"
                            placeholder="Введите ваш email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className="mt-3"
                            placeholder="Введите ваш пароль..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <a href={REGISTER_ROUT}>Зарегистрируйся!</a>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <a href={LOGIN_ROUT}>Войдите!</a>
                                </div>
                            }
                            <button
                                style={{ background: 'none', border: '1px solid green', padding: 5 }}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Auth;