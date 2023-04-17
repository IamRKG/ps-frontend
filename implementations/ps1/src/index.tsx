// Copyright Epic Games, Inc. All Rights Reserved.
import React from "react";

import { createRoot } from 'react-dom/client';

import {createBrowserRouter,RouterProvider} from "react-router-dom";

import { App } from './components/App';

import { PSOne } from './components/PSOne';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "ps1",
      element: <PSOne/>
    },
  ]);


const root = createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>)

