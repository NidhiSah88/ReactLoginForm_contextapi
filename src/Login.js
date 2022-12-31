import { useState, useContext } from "react";
import userContext from "./userContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { data } = useContext(userContext);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      setError(true);
    } else {
      let user = data.filter((ele) => {
        return (
          formData.email === ele.email && formData.password === ele.password
        );
      });
      setSuccess(user.length === 0 ? false : true);
      setError(user.length > 0 ? false : true);
      reset();
    }
  };
  function reset() {
    setFormData({
      email: "",
      password: ""
    });
  }
  return (
    <div className="login-card">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
      {isSuccess && <span>Login Successfully</span>}
      {isError && <span>Invalid login </span>}
    </div>
  );
}
