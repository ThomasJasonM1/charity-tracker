import axios from "axios";

function signIn(credentials) {
  console.log({ credentials });
  return axios.post("api/user/login", credentials);
}

export default { signIn };