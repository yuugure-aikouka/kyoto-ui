const CODE_MAPPER: { [key: number]: string } = {
  200: 'ok',
  400: 'bad_request',
};

export const HTTP_CODE_TO_STATUS = (code: number): string => {
  if (!code) {
    return 'bad_request';
  }

  return CODE_MAPPER[code] || 'bad_request';
};
