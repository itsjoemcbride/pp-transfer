import ky from "ky";

const API_URL = "http://localhost:3004/users";

export default {
  getAllUsers() {
    return ky.get(API_URL).json();
  },
};
