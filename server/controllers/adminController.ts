import ApiError from '../error/ApiError';
import { Request, Response, NextFunction } from 'express';
import {User, Movie} from '../models/database_model';

class AdminController {
    async getUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const users = await User.findAll();
        res.json(users);
    }

    async getMovies(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const movies = await Movie.findAll();
        res.json(movies);
    }

    async addMovies(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const {name, rating, image, description} = req.body;
        
        if(!name ||!description || !rating || !image || !description){
            return next(ApiError.badRequest('Ошибка не указанно поле'));
        }

        const newMovie = await User.findOne({where: {name}});
        
        if (newMovie){
            return next(ApiError.badRequest('Фильм с таким именем уже добавлен'));
        }

        const createdMovie = await Movie.create({name, rating, image, description});
        res.json(createdMovie);
    }

    async deleteMovies(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const { id } = req.params;
    
        if(!id){ return next(ApiError.badRequest('Ошибка не указан id фильма'))}
        
        const deletedMovie = await Movie.findByPk(id);

        if(!deletedMovie){ return next(ApiError.badRequest('Фильм не найден'))}

        await deletedMovie.destroy();
        res.json({message: 'Фильм удален'});
    }
}

export default new AdminController();