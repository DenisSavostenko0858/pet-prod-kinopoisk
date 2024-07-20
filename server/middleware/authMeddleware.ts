import { Request, Response, NextFunction } from 'express';
import jwt, {Secret} from 'jsonwebtoken';

const Auth = (req: Request, res: Response<any, Record<string, any>>, next: NextFunction): Response<any, Record<string, any>> | void => {
    if (req.method === "OPTIONS") {
        return next();
    }
    try {
        const token = req.headers.authorization?.split(' ')[1]; 
        
        if (!token) {
            return res.status(401).json({ message: "Не авторизован" });
        }

        if (typeof token !== 'string') {
            return res.status(401).json({ message: "Неверный формат токена" });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY as Secret) as { [key: string]: any };
        req.body.user = decoded;
        
        return next();
    } catch (e) {
        return res.status(401).json({ message: "Не авторизован" });
    }
};

export default Auth;