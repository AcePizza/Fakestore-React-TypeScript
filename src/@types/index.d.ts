import { type } from "os"


namespace ProductsN {
    interface Product {
        /**Product category */
        category: string,
        /**Product description */
        description: string,
        id: number,
        image: string,
        price: number,
        /**This is an array */
        rating: {
            count: number,
            rate: number,
        },
        title: string,
    }
    type Products = Product[]
}

interface GeneralContextInterface {
    name: string;
    author: string;
    url: string;
}

interface ErrorMessage {
    message: string,
    error: any
}
// namespace UsersN {
//     interface User {
//         /**Date */
//         date: string
//         userId: number
//         products: [{
//             productId?: number
//             quantity?: number
//         }]
//     }
//     type Users = User[]
// }

interface User {
    address: {
        city: string
        geolocation: {
            lat: string
            long: string
        }
        number: number
        street: string
        zipcode: string
    }
    email: string
    id: number
    name: {
        firstname: string
        lastname: string
    }
    password: string
    phone: string
    username: string
}
type Users = User[]

interface LoginDataType {
    email: string;
    password: string;
}




