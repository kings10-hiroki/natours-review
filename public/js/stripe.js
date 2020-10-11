import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51HaVdTC6gnC57jav5VglcxlpupF8LHQUanwAwrTEGOtSILD7vwg0sYaa61BlDIedgguV1yBU4o7wW3eD93bZqPFE00fy301LRJ');

export const bookTour = async tourId => {
    try {
        const session = await axios(
            `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
        );
        console.log(session);

        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }

}