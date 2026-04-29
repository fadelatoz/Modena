"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Text from "@/components/atoms/Text";
import {
  contactSchema,
  ContactFormValues,
} from "@/constants/validation/contact.schema";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div>
      <div className="text-center mb-8">
        <Text variant="h3" weight="semibold" className="text-2xl mb-2">
          Schedule a Consultation
        </Text>
        <Text variant="body" className="text-gray-500">
          Get personalized assistance for your Seamless setup
        </Text>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Full Name"
            className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-purple-500 focus:border-b-2 transition-colors"
          />
          {errors.name && (
            <Text variant="caption" className="text-red-500 text-xs mt-1">
              {errors.name?.message}
            </Text>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-purple-500 focus:border-b-2 transition-colors"
          />
          {errors.email && (
            <Text variant="caption" className="text-red-500 text-xs mt-1">
              {errors.email?.message}
            </Text>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone Number"
            className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-purple-500 focus:border-b-2 transition-colors"
          />
          {errors.phone && (
            <Text variant="caption" className="text-red-500 text-xs mt-1">
              {errors.phone?.message}
            </Text>
          )}
        </div>

        <div>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Your Message"
            className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-purple-500 focus:border-b-2 transition-colors resize-none"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            {...register("agreement")}
            id="privacy"
            type="checkbox"
            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
          />
          <label
            htmlFor="privacy"
            className="text-sm text-gray-700 cursor-pointer select-none"
          >
            I agree to the{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.agreement && (
          <Text variant="caption" className="text-red-500 text-xs">
            {errors.agreement?.message}
          </Text>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
