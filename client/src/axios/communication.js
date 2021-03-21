import Axios from 'axios';

Axios({
    method : "get",
    url : "http://localhost:5000/communication"
}).then(res => {
    console.log(res.data.message);
}).catch(e => {
    console.log(e);
});