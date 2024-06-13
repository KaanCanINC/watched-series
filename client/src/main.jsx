import React from "react";
import ReactDOM from "react-dom/client";
import "~/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "~/pages/Homepage";
import NotFound from "~/pages/ErrorPage";
import Root from "~/routes";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Homepage />,
         },
         {
            path: "/profile",
            element: <ProtectedRoutes element={<ProfilePage />} />,
         },

         {
            path: "*",
            element: <NotFound />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>,
);
