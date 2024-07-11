"use server";

import { absoluteUrl } from "@/lib/utils";
import { stripe } from "./lib/stripe";
import { cartProduct } from "./store/cart-store";


// here we create a stripe checkout url



export const stripeCheckoutUrl = async (products: cartProduct[]) => {
    try {




        // create a return url
        const returnUrl = absoluteUrl("/")

        // create a stripe checkout session
        const stripeSession = await stripe.checkout.sessions.create({
            success_url: returnUrl,
            cancel_url: returnUrl,
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: 
               products.map((product) => {
                return{
                    quantity: product.quantity,
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: product.title,
                            description: product.description,
                            images: [product.image]

                        },

                       

                        unit_amount: product.price * 100 as number
                    }

                    
                }

               
               })
            




        });

        
     return { data: stripeSession.url as  string}

    
    



    } catch (error) {
        console.error(error)
        return {
            error: "error, " + error
        }
    }

}

// import { metadata } from "./app/layout"
// import { stripe } from "./lib/stripe"
// import { absoluteUrl } from "./lib/utils"
// import { cartProduct } from "./store/cart-store"


// export const createStripeUrl = async (products: cartProduct[]) => {
//     try {
//         //create lineItems

//         const myLineItems = products.map((product) => {
//             return {
//                 quantity: product.quantity,
//                 price_data: {
//                     currency: "USD",
//                     product_data: {
//                         name: product.title,
//                         description: product.description,
//                         images: [product.image]
//                     },

//                     metadata:{
//                         id: product.id
//                     },
//                 },

//                 unit_amount_decimal: product.price
//                 //unit_amout: product.price * 100
//             }
//         })
        
        

//        //create a return url

//        const returlUrl = absoluteUrl("/cart")

//        //create a stripe session

//        const stripeSession = await stripe.checkout.sessions.create({
//         success_url:returlUrl,
//         cancel_url: returlUrl,

//         mode: "payment",
//         payment_method_types: ["card", "paypal", "alipay"],

//         line_items: myLineItems,
//        })


//        return {
//         data: stripeSession.url as string
//        }
        
//     } catch (error) {

//         console.error("Error making payment", error)
        
//     }
// }