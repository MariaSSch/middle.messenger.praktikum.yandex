<<<<<<< HEAD
import { HOST } from "../js/const"

=======
>>>>>>> sprint_2
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
<<<<<<< HEAD
    headers?: string[]; // eslint-disable-line
    data?: any; // eslint-disable-line
    timeout?: number;
		signal: string;
		withCredentials: boolean;
		responseType: ""|"text"|"arraybuffer"|"blob"|"document"|"json";
}

export class HTTPTransport {
	private url: string = "";

	constructor(apiPath: string) {
		this.url = `${HOST}${apiPath}`
	}
  get(url: string, options: Options) {
		return this.request(
			url,
			{ ...options, method: HTTPMETHODS.GET }
  );
}

  post = (url: string, options: Options) => this.request(
    url,
    { ...options, method: HTTPMETHODS.POST }
=======
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
>>>>>>> sprint_2
  );

  put = (url: string, options: Options = {}) => this.request(
    url,
<<<<<<< HEAD
    { ...options, method: HTTPMETHODS.PUT }
=======
    { ...options, method: HTTPMETHODS.PUT },
    options.timeout,
>>>>>>> sprint_2
  );

  delete = (url: string, options: Options = {}) => this.request(
    url,
<<<<<<< HEAD
    { ...options, method: HTTPMETHODS.DELETE }
  );
  // eslint-disable-next-line
  private request = (url: string, options: Options = {}) => {
    const { data, headers, method, signal, timeout = 60000, withCredentials = true, responseType = "json" } = options;
=======
    { ...options, method: HTTPMETHODS.DELETE },
    options.timeout,
  );
  // eslint-disable-next-line
  request = (url: string, options: Options = {}, timeout = 5000) => {
    const { headers = {}, method, data } = options;
>>>>>>> sprint_2

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
<<<<<<< HEAD
      // for (const key in headers) {
      //   xhr.setRequestHeader(key, headers[key]);
      // }

      xhr.onload = () => {
				const status = xhr.status || 0;
				if (status >= 200 && status < 300) {
					resolve(xhr.response);
				} else {
					const message = {
            "0": "abort",
            "100": "Information",
            "200": "Ok",
            "300": "Redirect failed",
            "400": "Access error",
            "500": "Internal Server Error",
          }[Math.floor(status / 100) * 100];
					reject( { status, reason: xhr.response?.reason || message } );
				}
        
      };

      xhr.onabort = () => reject({ reason: "Abort" });
      xhr.onerror = () => reject({ reason: "Network error" });
			xhr.ontimeout = () => reject({ reason: "Timeout" });

			Object.entries( headers ?? {}).forEach(([key, value]) => {
				xhr.setRequestHeader(key, value);
			});

      xhr.timeout = timeout;
			xhr.withCredentials = withCredentials;
			xhr.responseType = responseType;
      
=======
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
>>>>>>> sprint_2


      if (method === HTTPMETHODS.GET || !data) {
        xhr.send();
<<<<<<< HEAD
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
				xhr.setRequestHeader("Content-Type", "application/json");
				xhr.send(JSON.stringify(data));
			}
=======
      } else {
        xhr.send(data);
      }
>>>>>>> sprint_2
    });
  };
}
