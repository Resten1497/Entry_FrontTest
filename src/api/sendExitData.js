import axios from "axios";
import qs from "qs";

export default function sendExitData(data) {
    return axios.post(
        process.env.REACT_APP_sendExitData,
        qs.stringify(data), {
            headers: { "content-type": "application/x-www-form-urlencoded" },
        }
    );
}