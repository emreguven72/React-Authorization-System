import axios from "axios";

export default class UserService {

    async getAll() {
        try {
            const response = await axios.get('http://localhost:1337/user/getAll');
            console.log(response.data.data);
        }catch(e) {
            console.log(e);
        }
    }

}
