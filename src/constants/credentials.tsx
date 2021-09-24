export const CREDENTIALS = {
  default: {
    publishableKey: process.env.NEXT_PUBLIC_DEFAULT_PK,
    secretKey: process.env.DEFAULT_SK,
  },
  oxxo: {
    publishableKey: process.env.NEXT_PUBLIC_OXXO_PK,
    secretKey: process.env.OXXO_SK,
  },
  fpx: {
    publishableKey: process.env.NEXT_PUBLIC_FPX_PK,
    secretKey: process.env.FPX_SK,
  },
  auBecs: {
    publishableKey: process.env.NEXT_PUBLIC_AU_BECS_DEBIT_PK,
    secretKey: process.env.AU_BECS_DEBIT_SK,
  },
  konbini: {
    publishableKey: process.env.NEXT_PUBLIC_KONBINI_PK,
    secretKey: process.env.KONBINI_SK,
    apiVersion: "2020-08-27; konbini_beta=v2",
  },
  usBankAccount: {
    publishableKey: process.env.NEXT_PUBLIC_US_BANK_ACCOUNT_PK,
    secretKey: process.env.US_BANK_ACCOUNT_SK,
    apiVersion: "2020-08-27; us_bank_account_beta=v1",
  },
  connect: {
    publishableKey: process.env.NEXT_PUBLIC_CONNECT_PK,
    secretKey: process.env.CONNECT_SK,
    stripeAccount: process.env.NEXT_PUBLIC_CONNECT_CONNECTED_ACCOUNT_ID,
  },
  paypal: {
    publishableKey: process.env.NEXT_PUBLIC_PAYPAL_PK,
    secretKey: process.env.PAYPAL_SK,
  },
  automaticPaymentMethods: {
    publishableKey: process.env.NEXT_PUBLIC_AUTOMATIC_PAYMENT_METHODS_PK,
    secretKey: process.env.AUTOMATIC_PAYMENT_METHODS_SK,
    apiVersion: "2020-08-27; automatic_payment_methods_beta=v1",
  },
  subscriptions: {
    publishableKey: process.env.NEXT_PUBLIC_DEFAULT_PK,
    secretKey: process.env.DEFAULT_SK,
  },
};

export type CredentialsKey = keyof typeof CREDENTIALS;
