import LoginForm from "./components/LoginForm";

import "./styles.css";
import icon from "./image.svg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={icon} alt="icon" />
      </div>
      <LoginForm />
    </div>
  );
}
