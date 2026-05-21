// pages/VerifyPayment.jsx
import { useEffect } from "react";
import axios from "axios";

export default function VerifyPayment() {

  useEffect(() => {
    const verify = async () => {
      const params = new URLSearchParams(window.location.search);
      const reference = params.get("reference");

      const token = localStorage.getItem("token");

      await axios.get(`/api/payments/verify/${reference}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      window.location.href = "/dashboard";
    };

    verify();
  }, []);

  return <p>Verifying payment...</p>;
}