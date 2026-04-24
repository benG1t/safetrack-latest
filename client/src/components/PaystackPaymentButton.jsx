// src/components/PaystackPaymentButton.js
/*
import React from 'react'
import styled from 'styled-components'
import { usePaystackPayment } from 'react-paystack'

const PaystackPaymentButton = ({ amount, email, name }) => {
  // A good practice is to store your public key in an environment variable
  // For simplicity, we're hardcoding it here.
  // Replace 'YOUR_PUBLIC_KEY' with your actual public key.
  const publicKey = 'pk_test_0b2e1fb35d0f43a758c990246aac4b5c8e9fe803'

  const config = {
    reference: new Date().getTime().toString(), // Generates a unique reference
    email,
    amount: amount * 100, // Amount is in kobo (1 NGN = 100 kobo)
    publicKey,
    metadata: {
      name,
      // You can add any other custom data here
    },
  }

  const initializePayment = usePaystackPayment(config)
  const onSuccess = (reference) => {
    //   fetch(`/api/v1/verify-payment/${reference.reference}`) // Use your backend URL
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data)
    //       if (data.data.status === 'success') {
    //         // Payment was successful!
    //         alert('Payment successful!')
    //       } else {
    //         // Payment failed
    //         alert('Payment verification failed.')
    //       }
    //     })
    //     .catch((err) => {
    //       console.error('Verification error:', err)
    //       alert('An error occurred during verification.')
    //     })
    console.log('onsuccess')
  }

  const onClose = () => {
    console.log('closed')
  }

  // const initializePayment = usePaystackPayment(config)

  return (
    <Wrapper>
      <div>
        <button
          className='btn'
          onClick={() => {
            initializePayment(onSuccess, onClose)
          }}
        >
          Make Payment
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div``

export default PaystackPaymentButton
