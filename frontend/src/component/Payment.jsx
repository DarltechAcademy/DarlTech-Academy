// pages/PaymentPage.jsx
import axios from "axios";

export default function PaymentPage() {

  const startPayment = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "/api/payments/initialize/COURSE_ID",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    window.location.href = res.data.authorization_url;
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={startPayment}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}