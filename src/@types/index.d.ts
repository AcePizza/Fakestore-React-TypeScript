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
namespace UsersN {
    interface User {
        /**Date */
        date: string
        userId: number
        products: [{
            productId?: number
            quantity?: number
        }]
    }
    type Users = User[]
}

interface ProductBasket {
    productId: number;
    quantity: number;
}
type BasketArr = ProductBasket[]



