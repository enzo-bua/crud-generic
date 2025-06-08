import { Router } from 'express';
import { ItemsController } from '../Controllers/items.controller';

const path = '/items';
const items = Router();
const controllers = ItemsController();

items.post(`${path}/create`, controllers.createItems);
items.get(`${path}/`, controllers.getAll);
items.get(`${path}/:id`, controllers.getById);
items.put(`${path}/:id`, controllers.updateItems);
items.delete(`${path}/:id`, controllers.removeItems);

export default items;
