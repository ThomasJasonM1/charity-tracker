import axios from "axios";

const API_KEY = process.env.API_KEY;

export default {
	searchCharityNav: (query) => {
		axios.get(
			`https://api.data.charitynavigator.org/v2/Organizations?app_id=3e214bfa&app_key=${API_KEY}&pageSize=25&pageNum=1&search=${query}`
		);
	}
};
