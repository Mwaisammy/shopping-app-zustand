import axios from "axios"



export const getProducts = async()=> {
    const res = await axios.get("https://fakestoreapi.com/products")
    const data = await res.data

    // console.log(data)

    return data as Product[]
}

