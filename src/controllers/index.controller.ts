import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { IndexService } from '@/services/index.service';
import { ChatDto } from '@/dtos/index.dto';
import { ResponseWarpper } from '@/utils/Response';

export class IndexController {
  public indexService = Container.get(IndexService);

  public index = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const index = await this.indexService.index()

      res.status(201).json({ data: index });
    } catch (error) {
      next(error);
    }
  };

  public chat = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log(req.body)
      const body = req.body as ChatDto;
      // const chat = await this.indexService.chat(body)

      ResponseWarpper(res, req.body)
    } catch (error) {
      next(error);
    }
  }
}
