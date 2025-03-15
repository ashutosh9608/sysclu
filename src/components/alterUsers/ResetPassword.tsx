import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  // const [searchParams] = useSearchParams();
  const [otp, setOtp] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const { mail } = location.state || {};

  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    const maskedName = name.slice(0, 3) + "*********";
    return `${maskedName}@${domain}`;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPassword = newPassword1 === newPassword2 ? newPassword1 : null;

    if (newPassword != null) {
      try {
        const response = await axios.post("http://localhost:8080/api/auth/reset-password", {
          otp,
          mail,
          newPassword,
        });
        console.log(response.data);
        setMessage(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setMessage(error.response?.data || "An error occurred");
        } else {
          setMessage("An error occurred");
        }
      }
    }else{
      setMessage(" both Passwords should be same");
    }
  }; 
  const maskedEmail = mail ? maskEmail(mail) : "";
  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        Enter new Password
        <br />
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword1}
          onChange={(e) => setNewPassword1(e.target.value)}
          required
          className="text-black"
        />
        <br />
        <br />
        Confirm password
        <br />
        <input
          type="password"
          placeholder="Confirm password"
          value={newPassword2}
          onChange={(e) => setNewPassword2(e.target.value)}
          required
          className="text-black"
        />
        <br />
        <br />
        Enter OTP sent on email {maskedEmail}
        <br />
        <input
          type="otp"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="text-black"
        />
        <br />
        <button className="cursor-pointer" type="submit">
          Reset Password
        </button>
      </form>
      <p className="text-red-500">{message}</p>
    </div>
  );
};

export default ResetPassword;
