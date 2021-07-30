import axios from "axios";

const API_URL = 'https://svcg-web-api.herokuapp.com';

class BasicService {
  constructor(path) {
    this.path = path;
  }

  /**
   * @param {string} method GET | POST | PUT | PATCH | DELETE | ...
   * @param {string} suffixes this.path.concat(suffixes)
   * @param {object} body những object cần thêm hoặc sửa
   * @returns 
   */
  callApi(method = 'GET', suffixes = '', body = null) { // nêu method = null || undifined thì method = 'GET', tương tự suffixes, body
    return new Promise((resolve, reject) => {
      axios({
        method: method,
        url: `${API_URL}/${this.path}${suffixes}`,
        body: body,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => resolve(res))
        .catch(e => reject(e))
    })
  }
}

export { BasicService }