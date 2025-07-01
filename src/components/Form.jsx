import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";

const Form = () => {
   const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_4p4ws5z", "template_lq9sisz", form.current, {
        publicKey: "PY49PXLEuzeinpVGi",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("✅ Message Sent Successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSuccess("❌ Failed to send message. Try again.");
        }
      );
  };
     
     
     return (
           <form ref={form} onSubmit={handleSubmit} className="text-white">
      {success && (
        <p className="mb-4 font-semibold text-green-400">{success}</p>
      )}

      <div className="mb-4">
        <label htmlFor="from_name" className="mb-2 inline-block font-semibold">
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-[45px] w-full rounded-sm bg-slate-900 pl-4"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="from_email" className="mb-2 inline-block font-semibold">
          Email
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-[45px] w-full rounded-sm bg-slate-900 pl-4"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="mb-2 inline-block font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-sm bg-slate-900 pl-4 pt-2"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-6 cursor-pointer py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md"
      >
        Send Message
      </button>
    </form>
  );
}

export default Form