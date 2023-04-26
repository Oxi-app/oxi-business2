import { loadStripe } from '@stripe/stripe-js'
export default function Subscribe () {
    const handleClick = async e => {
        const stripe = await loadStripe('pk_test_51N0nbtAtnaVQyWoYMacKkpI0YTtN0lR1i5n2pOcjMBXg7917iNCJMY6hqVO53bPMkVZsEoKXVFoz5pDPDKN22sAZ00Aig56qVS')
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1N19ZKAtnaVQyWoYH1GmrZz6',
            quantity: 1
          }],
          mode: 'subscription',
          successUrl: 'https://oxiforbusiness.netlify.app/',
          cancelUrl: 'https://oxiforbusiness.netlify.app/'
        })
      }
  
    return <button onClick={handleClick}>Get Course Access</button>
  }