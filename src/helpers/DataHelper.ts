import data from '../data/form_instructions.json';

class DataHelper {
  getData(): Frontier.Job {
    return data as Frontier.Job;
  }
}

export default new DataHelper();
