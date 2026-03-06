// import React from "react";
// import ConImg from "../assets/image/con2.png"
// import ConBg from "../assets/image/con.png"

// export default function Contact() {
//   return (
//     <section
//       className="h-1/2 flex items-center justify-center px-6 py-16"
//       style={{
//         backgroundImage: `url(${ConBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className=" w-full grid md:grid-cols-2 gap-10 items-center  rounded-2xl ">
        
//         {/* LEFT IMAGE */}
//         <div className="hidden md:flex justify-center">
//           <img
//             src={ConImg}
//             alt="Contact Illustration"
//             className="w-[400px] rounded-lg"
//           />
//         </div>

//         {/* RIGHT FORM */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
//             Have any question or confusion? Contact us below!
//           </h2>

//           <form className="space-y-5">
            
//             <input
//               type="text"
//               placeholder="Fullname"
//               className="w-full p-4 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] outline-none border border-[var(--border-light)]"
//             />

//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-4 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] outline-none border border-[var(--border-light)]"
//             />

//             <textarea
//               rows="5"
//               placeholder="Message"
//               className="w-full p-4 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] outline-none border border-[var(--border-light)]"
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] py-4 rounded-full font-semibold hover:bg-[var(--btn-primary-hover)] transition"
//             >
//               Send Message
//             </button>

//           </form>
//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import ConImg from "../assets/image/con2.png";
import ConBg from "../assets/image/con.png";

export default function Contact() {
  return (
    <section
     className="bg-white relative"
    >
      <div  className="h-auto mb-30 w-full max-w-7xl grid md:grid-cols-2 gap-10 items-start "
      style={{
        backgroundImage: `url(${ConBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

       {/* LEFT IMAGE */}
 <div className="hidden md:block relative h-full">
    <img
      src={ConImg}
      alt="Contact Illustration"
      className="absolute -bottom-10 left-7 w-full h-[80%] object-cover rounded-lg z-10"
    />
  </div>

        {/* RIGHT FORM */}
        <div className="flex flex-col h-full py-10 ">
           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-light)] mt-5">
          Have any question or confusion? Contact us below!
          </h2>
          <form className="space-y-5 flex-1 flex flex-col justify-between">
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Fullname"
                className="w-full p-4 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] outline-none border border-[var(--border-light)]"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] outline-none border border-[var(--border-light)]"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-4 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] outline-none border border-[var(--border-light)]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] py-4 rounded-full font-semibold hover:bg-[var(--btn-primary-hover)] transition mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* WHITE BOX / TABLE UNDER */}
      {/* <div className="w-full max-w-7xl  bg-[var(--bg-card)] rounded-2xl shadow-[var(--shadow-medium)] p-10 text-[var(--text-primary)] z-10 relative">
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[var(--text-secondary)]">
          <div>
            <p className="font-semibold">Email</p>
            <p>support@darltech.com</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p>+234 123 4567</p>
          </div>
          <div>
            <p className="font-semibold">Address</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}