import axios from "axios";

const base="https://elixar.herokuapp.com/"
// const base=" http://127.0.0.1:8000/"
const apikey = '8fdef991-fced-11ea-9fa5-0200cd936042'
const otpBaseUrl = 'https://2factor.in/API/V1/'
// const sms = 'SMS'
const sms = 'VOICE'
export default class API {
    static async register(body) {

        let res =await axios.create({baseURL: base}).post("api/register/", body);
        return res
    }
    static async bookTrial(body) {

        let res =await axios.create({baseURL: base}).post("api/booktrial/", body);
        return res
    }
    static async sendMail(body) {

        let res =await axios.create({baseURL: base}).post("api/send_mail/", body);
        return res
    }
    static async getInTouch(body) {

        let res =await axios.create({baseURL: base}).post("api/get_in_touch/", body);
        return res
    }
    static async verifySignature(body) {

        let res =await axios.create({baseURL: base}).post("api/verify_signature/", body);
        return res
    }

    static async sendOtp(body) {
        let res =await axios.create({baseURL: otpBaseUrl}).get(`${apikey}/${sms}/${body}/AUTOGEN`);
        return res
    }
    static async getOrderId(body) {
        let res =await axios.create({baseURL: base}).post('api/payment/',body);
        return res
    }
    static async verifyOtp(body) {

        let res =await axios.create({baseURL: otpBaseUrl}).get(`${apikey}/${sms}/VERIFY/${body['sessionId']}/${body['otp']}`);
        return res
    }
}

