import { register, login } from '../controller/authController';
import { Router, Request, Response, NextFunction } from 'express';

const router:Router = Router();

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(login));

export default router;
