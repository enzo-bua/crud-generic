export interface IError {
  httpCode: number;
  message: string;
  code: string;
}

const buildPayload = (
  httpCode: number,
  message: string,
  code: string
): IError => ({ httpCode, message, code });

export class Errors {
  static ITEMS_NOT_FOUND: IError = buildPayload(
    404,
    'Items not found',
    'ITEMS_404_NOT_FOUND'
  );

  static ITEMS_CREATION_FAILED: IError = buildPayload(
    500,
    'Failed to create items',
    'ITEMS_500_CREATE_FAILED'
  );

  static ITEMS_UPDATE_FAILED: IError = buildPayload(
    500,
    'Failed to update items',
    'ITEMS_500_UPDATE_FAILED'
  );

  static ITEMS_DELETION_FAILED: IError = buildPayload(
    500,
    'Failed to delete items',
    'ITEMS_500_DELETE_FAILED'
  );
}
