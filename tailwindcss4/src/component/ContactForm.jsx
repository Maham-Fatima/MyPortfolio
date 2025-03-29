import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const sendEmail = async (data) => {
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Success:", result.text);
      alert("Email sent successfully!");
      reset();
    } catch (error) {
      console.error("Error:", error.text);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="mx-auto w-full lg:w-[40vw] p-6 rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit(sendEmail)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            rows={4}
            {...register("message", { required: "Message is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-white py-2 rounded-lg hover:bg-blue-700 transition"
          style={{backgroundColor:"black"}}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          
        </button>
      </form>
    </div>
  );
}
