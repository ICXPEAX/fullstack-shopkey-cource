import { $authHost,$host } from "./index";


export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}


export const createProduct = async (brand, name, cost, category , desc, supplierId, img) => {
    const {data} = await $authHost.post('api/product/', {email,password,firstname,lastname,surname,phonenumber,role: 'ADMIN'})
    return data
}
export const fetchProduct = async (categoryId) => {
    const {data} = await $host.get('api/product/', {params: {categoryId}} )
    
    return data
}
    
export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}

