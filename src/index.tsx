import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import router from "./router.tsx";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider {...{}}>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
