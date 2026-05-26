import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <RouterProvider router={router} />
    </div>
  );
}