import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url(/public/images/shop.webp)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-primary-900/70"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Authentic South Indian Flavors
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Traditional Tamil Nadu cuisine with Kerala's warm hospitality
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/menu" className="btn-primary">
              View Our Menu
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Restaurant interior"
                className="rounded-lg shadow-md w-full object-cover h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">Welcome to IDLY SHOP</h2>
              <p className="text-primary-800 mb-4">
                IDLY SHOP brings you the authentic flavors of Tamil Nadu to the heart of Kerala. Our traditional recipes have been passed down through generations, using the finest spices and time-honored cooking methods.
              </p>
              <p className="text-primary-800 mb-6">
                Founded by the Mr. Prakash in 2007, IDLY SHOP has become a beloved destination for those seeking genuine South Indian cuisine in Kerala. We love to cook for you with the same passion and care as we would for our own family.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary-700 hover:text-primary-900">
                <span className="mr-2">Learn more about our story</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Guest Experiences</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              What our valued guests have to say about their dining experience at IDLY SHOP.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-primary-800 p-6 rounded-lg">
              <div className="flex items-center text-accent-500 mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-primary-100 mb-4">
                "Although it looks like a very small shop from the outside, when you step inside, quite a few people can be seated at the same time. It is a very busy shop; you have to wait 3 to 5 minutes to get a seat. Even so, it doesn't matter, as the food served at the table is so tasty. Staff service is really good. I had breakfast: Masala Dosa and Bru Coffee. I suggest this good vegetarian restaurant to everyone traveling through this area. Thank you."
              </p>
              <div>
                <p className="font-bold">Shani Joseph</p>
                <p className="text-sm text-primary-200">Local Guide</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-primary-800 p-6 rounded-lg">
              <div className="flex items-center text-accent-500 mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-primary-100 mb-4">
                "The crowd in the restaurant itself is proof of how tasty their food is. They serve the best dosa and breakfast items in the area. All three chutneys along with the sambar are delicious and full of authentic flavor. A perfect spot for a satisfying morning meal .  highly recommended for breakfast.""
              </p>
              <div>
                <p className="font-bold">Mohammed Rafaath</p>
                <p className="text-sm text-primary-200">Local Guide</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-primary-800 p-6 rounded-lg">
              <div className="flex items-center text-accent-500 mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-primary-100 mb-4">
                "I recently visited Idly shop and was thoroughly impressed with my experience. I tried normal idly and poori from here. The idlies were soft and fluffy and the poori was crispy on the outside and soft on the inside and both was good. The accompanying chutneys and sambar added an extra flavor to the dish, making it even more delicious. The staff were friendly and attentive, and the shop had a clean and inviting atmosphere. The prices were reasonable, making it an affordable option for anyone looking for a delicious and filling breakfast. The place is crowded, but there's a lot of seats. Maybe you have to wait some time if you are visiting in the peak hours. There's lot of varieties of idly is available. Overall, I would highly recommend this idly shop to anyone looking for a quality and satisfying meal."
              </p>
              <div>
                <p className="font-bold">Dalbin Mathew</p>
                <p className="text-sm text-primary-200">Local Food Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hours */}
            <div className="text-center p-6 border border-primary-100 rounded-lg">
              <Clock size={32} className="mx-auto text-primary-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-primary-900">Opening Hours</h3>
              <p className="text-primary-700 mb-2">Monday - Sunday: 06:00 AM - 10:50 PM</p>
            </div>
            
            {/* Location */}
            <div className="text-center p-6 border border-primary-100 rounded-lg">
              <MapPin size={32} className="mx-auto text-primary-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-primary-900">Location</h3>
              <p className="text-primary-700 mb-2">Velloorkunnam</p>
              <p className="text-primary-700">Muvattupuzha, Kerala 686673</p>
            </div>
            
            {/* Contact */}
            <div className="text-center p-6 border border-primary-100 rounded-lg">
              <Phone size={32} className="mx-auto text-primary-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-primary-900">Contact Us</h3>
              <p className="text-primary-700 mb-4">For inquiries, please call us:</p>
              <a href="tel:+919539266677" className="btn-primary">
                +91 9539266677
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;