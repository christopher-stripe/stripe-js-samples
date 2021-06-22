import Stripe from "stripe";
import { PaymentElement } from "@stripe/react-stripe-js";
import { ElementSample } from "../../components/ElementSample";
import * as paymentElementThemes from "../../constants/paymentElementThemes";

const PaymentElementPaymentIntentSample = ({ clientSecret }) => {
  const handleSubmit = async ({ stripe, elements }) => {
    return stripe.confirmPayment({
      element: elements.getElement(PaymentElement),
      confirmParams: {
        return_url: `${window.location.origin}/status`,
      },
    });
  };

  const options = {
    clientSecret,
  };

  return (
    <ElementSample
      onSubmit={handleSubmit}
      collectNameAndEmail={false}
      apiKey={process.env.NEXT_PUBLIC_CONNECT_PK}
      stripeOptions={{
        betas: ["payment_element_beta_1"],
        stripeAccount: process.env.NEXT_PUBLIC_CONNECT_CONNECTED_ACCOUNT_ID,
      }}
    >
      <PaymentElement options={options} />
    </ElementSample>
  );
};

export default PaymentElementPaymentIntentSample;

export const getServerSideProps = async () => {
  const stripe = new Stripe(process.env.CONNECT_SK, {
    apiVersion: "2020-03-02",
  });

  const { client_secret: clientSecret } = await stripe.setupIntents.create(
    {
      payment_method_types: ["card", "ideal", "bancontact"],
    },
    {
      stripeAccount: process.env.NEXT_PUBLIC_CONNECT_CONNECTED_ACCOUNT_ID,
    }
  );

  return { props: { clientSecret } };
};
