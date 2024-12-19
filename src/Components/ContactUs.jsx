import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="bg-[#EFF2F1] py-16">
      <div className="container mx-auto px-4 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-start gap-8 mb-12 text-gray-700 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <FaMapMarkerAlt className="text-3xl text-[#3B5D50]" />
            <div>
              <h4 className="text-lg font-bold">Our Location</h4>
              <p className="text-sm">Uttor Badda, Dhaka-1212</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <FaEnvelope className="text-2xl text-[#3B5D50]" />
            <div>
              <h4 className="text-lg font-bold">Email Us</h4>
              <p className="text-sm">maf.furniture@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <FaPhoneAlt className="text-2xl text-[#3B5D50]" />
            <div>
              <h4 className="text-lg font-bold">Phone</h4>
              <p className="text-sm">+880 17905-39698</p>
              <p className="text-sm">+880 16761-68037</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 lg:p-8 max-w-3xl mx-auto bg-white shadow-md rounded-lg"
        >
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-semibold mb-2 px-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B5D50]"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-semibold mb-2 px-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B5D50]"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2 px-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B5D50]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2 px-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              {...register("message")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B5D50]"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#3B5D50] text-white px-6 py-2 rounded-lg hover:bg-[#3B6D50] transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
