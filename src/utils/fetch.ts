export type FetchRequestInit = { timeout?: number; } & Omit<RequestInit, 'method' | 'body'>;

const $fetch = <T>(
  url: string,
  method: 'get' | 'post' = 'get',
  body: {},
  params: FetchRequestInit = {},
): Promise<T> => {
  return new Promise((resolve, reject) => {
    window.fetch(url, {
      credentials: 'include',
      method,
      body: method === 'post' ? JSON.stringify(body) : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
      ...params,
    })
      .then((r: Response) => {
        return r.json().then(d => r.ok ? resolve(d as T) : reject(d));
      })
      .catch(e => {
        console.error(e);
        reject(e);
      });

    setTimeout(() => reject(new Error('Timout')), params.timeout || 10000);
  });
}

$fetch.get = <T>(url: string, params?: FetchRequestInit) => $fetch<T>(url, 'get', {}, params);
$fetch.post = <T>(url: string, data: any = {}, params?: FetchRequestInit) => $fetch<T>(url, 'post', data, params);

export default $fetch;
