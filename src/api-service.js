import axios from "axios";

const base="https://elixar.herokuapp.com/"
// const base=" http://127.0.0.1:8000/"
const apikey = '13ffd8d0-5f33-11ea-9fa5-0200cd936042'
const otpBaseUrl = 'https://2factor.in/API/V1/'

export default class API {
    static async register(body) {
        console.log("register contents",body)
        let res =await axios.create({baseURL: base}).post("api/register/", body);
        return res
    }
    static async update(id,body) {

        let res =await axios.create({baseURL: base}).put(`api/register/${id}/`, body);
        return res
    }
    static async sendOtp(body) {
        let res =await axios.create({baseURL: otpBaseUrl}).get(`${apikey}/SMS/${body}/AUTOGEN`);
        return res
    }
    static async getOrderId(body) {
        let res =await axios.create({baseURL: base}).post('api/payment/',body);
        return res
    }
    static async verifyOtp(body) {
        console.log(body)
        let res =await axios.create({baseURL: otpBaseUrl}).get(`${apikey}/SMS/VERIFY/${body['sessionId']}/${body['otp']}`);
        return res
    }
}

