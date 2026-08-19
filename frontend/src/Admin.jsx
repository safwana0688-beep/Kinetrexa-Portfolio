import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("adminLoggedIn") === "true"
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true");
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "http://localhost:5000/api/contact"
      );

      setMessages(response.data);
    } catch (err) {
      console.error("Error fetching messages:", err);
      setError(
        "Unable to load messages. Please check that the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchMessages();
    }
  }, [isLoggedIn]);

  /* ================= LOGIN PAGE ================= */

  if (!isLoggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#050b14",
          color: "#eaf2ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            background:
              "linear-gradient(145deg, rgba(17, 35, 57, 0.96), rgba(8, 20, 35, 0.96))",
            border: "1px solid #1e3a5a",
            borderRadius: "16px",
            padding: "35px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <p
            style={{
              color: "#60a5fa",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            ADMIN PANEL
          </p>

          <h1
            style={{
              color: "#f3f7ff",
              marginBottom: "10px",
            }}
          >
            Admin Login
          </h1>

          <p
            style={{
              color: "#91a4ba",
              marginBottom: "25px",
            }}
          >
            Login to view messages received through your portfolio.
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "14px",
                border: "1px solid #244360",
                borderRadius: "9px",
                background: "#0c1d30",
                color: "white",
                fontSize: "14px",
                outline: "none",
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "18px",
                border: "1px solid #244360",
                borderRadius: "9px",
                background: "#0c1d30",
                color: "white",
                fontSize: "14px",
                outline: "none",
              }}
            />

            {loginError && (
              <p
                style={{
                  color: "#fca5a5",
                  marginBottom: "15px",
                }}
              >
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="primary-btn"
              style={{
                width: "100%",
                border: "none",
              }}
            >
              Login
            </button>
          </form>

          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
            }}
          >
            <a
              href="/"
              className="secondary-btn"
              style={{
                display: "inline-block",
              }}
            >
              Back to Portfolio
            </a>
          </div>
        </div>
      </div>
    );
  }

  /* ================= ADMIN DASHBOARD ================= */

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050b14",
        color: "#eaf2ff",
        padding: "40px 8%",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <div>
          <p
            style={{
              color: "#60a5fa",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            ADMIN PANEL
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "38px",
              color: "#f3f7ff",
            }}
          >
            Contact Messages
          </h1>

          <p
            style={{
              color: "#91a4ba",
              marginTop: "8px",
            }}
          >
            Messages received through your portfolio website.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={fetchMessages}
            className="primary-btn"
            style={{
              border: "none",
            }}
          >
            Refresh Messages
          </button>

          <button
            onClick={handleLogout}
            className="secondary-btn"
            style={{
              cursor: "pointer",
              background: "transparent",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* MESSAGE COUNT */}

      <div
        style={{
          background: "rgba(17, 35, 57, 0.9)",
          border: "1px solid #1e3a5a",
          borderRadius: "12px",
          padding: "20px 24px",
          marginBottom: "25px",
        }}
      >
        <h3
          style={{
            margin: 0,
            color: "#60a5fa",
          }}
        >
          Total Messages: {messages.length}
        </h3>
      </div>

      {/* LOADING */}

      {loading && (
        <div
          style={{
            textAlign: "center",
            padding: "50px",
            color: "#91a4ba",
          }}
        >
          Loading messages...
        </div>
      )}

      {/* ERROR */}

      {!loading && error && (
        <div
          style={{
            background: "rgba(127, 29, 29, 0.2)",
            border: "1px solid #7f1d1d",
            borderRadius: "12px",
            padding: "20px",
            color: "#fca5a5",
          }}
        >
          {error}
        </div>
      )}

      {/* NO MESSAGES */}

      {!loading && !error && messages.length === 0 && (
        <div
          style={{
            background: "rgba(17, 35, 57, 0.9)",
            border: "1px solid #1e3a5a",
            borderRadius: "12px",
            padding: "50px 20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#eaf3ff" }}>
            No messages yet
          </h2>

          <p style={{ color: "#91a4ba" }}>
            Messages submitted through the portfolio contact form
            will appear here.
          </p>
        </div>
      )}

      {/* MESSAGES */}

      {!loading && !error && messages.length > 0 && (
        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {messages.map((message) => (
            <div
              key={message._id}
              style={{
                background:
                  "linear-gradient(145deg, rgba(17, 35, 57, 0.96), rgba(8, 20, 35, 0.96))",
                border: "1px solid #1e3a5a",
                borderRadius: "16px",
                padding: "25px",
                boxShadow:
                  "0 8px 25px rgba(0, 0, 0, 0.18)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "15px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: 0,
                      color: "#eaf3ff",
                      fontSize: "22px",
                    }}
                  >
                    {message.name}
                  </h2>

                  <p
                    style={{
                      margin: "5px 0 0",
                      color: "#60a5fa",
                    }}
                  >
                    {message.email}
                  </p>
                </div>

                <span
                  style={{
                    color: "#71859c",
                    fontSize: "13px",
                  }}
                >
                  {message.createdAt
                    ? new Date(
                        message.createdAt
                      ).toLocaleString()
                    : "Date unavailable"}
                </span>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  padding: "18px",
                  background: "#0c1d30",
                  borderRadius: "10px",
                  border: "1px solid #244360",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#b8c8da",
                    lineHeight: "1.7",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {message.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* BACK TO PORTFOLIO */}

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <a
          href="/"
          className="secondary-btn"
          style={{
            display: "inline-block",
          }}
        >
          Back to Portfolio
        </a>
      </div>
    </div>
  );
}

export default Admin;

