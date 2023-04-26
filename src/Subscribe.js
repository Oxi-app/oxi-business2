import { loadStripe } from '@stripe/stripe-js'
export default function Subscribe () {
    const handleClick = async e => {
        const stripe = await loadStripe('pk_live_51N0nbtAtnaVQyWoY3UXK62xWuql8Wa2GVUEvODqs8KyyfbpQaIB1CbEk9GHB7jzeHaWBbGLp9VhslSMGdut7Zwsy00w5cLOsNr')
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1N15DJAtnaVQyWoY466VKD38',
            quantity: 1
          }],
          mode: 'subscription',
          successUrl: 'http://localhost:3000/Home',
          cancelUrl: 'http://localhost:3000/cancel'
        })
      }
  
    return <button onClick={handleClick}>Get Course Access</button>
  }