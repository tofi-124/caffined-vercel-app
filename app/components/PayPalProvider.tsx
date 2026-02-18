"use client"

import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const PayPalProvider = ({ children }: { children: React.ReactNode }) => {
  // Always wrap with PayPalScriptProvider so child hooks (usePayPalScriptReducer)
  // never run outside of the context. When the client ID is missing, the SDK will
  // fail to load and the hook's `isRejected` state handles it gracefully.
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'MISSING_CLIENT_ID'

  if (!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) {
    console.warn('NEXT_PUBLIC_PAYPAL_CLIENT_ID is not set. PayPal buttons will show an unavailable message.')
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency: 'USD',
        intent: 'capture',
        components: 'buttons',
      }}
    >
      {children}
    </PayPalScriptProvider>
  )
}

export default PayPalProvider
