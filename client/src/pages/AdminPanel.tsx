import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { useState, useContext } from 'react';
import { addmovies } from '../http/movieAPI';
import { ADMIN_ROUT } from '../utils/consts_rout';
import { useNavigate } from 'react-router-dom';

const Admin = observer(() => {
    const context = useContext(Context);
    const history = useNavigate();

    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [typeId, setTypeId] = useState('');
    const [brandId, setBrandId] = useState('');

    const click = async (): Promise<void> => {
        try {
            let data;
            data = await addmovies(name, parseFloat(rating), image, description, parseFloat(typeId), parseFloat(brandId));
            
            context?.user.setUser(data);
            context?.user.setIsAuth(true);
            history(ADMIN_ROUT);
        } catch (error: any) {
            console.log(error.message); 
        }
      }
    return(
        <div className='container'>
            <h2>Админ панель</h2>
            <h3>Добавить фильм</h3>
            <div className='container-admin-panel'>
                <div className='form-add-movie'>
                    <input
                            className="input-add-movie"
                            placeholder="Название..."
                            value={name}
                            onChange={e => setName(e.target.value)}
                    />
                    <input
                            className="input-add-movie"
                            placeholder="Рейтинг"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                    />
                    <input
                            className="input-add-movie"
                            placeholder="Путь к изображению.."
                            value={image}
                            onChange={e => setImage(e.target.value)}
                    />
                    <input
                            className="input-add-movie"
                            placeholder="Описание..."
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                    />
                    <input
                            className="input-add-movie"
                            placeholder="Жанр..."
                            value={typeId}
                            onChange={e => setTypeId(e.target.value)}
                    />
                    <input
                            className="input-add-movie"
                            placeholder="Студия..."
                            value={brandId}
                            onChange={e => setBrandId(e.target.value)}
                    />
                     <button
                                className='btn-admin-panel'
                                onClick={click}
                            >
                                {'Добавить фильм'}
                    </button>
                </div>
            </div>
        </div>
    )
})

export default Admin;