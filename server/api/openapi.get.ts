import { openApiSpec } from '~~/server/utils/openapi';

export default defineEventHandler(() => {
  return openApiSpec;
});
