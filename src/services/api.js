import axios from 'axios'

const token ="";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        Authorization: `Bearer ${token}`,
    },
    params:{
        api_key:'aadda42402245683342df5abbbcd06e4'
    }
})