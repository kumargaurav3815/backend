/** @format */

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header/Header";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    appointmentDate: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Check if all fields are filled
    if (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phoneNumber.trim() !== "" &&
      formData.appointmentDate.trim() !== ""
    ) {
      // Check if appointment date is in the future
      const currentDate = new Date();
      const selectedDate = new Date(formData.appointmentDate);
      if (selectedDate < currentDate) {
        // If appointment date is in the past, show error message
        toast.error("Please select a date in the future for the appointment");
        setSubmitting(false);
        return;
      }

      // If all fields are filled and appointment date is in the future, "book" the appointment
      console.log("Appointment booked:", formData);
      toast.success("Appointment booked successfully!"); // <-- Display success toast
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        appointmentDate: "",
      });
    } else {
      // If any field is empty, show error message or handle accordingly
      console.error("All fields are required");
      // You can set an error state and display a message to the user if needed
    }

    setSubmitting(false);
  };

  return (
    <>
      <Header />
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4 mt-4">
          Schedule Your Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="appointmentDate"
              className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 w-full"
            disabled={submitting || submitted}>
            {submitting
              ? "Booking..."
              : submitted
              ? "Submit"
              : "Book Appointment"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default AppointmentForm;
