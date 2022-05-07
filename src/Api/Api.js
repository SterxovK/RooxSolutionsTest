const API_URL = "https://jsonplaceholder.typicode.com/users";

class Api {
  constructor({ url }) {
    this.url = url;
  }
 
  search() {
    return fetch(`${this.url}`)
      .then((response) => response.json())
  }
}

const config = {
  url: API_URL,
};

const api = new Api(config);

export default api;
