import axios from 'axios';

const API_URL = "https://api.github.com/users";
export const getUserInfo = (username, success, err) => {
    let url = `${API_URL}/${username}`;
    axios.get(url).then(success).catch(err);
}
