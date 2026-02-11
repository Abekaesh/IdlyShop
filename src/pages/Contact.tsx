import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccessMessage(
          'Message sent successfully! We will get back to you soon.'
        );
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-24 pb-16 bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl text-primary-100">
            We'd love to hear from you. Get in touch with our team for inquiries,
            feedback, or any questions about our authentic South Indian cuisine.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin size={24} className="text-primary-700 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      Our Location
                    </h3>
                    <p className="text-primary-700">Velloorkunnam</p>
                    <p className="text-primary-700">
                      Muvattupuzha, Kerala 686673
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={24} className="text-primary-700 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      Opening Hours
                    </h3>
                    <p className="text-primary-700">
                      Monday - Sunday: 06:00 AM - 10:50 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="text-primary-700 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-primary-700">
                      <a
                        href="tel:+919539266677"
                        className="hover:text-primary-900 transition-colors"
                      >
                        +91 9539266677
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="text-primary-700 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-primary-700">
                      <a
                        href="mailto:idlyshopkerala@gmail.com"
                        className="hover:text-primary-900 transition-colors"
                      >
                        idlyshopkerala@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Visit Us
                </h3>
                <p className="text-primary-700 mb-4">
                  We welcome walk-ins and are open for lunch and dinner. For
                  large groups or special occasions, please call us in advance.
                  We love to cook for you!
                </p>
                <a
                  href="tel:+919539266677"
                  className="btn-primary inline-block"
                >
                  Call Us
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>
                    <label htmlFor="name" className="block text-primary-800 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-primary-800 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                </div>

                <div>
                  <label htmlFor="subject" className="block text-primary-800 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="General Inquiry"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-primary-800 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="I would like to know more about..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full md:w-auto"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {successMessage && (
                  <p className="text-green-600 mt-2">{successMessage}</p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">Find Us</h2>
            <p className="text-primary-700 max-w-3xl mx-auto">
              We're conveniently located on Velloorkunnam in Muvattupuzha,
              easily accessible by public transportation.
            </p>
          </div>

          <div className="h-[400px] w-full bg-white border-8 border-white rounded-lg shadow-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center bg-primary-100">
              <div className="text-center p-8">
                <MapPin size={48} className="text-primary-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  IDLY SHOP Restaurant
                </h3>
                <p className="text-primary-700 mb-1">Velloorkunnam</p>
                <p className="text-primary-700 mb-4">
                  Muvattupuzha, Kerala 686673
                </p>
                <a
                  href="https://maps.app.goo.gl/YCHtqMGAVdoydK2Q6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
