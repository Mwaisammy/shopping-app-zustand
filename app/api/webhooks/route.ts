import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server"
import Stripe from "stripe";

export async function POST(request: Request){
    try {

        const body = await request.text();
        // const signature = request.headers.get('stripe-signature') --> next.js 12 and earlier
        const signature = headers().get('stripe-signature') as string

        let event: Stripe.Event;
        try {

            event = stripe.webhooks.constructEvent(
                body,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET!
            )
            
        } catch (error) {

            console.log(`STRIPE ERROR:`, error)

            return new NextResponse('Bad request', {status: 400})
            
        }


        const session = event.data.object as Stripe.Checkout.Session;

        if(event.type === `checkout.session.completed`){
           
           const lineItems =  await stripe.checkout.sessions.listLineItems(session.id);

            //update orders table
            //send data to DB


            console.log(lineItems)


            return new NextResponse('Success', {status: 200})

        }
        
    } catch (error) {

        console.log(`WEBHOOK STRIPE ERROR${error}`)
        return new NextResponse('Internal server error.', { status: 500})
        //return new Response('Internal server error', {status:500})


        
    }
}

//stripe listen --forward-to localhost:3000/api/webhooks