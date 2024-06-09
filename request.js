
import { loading } from "./loading.js";

export const getData = async (url) => {
    try {
      loading(true);
      const request = await fetch(url);
      if (!request.ok) {
        throw new Error("Something went wrong :(");
      }
      const responce = await request.json();
      loading(false);
      return responce;
    } catch (error) {
      loading(false);
      return error.message;
    }
  };