import axios from "axios";

const base="https://elixarsystems.com/back/kalamlabs"
// const base="http://127.0.0.1:8000/kalamlabs/"
const apikey = 'f8753847-ffd5-11ea-9fa5-0200cd936042'
const otpBaseUrl = 'https://2factor.in/API/V1/'
const sms = 'SMS'
// const sms = 'VOICE'
export default class API {
    static async register(body) {

        let res =await axios.create({baseURL: base}).post("register/", body);
        return res
    }
    static async bookTrial(body) {
        console.log('trial',body)
        let res =await axios.create({baseURL: base}).post("booktrial/", body);
        return res
    }
    static async sendMail(body) {

        let res =await axios.create({baseURL: base}).post("send_mail/", body);
        return res
    }
    static async getInTouch(body) {

        let res =await axios.create({baseURL: base}).post("get_in_touch/", body);
        return res
    }
    static async verifySignature(body) {

        let res =await axios.create({baseURL: base}).post("verify_signature/", body);
        return res
    }

    static async sendOtp(body) {
        let res =await axios.create({baseURL: otpBaseUrl}).get(`${apikey}/${sms}/${body}/AUTOGEN/Kalam Labs OTP`);
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

