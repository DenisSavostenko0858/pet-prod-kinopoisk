import ApiError from '../error/ApiError';
import { Request, Response, NextFunction } from 'express';
import {Brand} from '../models/database_model'

class BrandController {
    async getBrand(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const brands = await Brand.findAll();
        res.json(brands);
    }

    async addBrand(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const {name} = req.body;
        
        if(!name){
            return next(ApiError.badRequest('Неккоректное имя бренда'));
        }

        const newBrand = await Brand.create({name});
        res.json(newBrand);
    }

    async dellBrand(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const {id} = req.params;
        
        if(!id){
            return next(ApiError.badRequest('Ошибка не указан id бренда'));
        }

        const deletedBrand = await Brand.findByPk(id);
        
        if(!deletedBrand){
            return next(ApiError.badRequest('Бренд не найден'));
        }

        await deletedBrand.destroy();
        res.json({message: 'Бренд удален'});
    }
}

export default new BrandController();