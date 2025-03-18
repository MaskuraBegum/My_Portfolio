import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Import specific icons from react-icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Enable submit button if all fields are filled
    if (formData.name && formData.email && formData.message) {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission (Formspree)
    fetch("https://formspree.io/f/mkgjgqgv", { // Use your Formspree URL here
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        alert("There was an error. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-white">
        {/* Single combined heading */}
        <h2 className="text-4xl font-bold text-center text-amber-300 mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          I would love to hear from you. Reach out for any inquiries or feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Box */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-700 text-white rounded-xl"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-700 text-white rounded-xl"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-700 text-white rounded-xl"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={!isSubmitEnabled}
                className={`w-full py-2 px-4 bg-amber-300 text-gray-900 rounded-xl ${!isSubmitEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Box */}
          <div className="p-6 flex flex-col items-start justify-center text-left">
            <p className="text-sm lg:text-2xl text-gray-300 mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-amber-300 hover:text-amber-400 transition-colors" size={24} />
              Email: <a href="mailto:maskura.begum77@gmail.com" className="text-amber-300 hover:text-amber-400">maskura.begum77@gmail.com</a>
            </p>
            <p className=" text-sm lg:text-2xl text-gray-300 mb-2 flex items-center">
              <FaPhone className="mr-2 text-amber-300 hover:text-amber-400 transition-colors" size={24} />
              Call: <a href="tel:+8801998282899" className="text-amber-300 hover:text-amber-400">+8801998282899</a>
            </p>
            <p className="text-lg lg;text-2xl text-gray-300 mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-amber-300 hover:text-amber-400 transition-colors" size={24} />
              Location: Cumilla, Bangladesh
            </p>

            <div className="flex gap-6 mt-4 flex-wrap justify-start">
              <a href="https://www.facebook.com/maskura.islam.313" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-400">
                <FaFacebook size={30} />
              </a>
              <a href="https://github.com/MaskuraBegum" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-400">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/maskura-begum/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-400">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
