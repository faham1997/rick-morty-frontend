import Axios from "axios";
import config from "./config";

export const getApi = async (action) => {
  try {
    const response = await Axios.get(`${config.serverURL}${action}`);
    return {
      isSucess: true,
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      isSuccess: false,
      status: error.response?.status,
      data: error.response?.data,
    };
  }
};

export default getApi;
