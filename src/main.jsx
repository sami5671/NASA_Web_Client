import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import AuthProvider from "./Authentication/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
