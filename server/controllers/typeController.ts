import ApiError from '../error/ApiError';
import { Request, Response, NextFunction } from 'express';
import {Type} from '../models/database_model'

class TypeController {
    async getTypes(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const types = await Type.findAll();
        res.json(types);
    }

    async addType(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const {name} = req.body;
        
        if(!name){
            return next(ApiError.badRequest('Неккоректное имя жанра'));
        }

        const newType = await Type.create({name});
        res.json(newType);
    }

    async dellType(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const {id} = req.params;
        
        if(!id){
            return next(ApiError.badRequest('Ошибка не указан id жанра'));
        }

        const deletedType = await Type.findByPk(id);
        
        if(!deletedType){
            return next(ApiError.badRequest('Жанр не найден'));
        }

        await deletedType.destroy();
        res.json({message: 'Жанр удален'});
    }
}

export default new TypeController();