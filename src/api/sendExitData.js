import axios from "axios";
import qs from "qs";

export default function sendExitData(data) {
  return axios.post(
    "https://entrylist.herokuapp.com/api/visitorExit",
    qs.stringify(data),
    {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    }
  );
}
