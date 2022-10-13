import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { SignIn } from "./pages/Signin";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <SignIn />
    </div>
  );
}
