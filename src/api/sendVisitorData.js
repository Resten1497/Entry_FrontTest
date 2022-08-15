import axios from "axios";
import qs from "qs";

export default async function sendVisitorData(data) {
  return await axios.post(process.env.REACT_APP_sendVisitorData, data);
}
