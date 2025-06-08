import { Request, Response, NextFunction } from 'express';
import { ItemsService } from '../Services/Items.service';

export const ItemsController = () => {
  const itemsService = ItemsService();

  const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const items = await itemsService.getAll();
      return res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  };

  const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const item = await itemsService.getItemsId(Number(id));

      return res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  };

  const createItems = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const newItem = await itemsService.createItem(data);
      return res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  };

  const updateItems = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updated = await itemsService.updateItem(Number(id), data);

      return res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  };

  const removeItems = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      await itemsService.deleteItem(Number(id));

      return res
        .status(200)
        .json({ success: true, message: 'Producto eliminado exitosamente' });
    } catch (error) {
      next(error);
    }
  };

  return {
    getAll,
    getById,
    createItems,
    updateItems,
    removeItems,
  };
};
