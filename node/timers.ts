import axios from 'axios';

const API_URL = 'http://localhost:4000/api/voicegen';
const body = {
  language: "en-IN",
  voice: "Aditi",
  format: "mp3",
  text: "Hello my name is Vansham Aggarwal."
};


async function synthesizeSpeech(body: any): Promise<any> {

  try {
    let Task = (await axios.post(`${API_URL}`, body)
      .catch(err => { throw err; })).data;

    return new Promise((res, rej) => {

      const interval = setInterval(async () => {

        console.info(' -- SYNTHESIZING SPEECH --');
        let TaskId = Task.TaskId;
        let TaskStatus = Task.TaskStatus;
        let file_url = '';

        switch (TaskStatus) {
          case 'scheduled':
            Task = (await axios.get(`${API_URL}/task/${TaskId}`, body)
              .catch(err => { throw err; })).data;
            break;
          case 'completed':
            console.log('-- TASK WAS COMPLETED --');
            file_url = (await axios.get(`${API_URL}/speech/${TaskId}`)).data.url;
            clearInterval(interval);
            res({ file_url });
            break;
          default:
            console.log('--- some error occured --');
            clearInterval(interval);
            rej('-- Speech was not synthesized --');
            break;
        }
      }, 1000);
    });
  } catch (error) {
    console.error(error);
  }

}

synthesizeSpeech(body)
  .then(({ file_url }) => console.log(file_url))
  .catch(err => console.error(err));
