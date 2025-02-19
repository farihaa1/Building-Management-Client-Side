import React, { useState } from "react";
import Swal from "sweetalert2";
import bg3 from "../../assets/background/bg.jpg";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter a valid email address.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: `You have successfully subscribed to the Chill Gamer newsletter with the email: ${email}`,
    });

    setEmail("");
  };

  return (
    <div
      id="newsletter-section"
      style={{ backgroundImage: `url(${bg3})` }}
      className="text-black py-20 px-4 sm:px-12 lg:px-20 font-pSans flex flex-col md:flex-row gap-5 dark:bg-black dark:bg-opacity-80 dark:bg-blend-overlay  dark:text-white"
    >
      <h2 className="text-4xl font-syne font-bold text-center dark:text-gray-200">
        Subscribe to Our Newsletter
      </h2>
      <p className="para text-gray-600 max-w-lg mx-auto dark:text-gray-400 text-center italic">
        Get the latest updates, news, and exclusive content straight to your
        inbox. Don’t miss out on important announcements and exciting new blogs.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input input-bordered dark:text-gray-300 dark:bg-gray-200 w-full"
          required
        />
        <button
          type="submit"
          className="border w-32 shadow-sm text-lg leading-relaxed tracking-wide shadow-primary border-primary text-primary font-bold dark:text-white px-6 py-3 rounded max-w-md "
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
