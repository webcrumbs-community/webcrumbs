import React from 'react'
import {UserProvider} from '@auth0/nextjs-auth0/client'
import { ChakraProvider } from '@chakra-ui/react';

export default function App({Component, pageProps}){
  return (

    <UserProvider>
      <ChakraProvider>
      <Component {...pageProps}/>
      </ChakraProvider>
    </UserProvider>
  );
}

