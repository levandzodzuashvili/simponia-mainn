"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { sendEmail } from "@/actions/sendEmail";

interface FormDataState {
  email: string;
  message: string;
  firstName: string;
  lastName: string;
}
const ConstactUs = () => {
  const [formData, setFormData] = useState<FormDataState>({
    email: "",
    message: "",
    firstName: "",
    lastName: "",
  });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const response = await sendEmail(new FormData(form));
      if (response.status === 200) {
        setStatusMessage("The message sent successfully!");
        // Clear the form
        setFormData({
          email: "",
          message: "",
          firstName: "",
          lastName: "",
        });
      } else {
        setStatusMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };
  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit} method="post">
        <div className="flex space-x-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            required
            onChange={handleChange}
            className="w-1/2 h-[60px] pl-6  duration-300 border dark:border-none border-black bg-whtie dark:bg-[#282828] placeholder-black/80 dark:placeholder-white/70 focus:outline-none hover:bg-none transition"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-1/2 h-[60px] pl-6  duration-300 border dark:border-none border-black bg-whtie dark:bg-[#282828] placeholder-black/80 dark:placeholder-white/70 focus:outline-none hover:bg-none transition"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            required
            onChange={handleChange}
            className="w-full h-[60px] pl-6  duration-300 border dark:border-none border-black bg-whtie dark:bg-[#282828] placeholder-black/80 dark:placeholder-white/70 focus:outline-none hover:bg-none transition"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={formData.message}
            required
            rows={4}
            cols={50}
            className="w-full h-20 max-h-20 pl-6 pt-2 duration-300 border
                    dark:border-none border-black bg-whtie dark:bg-[#282828]
                    placeholder-black/80 dark:placeholder-white/70 focus:outline-none
                    hover:bg-none transition"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#946D3F] text-white font-semibold rounded-md hover:bg-opacity-60 duration-150 transition"
        >
          SEND
        </button>
      </form>
      {statusMessage && <p className="my-4 text-primary ">{statusMessage}</p>}
    </>
  );
};

export default ConstactUs;
