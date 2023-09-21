enum HTTPMETHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

function queryStringify(data: {key: string, value: string}): string {
  let dataGetReq = "?";
  if (typeof data === "object") {
    // eslint-disable-next-line
    for (const [key, value] of Object.entries(data)) {
      dataGetReq += `${key}=${value}&`;
    }
  } else {
    throw new Error("Data is wrong");
  }

  return dataGetReq.slice(0, dataGetReq.length - 1);
}

type Options = {
    method?: HTTPMETHODS;
    headers?: any; // eslint-disable-line
    data?: any; // eslint-disable-line
    timeout?: number
}

export class HTTPTransport {
  get = (url: string, options: Options = {}) => this.request(
    url,
    { ...options, method: HTTPMETHODS.GET },
    options.timeout,
  );

  post = (url: string, options: Options = {}) => this.request(
    url,
    { ...options, method: HTTPMETHODS.POST },
    options.timeout,
  );

  put = (url: string, options: Options = {}) => this.request(
    url,
    { ...options, method: HTTPMETHODS.PUT },
    options.timeout,
  );

  delete = (url: string, options: Options = {}) => this.request(
    url,
    { ...options, method: HTTPMETHODS.DELETE },
    options.timeout,
  );
  // eslint-disable-next-line
  request = (url: string, options: Options = {}, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      //if other method exept those upwards
      if (!method) {
        reject("You need method to proceed");
        return;
      }

      const xhr = new XMLHttpRequest();

      //+get-request ?key1=value1
      xhr.open(method, method === HTTPMETHODS.GET && data !== undefined ? `${url}${queryStringify(data)}` : url);

      //headers
      // eslint-disable-next-line
      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;


      if (method === HTTPMETHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
