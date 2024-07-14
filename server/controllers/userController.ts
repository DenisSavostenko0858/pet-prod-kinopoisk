import ApiError from '../error/ApiError';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import {User, Favorite} from '../models/database_model';

const SECRET_KEY = process.env.SECRET_KEY || '';

const generateJwt = (id: number, email: string, role: string): string => {
  return jwt.sign({ id, email, role }, SECRET_KEY, { expiresIn: '24h' });
};

class UserController {
    async registerUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        
        const {email, password, role, name} = req.body; 

        if(!email ||!password){
            return next(ApiError.badRequest('Неккоректный email или пароль'));
        }

        const newUser = await User.findOne({where: {email}});
        
        if (newUser){
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }

        const hashedPassword = await bcrypt.hash(password, 6);
        const user:any = await User.create({email, role, password: hashedPassword, name});
        
        const favorite = await Favorite.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role)
        
        return res.json(token)
    }

    async loginUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const {email, password} = req.body;
        const user:any = await User.findOne({where: {email}});
        
        if(!user){
            return next(ApiError.internal('Пользователь не найден'));
        }
        let camparePassword = bcrypt.compareSync(password, user.password);
        
        if(!camparePassword){
            return next(ApiError.internal('Неверный пароль'));
        }
        
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    async chekUser(req: Request, res: Response): Promise<Response> {
       const { id, email, role } = req.body.user;
       const token = generateJwt(id, email, role);
       return res.json({token}); 
    }
}

export default new UserController();