import { z } from 'zod';
import { ItemDto } from '../Dtos/Item';

const itemSchema = z.object({
  name: z.string().min(1, {
    message: 'Item name must be at least 1 character long',
  }),
  description: z.string().optional(),
  price: z.number().positive({
    message: 'Price must be a positive number',
  }),
});

export async function validateItem(object: ItemDto) {
  return itemSchema.safeParseAsync(object);
}

export async function validatePartialItem(object: Partial<ItemDto>) {
  return itemSchema.partial().safeParseAsync(object);
}

