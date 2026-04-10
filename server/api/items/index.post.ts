import { itemStore } from '~~/server/utils/store';

interface CreateItemBody {
  name?: unknown;
  description?: unknown;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateItemBody>(event);

  if (
    typeof body?.name !== 'string' ||
    typeof body?.description !== 'string' ||
    body.name.length < 1 ||
    body.name.length > 100 ||
    body.description.length < 1 ||
    body.description.length > 500
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Validation failed',
      data: {
        error:
          'name and description are required, name <=100 chars, description <=500 chars',
      },
    });
  }

  const item = itemStore.create(body.name, body.description);
  setResponseStatus(event, 201);
  return item;
});
