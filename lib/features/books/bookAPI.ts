import axios from "axios"

export const getBooksAPI=async()=>{
    const {data}=await axios.get('http://localhost:3000/api/books')
    return data
}