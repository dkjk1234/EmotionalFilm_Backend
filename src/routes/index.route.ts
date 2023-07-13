import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface'
import { IndexController } from '@/controllers/index.controller';
import { ValidationMiddleware } from '@/middlewares/validation.middleware';
import { ChatDto } from '@/dtos/index.dto';

export class IndexRoute implements Routes {
    public router = Router();
    public index = new IndexController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.index.index);
        this.router.post('/chat', this.index.chat)
        // ValidationMiddleware(ChatDto)
    }
}
