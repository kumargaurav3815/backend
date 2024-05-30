/** @format */

// import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-10 font-light text-center text_para">
          Have a question, comment, or concern? We would love to hear from you!
          Our team is dedicated to providing you with exceptional service and
          support.
        </p>
        <form action="">
          <div>
            <label htmlFor="firstName" className="form_label">
              First Name
            </label>
            <input
              type="text"
              id="text"
              placeholder="First Name"
              className="form_input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="form_label">
              Last Name
            </label>
            <input
              type="text"
              id="last name"
              placeholder="Last Name"
              className="form_input mt-1"
              required
            />
            <div>
              <label htmlFor="email" className="form_label">
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="form_input mt-1"
                required
              />
            </div>
            <div>
              <label htmlFor="number" className="form_label">
                Phone number
              </label>
              <input
                type="number"
                id="number"
                placeholder="Phone number"
                className="form_input mt-1"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="form_label">
                Your Message
              </label>
              <textarea
                rows={6}
                type="text"
                id="message"
                placeholder="Leave a message..."
                className="form_input mt-1"
                required
              />
            </div>
            <button type="submit" className="btn rounded sm:w-fit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
