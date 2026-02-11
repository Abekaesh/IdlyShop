import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Utensils } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About: React.FC = () => {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-24 pb-16 bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl text-primary-100">
            Discover the passion and dedication behind Idly Shop, where authentic Tamil Nadu cuisine meets Kerala's warm hospitality.
          </p>
        </div>
      </section>

      {/* Restaurant History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">The Beginning</h2>
              <p className="text-primary-800 mb-4">
                 Mr. Prakash, owner of IDLY SHOP, belongs to Tirunelveli, Tamil Nadu and hails from an agiricultural family. He is third generation hotelier from the family.
                He gained rich experience in all aspects of fully Vegetarian Hotel business. He sought out the opportunity to excel through hardwork. It was through his hardwork and perseverance that 
                he was able to accomplish what he did.
              </p>
              <p className="text-primary-800 mb-4">
                 With the lifelong dream of starting own business and seeing the market potential, he migrated to Muvattupuzha, Ernakulam District, Kerala in 2007.
                Prakash began by establishing a restaurant under the brand name 'IDLY SHOP', a pure Vegetarian restaurant, in a premise of 400 sq.ft. He was also handling Idly and Chappathi wholesale business simultaneously for a surplus income.
                The brand became a hit in the town for quality and variety tiffin. He could not cater to the needs of people as the space was a constraint.
              </p>
              <p className="text-primary-800">
                In 2012, <strong>'IDLY SHOP'</strong> was moved to a new leased premise of 2000 sq.ft. in M.C. Road, Muvattupuzha.
                Due to accelerated growth of the town, a new branch of 'Idly Shop' was opened in a premise of 500 sq.ft. located near Municipal Park, Muvattupuzha in Muvattupuzha-Thodupuzha road.  The hotel is running successfully till the date.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Traditional South Indian cooking"
                className="rounded-lg shadow-md w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">Our Philosophy</h2>
            <p className="text-primary-700 max-w-3xl mx-auto">
              At IDLY SHOP, our approach to cuisine and service is guided by three core principles that shape every aspect of your dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center p-6 border border-primary-100 rounded-lg">
              <Award size={40} className="mx-auto text-primary-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-primary-900">Quality</h3>
              <p className="text-primary-700">
                From fresh ingredients to your plate - we never compromise on the purity and authenticity that makes every bite memorable.
              </p>
            </div>

            <div className="text-center p-6 border border-primary-100 rounded-lg">
              <Utensils size={40} className="mx-auto text-primary-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-primary-900">Quantity</h3>
              <p className="text-primary-700">
                Generous portions that leave no one hungry - because satisfaction should never be measured in small servings.
              </p>
            </div>
            
            <div className="text-center p-6 border border-primary-100 rounded-lg">
              <Users size={40} className="mx-auto text-primary-700 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-primary-900">Quick</h3>
              <p className="text-primary-700">
                Hunger can't wait, and neither should you - swift service that brings authentic flavors to your table without the long wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Experience IDLY SHOP for Yourself</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We invite you to join us for an authentic South Indian culinary journey. Discover our traditional menu crafted with love and heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-primary">
              Explore Our Menu
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;