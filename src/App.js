import "./styles.css";
import Login from "./Login.js";
import userContext from "./userContext";

const data = [
  {
    email: "nidhi",
    password: "1234"
  },
  {
    email: "nidhisah",
    password: "8888"
  }
];
export default function App() {
  return (
    <userContext.Provider value={{ data: data }}>
      <div className="App">
        <Login />
      </div>
    </userContext.Provider>
  );
}
