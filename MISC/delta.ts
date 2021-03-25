import axios, { AxiosError } from 'axios'
import { createWriteStream } from 'fs'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiZjE0MTkwYS0xZTAyLTRmZGItOWY2OS0wYmRlYmUwZWU5NDIiLCJnaXRodWJUb2tlbiI6bnVsbCwic2NvcGUiOiJsZWFybmVyIiwiaWF0IjoxNjE2MzI1MTMzLCJleHAiOjE2MTYzNTM5MzN9.jkj4S4fkwFhv9YGHVaIrzTndhJVMemYuuHdp3YzgkPo'
const URI_1 = 'https://delta-api-production.herokuapp.com/api/learning/ops/reviews/completed/vanshamagg@gmail.com'
const URI_2 = 'https://delta-api-production.herokuapp.com/api/learning'
const writeable = createWriteStream('response.json');


const sendRequest = async () => {

    try {
        const { data } = await axios.get(URI_2, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`,
                "Origin": "SOAL"

            },

        })
        console.dir(data)
        writeable.write(JSON.stringify(data))
    } catch (error) {
        console.log(error.response.data)
    }
}

(async () => {
    try {
        for (let i = 0; i <= 1000; i++) {
            await sendRequest()
            console.log(i)

        }
    } catch (error) {
        console.info(error)
    }


})()