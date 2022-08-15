import axios from "axios";
import qs from "qs";

export default function sendVisitorData(data) {
    return axios.post(process.env.REACT_APP_sendVisitorData, data);
}