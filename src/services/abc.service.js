import { BasicService } from "./basic.service";

class AbcService extends BasicService {
  constructor() {
    super('member')
  }
  getAll = () => this.callApi('GET');
}

export default new AbcService();