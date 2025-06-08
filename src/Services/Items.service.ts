import { Items } from '../Entities/Items';
import { HttpExceptionError } from '../Exception/HttpException';
import { Errors } from '../utils/errorsDictionary';

export const ItemsService = () => {
  const createItem = async (data: Partial<Items>) => {
    try {
      const newItem = Items.create(data);
      await newItem.save();
      return newItem;
    } catch (error) {
      throw HttpExceptionError(Errors.ITEMS_CREATION_FAILED);
    }
  };

  const getItemsId = async (id: number) => {
    const item = await Items.findOne({
      where: { id },
    });

    if (!item) throw HttpExceptionError(Errors.ITEMS_NOT_FOUND);

    return item;
  };

  const getAll = async () => {
    const items = await Items.find();
    return items;
  };

  const updateItem = async (id: number, data: Partial<Items>) => {
    const item = await getItemsId(id);

    Object.assign(item, data);

    try {
      await item.save();
      return item;
    } catch (error) {
      throw HttpExceptionError(Errors.ITEMS_UPDATE_FAILED);
    }
  };

  const deleteItem = async (id: number) => {
    const item = await getItemsId(id);

    try {
      await item.remove();
      return true;
    } catch (error) {
      throw HttpExceptionError(Errors.ITEMS_DELETION_FAILED);
    }
  };

  return {
    getItemsId,
    getAll,
    createItem,
    updateItem,
    deleteItem,
  };
};
