import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false); // loading state

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, // service ID
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // template ID
                formData, // data
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY // public key
            )
            .then(
                () => {
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "Thanks for reaching out. We'll get back to you soon.",
                        confirmButtonColor: "#3b82f6",
                    });
                    setFormData({ user_name: "", user_email: "", message: "" }); // reset form
                    setIsSending(false);
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops!",
                        text: "Something went wrong. Please try again later.",
                        confirmButtonColor: "#ef4444",
                    });
                    console.error("EmailJS Error:", error);
                    setIsSending(false);
                }
            );
    };

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Get in Touch
                </h2>
                <p className="mt-4 text-gray-300 text-center max-w-2xl mx-auto">
                    Have a project in mind? Reach out to us and we'll help you turn your
                    vision into reality.
                </p>

                <div className="mt-10 max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={6}
                        />
                        <button
                            type="submit"
                            disabled={isSending}
                            className={`bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition ${isSending ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
