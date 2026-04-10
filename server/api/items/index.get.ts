import { itemStore } from '~~/server/utils/store';

export default defineEventHandler(() => {
  return { items: itemStore.list() };
});
