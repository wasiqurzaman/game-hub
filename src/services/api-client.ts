import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "75f638f697e840b78c010c76ec4d6356",
  },
});
