import Axios from "axios";
export default {
  getAllRates() {
    return Axios.get("https://open.exchangerate-api.com/v6/latest");
  }
};
