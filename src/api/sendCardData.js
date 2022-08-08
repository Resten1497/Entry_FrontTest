import axios from "axios";
import qs from "qs";

export default async function sendCardData(card) {
  return await axios.post(
    "https://entrylist.herokuapp.com/test/qrTest",
    qs.stringify(card),
    {
      headers: { "content-type": "application/x-www-form-urlencoded" },
    }
  );
}
