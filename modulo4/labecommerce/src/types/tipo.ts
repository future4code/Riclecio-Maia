export type User = {
    name: string 
    email: string
    password: string
}

export type Product={  
    name:string
    price:Number
    image_url:string
}
export type Purchases={  
    user_id:string 
    product_id:string 
    quantity:Number
    }