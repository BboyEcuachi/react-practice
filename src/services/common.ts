const url = 'https://pokeapi.co/api/v2';
const defaultHeaders = { 'content-type': 'application/json' };

const CommonService = {
  jsonToQueryString: (json: any) =>  {
    return '?' + Object.keys(json).map((key) =>  encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&');
  },
  get: async (endpoint: string, params?: string|object, headers = defaultHeaders): Promise<any> => {
    const query = typeof params === 'object' ? CommonService.jsonToQueryString(params) : params;
    const res = await fetch(url + endpoint + query, { headers, method: 'GET' });
    return res.json();
  },
  post: async (endpoint: string, body?: object, headers = defaultHeaders): Promise<any> => {
    const res = await fetch(url, { headers,  method: 'POST', body: JSON.stringify(body) });
    return res.json();
  }
}

export default CommonService;
