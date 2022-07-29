import axios from "axios";

export default function sendVisitorData(data) {
  return axios.post("https://7350-59-6-230-65.jp.ngrok.io/api", data);
}
