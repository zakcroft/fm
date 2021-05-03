interface MakeRequestProps {
  url: string;
  method?: string;
  params?: object;
}

function getUrlParams(params: any) {
  const queryString: string = new URLSearchParams(params).toString();
  console.log(queryString);
  return queryString;
}

async function makeRequest(
  request: MakeRequestProps = {
    url: "",
    method: "GET",
    params: {},
  }
): Promise<any> {
  const { url, method, params } = request;
  const urlPerfix = "https://cors.bridged.cc/";
  const serializedParams = getUrlParams(params);
  const response = await fetch(`${urlPerfix}${url}?${serializedParams}`);
  return await response.json();
}

export async function fetchPositions(): Promise<any> {
  return await makeRequest({
    url: `https://jobs.github.com/positions.json`,
  });
}

export async function fetchPosition(id: string): Promise<any> {
  return await makeRequest({
    url: `https://jobs.github.com/positions/${id}.json`,
  });
}

// export const fetchApi2 = (): Promise<any> =>
//   fetch("https://cors.bridged.cc/https://jobs.github.com/positions.json")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       return data;
//     });

// export async function fetchApi(): Promise<any> {
//     const response = await fetch(request);
//     const body = await response.json();
//     return body;
// }

// const Person: { name: string } = {
//   name: "test",
// };

//https://stackoverflow.com/questions/57475942/typescript-fetch-api-return-promiset-or-promiset
// public async request<T>(endpoint: string, method: string = "GET", parameters: object = {}): Promise<never | T> {
//     let protocol, host, port, path;
//     let body = JSON.stringify(parameters);
//
//     return await fetch(`${protocol}://${host}${port}${path}/${endpoint}`, {
//         method: method,
//         body: body
//     })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error(response.statusText);
//             }
//         })
//         .then(data => {
//             return data;
//         });
// }
