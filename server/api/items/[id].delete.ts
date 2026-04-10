import { itemStore } from '~~/server/utils/store';

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Missing id' });
  }
  const deleted = itemStore.delete(id);
  if (!deleted) {
    throw createError({ statusCode: 404, statusMessage: 'Item not found' });
  }
  return { deleted: true };
});
