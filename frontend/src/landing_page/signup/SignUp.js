import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError   = (err) => toast.error(err,   { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/"), 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div style={styles.page}>

      {/* LEFT SIDE */}
      <div style={styles.left}>
        <img
          src="media/images/images/homeHero.png"   
          alt="Platform Preview"
          style={styles.heroImage}
        />
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <h2 style={styles.heading}>Signup now</h2>
        <p style={styles.subtext}>Or track your existing application</p>

        <form onSubmit={handleSubmit} style={styles.form}>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Create Account
          </button>

          <p style={styles.terms}>
            By proceeding, you agree to our{" "}
            <a href="/terms" style={styles.link}>terms</a> &{" "}
            <a href="/privacy" style={styles.link}>privacy policy</a>
          </p>

          <p style={styles.loginText}>
            Already have an account?{" "}
            <Link to="/login" style={styles.link}>Login</Link>
          </p>

        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

// ── Styles ──────────────────────────────────────────
const styles = {
  page: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "80vh",
    padding: "60px 80px",
    gap: "40px",
  },

  // LEFT
  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    width: "100%",
    maxWidth: "550px",
    objectFit: "contain",
  },

  // RIGHT
  right: {
    flex: 1,
    maxWidth: "420px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: "4px",
  },
  subtext: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },

  // FORM
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    color: "#555",
    fontWeight: "500",
  },
  input: {
    padding: "12px 16px",
    fontSize: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    color: "#1a1a1a",
  },

  // BUTTON
  button: {
    padding: "14px",
    backgroundColor: "#387ED1",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "8px",
    width: "100%",
  },

  // TEXTS
  terms: {
    fontSize: "12px",
    color: "#888",
    textAlign: "center",
    marginTop: "4px",
  },
  loginText: {
    fontSize: "13px",
    color: "#555",
    textAlign: "center",
  },
  link: {
    color: "#387ED1",
    textDecoration: "none",
  },
};

export default SignUp;