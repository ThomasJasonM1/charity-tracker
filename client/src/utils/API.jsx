import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY;

export default {


  orgSearch: function (searchTerm) {
    return axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=3e214bfa&app_key=${KEY}&pageSize=25&pageNum=1&search=${searchTerm}`)
  },

  getOrg: async function (ein) {
    return await axios.get(`https://api.data.charitynavigator.org/v2/Organizations/${ein}?app_id=3e214bfa&app_key=${KEY}`)
  }
}
