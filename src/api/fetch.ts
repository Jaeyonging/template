import axios from "axios";


export const fetchComments = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    return response.data;
};