function getInitialHeaders() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}

export const GET = (url: string, headers = {}): Promise<Response> =>
  fetch(url, {
    method: 'GET',
    headers: {
      ...getInitialHeaders(),
      ...headers,
    },
  });
