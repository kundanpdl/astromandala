import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // Form Subject handlers

  const handleSelect = (value, e) => {
    setSubject(value);
    e.target.closest("details").removeAttribute("open");
  };
  // Form submission handler
  const [subject, setSubject] = useState("Subject");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  console.log({ serviceId, templateId, publicKey });

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: `${firstName} ${lastName}`,
      user_email: email,
      subject: subject,
      message: message,
    };
    console.log(templateParams);

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent!");
      },
      (err) => {
        console.log("FAILED...", err);
        alert("Failed to send email.");
      },
    );
  };

  return (
    <div className="flex justify-center items-center w-screen  min-h-150">
      <div className=" drop-shadow-xl w-screen rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        {/* <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          // Add usericon image
          <img src="usericon.png" alt="login" className="h-[500px]" />
        </div> */}
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-yellow-800 text-center text-2xl sm:text-3xl font-semibold">
            Contact Us
          </h1>
          <h3 className="text-purple-900 text-center mt-4">
            For your any additional queries, or just to let us know how we are
            doing!
          </h3>
          <div className="w-full mt-5 sm:mt-8">
            <form
              className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5"
              onSubmit={sendEmail}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="text-yellow-800/50">
                **Please include names in message box if you are sending a
                referral.**
              </p>
              <details className="dropdown">
                <summary className="btn m-1">{subject}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li>
                    <button
                      type="button"
                      onClick={(e) => handleSelect("Review", e)}
                    >
                      Review
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={(e) => handleSelect("Referral", e)}
                    >
                      Referral
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={(e) => handleSelect("Urgent", e)}
                    >
                      Urgent
                    </button>
                  </li>
                </ul>
              </details>

              <div className="sm:col-span-2">
                <label
                  htmlfor="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                ></label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button className="btn btn-active text-yellow-700 bg-white/50 btn-block max-w-25">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
