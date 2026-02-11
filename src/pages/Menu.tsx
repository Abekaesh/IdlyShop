import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

/* ------------------ Types ------------------ */
interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  vegetarian?: boolean;
}

interface MenuCategory {
  id: MenuCategoryKey;
  name: string;
}

type MenuCategoryKey = 'breakfast' | 'dosa-spl' | 'rice' | 'evening' | 'fried-dish' | 'side-dish' | 'hot-drinks';

/* ------------------ Data ------------------ */
const menuCategories: MenuCategory[] = [
  { id: 'breakfast', name: 'Breakfast (6:30 AM - 10:30 PM)' },
  { id: 'dosa-spl', name: 'Dosa Special (12:00 PM - 10:30 PM)' },
  { id: 'rice', name: 'Rice Varieties (12:30 PM - 9:30 PM)' },
  { id: 'evening', name: 'Evening Special (4:00 PM - 10:00 PM)' },
  { id: 'fried-dish', name: 'Fried Dishes (12:30 PM - 10:00 PM)' },
  { id: 'side-dish', name: 'Side Dishes' },
  { id: 'hot-drinks', name: 'Hot Drinks' },
];

const menuItems: Record<MenuCategoryKey, MenuItem[]> = {
  breakfast: [
    {
      name: 'Idly (3 Nos)',
      description: 'Soft and fluffy steamed rice cakes served with sambar and chutney',
      price: '₹15',
      image: '/images/idly.webp',
      vegetarian: true
    },
    {
      name: 'Thattu Dosa',
      description: 'Traditional thick and crispy dosa',
      price: '₹15',
      image: '/images/thattu-dosa.jpeg',
      vegetarian: true
    },
    {
      name: 'Ghee Thattu Dosa',
      description: 'Thattu dosa prepared with pure ghee for extra flavor',
      price: '₹25',
      image: '/images/thattu-dosa.jpeg',
      vegetarian: true
    },
    {
      name: 'Plain Roast',
      description: 'Crispy and thin roasted dosa',
      price: '₹60',
      image: '/images/plain-roast.jpg',
      vegetarian: true
    },
    {
      name: 'Ghee Roast',
      description: 'Crispy dosa roasted with ghee',
      price: '₹80',
      image: '/images/ghee_roat.png',
      vegetarian: true
    },
    {
      name: 'Podi Roast',
      description: 'Roasted dosa with spicy podi (gun powder) spread',
      price: '₹85',
      image: '/images/ghee-podi-roast.jpg',
      vegetarian: true
    },
    {
      name: 'Ghee Podi Roast',
      description: 'Podi roast prepared with ghee',
      price: '₹100',
      image: '/images/ghee-podi-roast.jpg',
      vegetarian: true
    },
    {
      name: 'Butter Roast',
      description: 'Crispy dosa roasted with butter',
      price: '₹100',
      image: '/images/butter-roast.jpg',
      vegetarian: true
    },
    {
      name: 'Masala Dosa',
      description: 'Crispy dosa filled with spiced potato masala',
      price: '₹80',
      image: '/images/masala-dosa.jpg',
      vegetarian: true
    },
    {
      name: 'Ghee Masala Dosa',
      description: 'Masala dosa prepared with ghee',
      price: '₹90',
      image: '/images/ghee-masala-dosa.jpg',
      vegetarian: true
    },
    {
      name: 'Butter Masala Dosa',
      description: 'Masala dosa roasted with butter',
      price: '₹110',
      image: '/images/butter-masala-dosa.png',
      vegetarian: true
    },
    {
      name: 'Ghee Podi Masala Dosa',
      description: 'Masala dosa with podi and ghee',
      price: '₹105',
      image: '/images/ghee-podi-masala-dosa.webp',
      vegetarian: true
    },
    {
      name: 'Poori with Curry',
      description: 'Deep-fried puffed bread served with potato curry',
      price: '₹75',
      image: '/images/poori-with-curry.jpg',
      vegetarian: true
    },
    {
      name: 'Chappathi with Curry',
      description: 'Soft wheat flatbread served with potato curry',
      price: '₹75',
      image: '/images/chappathi-with-curry.jpg',
      vegetarian: true
    },
  ],
  'dosa-spl': [
    {
      name: 'Five Taste Dosa',
      description: 'Special dosa with five different flavors',
      price: '₹110',
      image: '/images/five-taste-dosa.jpg',
      vegetarian: true
    },
    {
      name: 'Onion Roast',
      description: 'Crispy dosa topped with caramelized onions',
      price: '₹85',
      image: '/images/onion-roast.jpg',
      vegetarian: true
    },
    {
      name: 'Ghee Onion Podi Roast',
      description: 'Onion roast with podi and ghee',
      price: '₹110',
      image: '/images/onion-podi-roast.jpg',
      vegetarian: true
    },
    {
      name: 'Onion Tomato Podi Roast',
      description: 'Roasted dosa with onions, tomatoes, and podi',
      price: '₹120',
      image: '/images/onion-tomato-dosa.avif',
      vegetarian: true
    },
    {
      name: 'Spicy Masala Dosa',
      description: 'Masala dosa with extra spicy filling',
      price: '₹90',
      image: '/images/spicy-masala.jpg',
      vegetarian: true
    },
    {
      name: 'Paneer Masala',
      description: 'Dosa filled with spiced paneer masala',
      price: '₹140',
      image: '/images/paneer-dosa.webp',
      vegetarian: true
    },
    {
      name: 'Mushroom Masala',
      description: 'Dosa filled with mushroom masala',
      price: '₹140',
      image: '/images/mushroom-dosa.png',
      vegetarian: true
    },
    {
      name: 'Gobi Masala',
      description: 'Dosa filled with cauliflower masala',
      price: '₹140',
      image: '/images/gobi-dosa.png',
      vegetarian: true
    },
    {
      name: 'Kaju Masala',
      description: 'Premium dosa filled with cashew masala',
      price: '₹150',
      image: '/images/kaju-masala-dosa.jpg',
      vegetarian: true
    },
    {
      name: 'Onion Uthapam',
      description: 'Thick pancake topped with onions',
      price: '₹80',
      image: '/images/onion-uttapam.jpg',
      vegetarian: true
    },
    {
      name: 'Tomato Uthapam',
      description: 'Thick pancake topped with tomatoes',
      price: '₹80',
      image: '/images/tomato-uthapam.avif',
      vegetarian: true
    },
    {
      name: 'Ghee Podi Uthapam',
      description: 'Uthapam with podi and ghee',
      price: '₹120',
      image: '/images/podi-uthappam.jpg',
      vegetarian: true
    },
  ],
  rice: [
    {
      name: 'Veg Biryani',
      description: 'Fragrant basmati rice cooked with mixed vegetables and spices',
      price: '₹100',
      image: '/images/veg-biryani.png',
      vegetarian: true
    },
    {
      name: 'Paneer Biryani',
      description: 'Aromatic biryani with paneer cubes',
      price: '₹130',
      image: '/images/paneer-biriyani.png',
      vegetarian: true
    },
    {
      name: 'Mushroom Biryani',
      description: 'Fragrant biryani with mushrooms',
      price: '₹130',
      image: '/images/mushroom-biriyani.png',
      vegetarian: true
    },
    {
      name: 'Veg Pulao',
      description: 'Mild and aromatic rice with vegetables',
      price: '₹100',
      image: '/images/veg-biryani.png',
      vegetarian: true
    },
    {
      name: 'Paneer Pulao',
      description: 'Pulao with paneer cubes',
      price: '₹130',
      image: '/images/paneer-biriyani.png',
      vegetarian: true
    },
    {
      name: 'Mushroom Pulao',
      description: 'Pulao with mushrooms',
      price: '₹130',
      image: '/images/mushroom-biriyani.png',
      vegetarian: true
    },
    {
      name: 'Veg Fried Rice',
      description: 'Stir-fried rice with vegetables',
      price: '₹100',
      image: '/images/veg-fried-rice.png',
      vegetarian: true
    },
    {
      name: 'Paneer Fried Rice',
      description: 'Fried rice with paneer',
      price: '₹130',
      image: '/images/paneer-fried-rice.jpg',
      vegetarian: true
    },
    {
      name: 'Mushroom Fried Rice',
      description: 'Fried rice with mushrooms',
      price: '₹130',
      image: '/images/mushroom-fried-rice.jpg',
      vegetarian: true
    },
    {
      name: 'Tomato Rice',
      description: 'Rice cooked with tomatoes and spices',
      price: '₹60',
      image: '/images/tomato-rice.webp',
      vegetarian: true
    },
  ],
  evening: [
    {
      name: 'Mini Ghee Sambar Idly',
      description: 'Mini idlies dunked in ghee and sambar',
      price: '₹90',
      image: '/images/mini-ghee-sambar-idly.jpg',
      vegetarian: true
    },
    {
      name: 'Chilly Idly',
      description: 'Idly tossed with spicy chilly sauce',
      price: '₹100',
      image: '/images/chilli-idly.jpg',
      vegetarian: true
    },
    {
      name: 'Fried Idly',
      description: 'Crispy fried idly pieces',
      price: '₹100',
      image: '/images/fried-idly.jpg',
      vegetarian: true
    },
    {
      name: 'Podi Idly',
      description: 'Idly tossed with spicy podi',
      price: '₹100',
      image: '/images/podi-idly.jpg',
      vegetarian: true
    },
    {
      name: 'Idly Manchurian',
      description: 'Idly in Indo-Chinese manchurian sauce',
      price: '₹100',
      image: '/images/idly-manchurian.jpg',
      vegetarian: true
    },
    {
      name: 'Pepper Idly',
      description: 'Idly tossed with crushed pepper',
      price: '₹100',
      image: '/images/pepper-idly.jpg',
      vegetarian: true
    },
    {
      name: 'Masala Idly',
      description: 'Idly with spicy masala coating',
      price: '₹100',
      image: '/images/masala-idly.jpg',
      vegetarian: true
    },
    {
      name: 'Battura with Curry',
      description: 'Fluffy deep-fried bread served with curry',
      price: '₹80',
      image: '/images/battura-with-curry.webp',
      vegetarian: true
    },
    {
      name: 'Chilly Parotta',
      description: 'Parotta tossed with spicy chilly sauce',
      price: '₹100',
      image: '/images/chilli-parotta.jpg',
      vegetarian: true
    },
    {
      name: 'Kothu Parotta',
      description: 'Shredded parotta stir-fried with vegetables and spices',
      price: '₹100',
      image: '/images/kothu-parotta.jpg',
      vegetarian: true
    },
    {
      name: 'Paneer Kothu Parotta',
      description: 'Kothu parotta with paneer',
      price: '₹130',
      image: '/images/paneer-kothu-parotta.jpg',
      vegetarian: true
    },
    {
      name: 'Mushroom Kothu Parotta',
      description: 'Kothu parotta with mushrooms',
      price: '₹130',
      image: '/images/mushroom-kothu-parotta.jpg',
      vegetarian: true
    },
    {
      name: 'Gobi Kothu Parotta',
      description: 'Kothu parotta with cauliflower',
      price: '₹130',
      image: '/images/gobi-kothu-parotta.jpg',
      vegetarian: true
    },
  ],
  'fried-dish': [
    {
      name: 'Idly 65',
      description: 'Spicy fried idly 65 style',
      price: '₹100',
      image: '/images/idly-65.jpg',
      vegetarian: true
    },
    {
      name: 'Gobi 65',
      description: 'Crispy fried cauliflower 65',
      price: '₹100',
      image: '/images/gobi-65.webp',
      vegetarian: true
    },
    {
      name: 'Paneer 65',
      description: 'Spicy fried paneer cubes',
      price: '₹140',
      image: '/images/paneer-65.avif',
      vegetarian: true
    },
    {
      name: 'Mushroom 65',
      description: 'Crispy fried mushroom 65',
      price: '₹140',
      image: '/images/mushrrom-65.jpg',
      vegetarian: true
    },
    {
      name: 'Gobi Pepper Fry',
      description: 'Cauliflower stir-fried with crushed pepper',
      price: '₹140',
      image: '/images/gobi-pepper-fry.webp',
      vegetarian: true
    },
    {
      name: 'Paneer Pepper Fry',
      description: 'Paneer stir-fried with pepper',
      price: '₹140',
      image: '/images/paneer-pepper-fry.jpg',
      vegetarian: true
    },
    {
      name: 'Mushroom Pepper Fry',
      description: 'Mushroom stir-fried with pepper',
      price: '₹140',
      image: '/images/mushroom-pepper-fry.jpg',
      vegetarian: true
    },
  ],
  'side-dish': [
    {
      name: 'Gobi Manchurian',
      description: 'Cauliflower in Indo-Chinese manchurian sauce',
      price: '₹120',
      image: '/images/gobi-manchurian.jpg',
      vegetarian: true
    },
    {
      name: 'Chilly Gobi',
      description: 'Crispy cauliflower tossed in spicy chilly sauce',
      price: '₹120',
      image: '/images/chilly-gobi.jpg',
      vegetarian: true
    },
    {
      name: 'Paneer Butter Masala',
      description: 'Paneer cubes in creamy tomato-butter gravy',
      price: '₹140',
      image: '/images/paneer-butter-masala.jpg',
      vegetarian: true
    },
    {
      name: 'Paneer Manchurian',
      description: 'Paneer in Indo-Chinese manchurian sauce',
      price: '₹140',
      image: '/images/paneer-manchurian.png',
      vegetarian: true
    },
    {
      name: 'Chilly Paneer',
      description: 'Paneer tossed in spicy chilly sauce',
      price: '₹140',
      image: '/images/chilli_paneer.avif',
      vegetarian: true
    },
    {
      name: 'Mushroom Masala',
      description: 'Mushrooms in spicy masala gravy',
      price: '₹140',
      image: '/images/mushroom-masala.jpg',
      vegetarian: true
    },
    {
      name: 'Mushroom Manchurian',
      description: 'Mushrooms in Indo-Chinese manchurian sauce',
      price: '₹140',
      image: '/images/mushroom-manchurian.avif',
      vegetarian: true
    },
    {
      name: 'Chilly Mushroom',
      description: 'Mushrooms tossed in spicy chilly sauce',
      price: '₹140',
      image: '/images/chilli-mushroom.avif',
      vegetarian: true
    },
  ],
  'hot-drinks': [
    {
      name: 'Coffee (Instant)',
      description: 'Quick and refreshing instant coffee',
      price: '₹22',
      image: '/images/coffee.jpg',
      vegetarian: true
    },
    {
      name: 'Pure Filter Coffee',
      description: 'Traditional South Indian filter coffee',
      price: '₹30',
      image: '/images/coffee.jpg',
      vegetarian: true
    },
    {
      name: 'Black Coffee',
      description: 'Strong black coffee',
      price: '₹12',
      image: '/images/black-coffee.jpg',
      vegetarian: true
    },
    {
      name: 'Chukku Coffee',
      description: 'Traditional coffee with dry ginger',
      price: '₹20',
      image: '/images/chukku-kaapi.jpg',
      vegetarian: true
    },
    {
      name: 'Tea',
      description: 'Hot tea with milk',
      price: '₹14',
      image: '/images/tea.jpg',
      vegetarian: true
    },
    {
      name: 'Black Tea',
      description: 'Strong black tea',
      price: '₹10',
      image: '/images/black-tea.jpg',
      vegetarian: true
    },
    {
      name: 'Boost',
      description: 'Chocolate flavored health drink',
      price: '₹35',
      image: '/images/horlicks.jpg',
      vegetarian: true
    },
    {
      name: 'Horlicks',
      description: 'Malted health drink',
      price: '₹35',
      image: '/images/horlicks.jpg',
      vegetarian: true
    },
    {
      name: 'Milk',
      description: 'Fresh hot milk',
      price: '₹12',
      image: '/images/milk.avif',
      vegetarian: true
    },
  ],
};

/* ------------------ Component ------------------ */
const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>('breakfast');

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-24 pb-16 bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl max-w-3xl text-primary-100">
            Explore our authentic South Indian dishes prepared with traditional recipes and the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 bg-primary-800 sticky top-16 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-2 text-sm md:text-base rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-accent-500 text-white'
                    : 'bg-transparent text-white hover:bg-primary-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-primary-900 text-center">
              {menuCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {menuItems[activeCategory].map((item, index) => (
                <div key={index} className="flex bg-primary-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-1/3 object-cover"
                  />
                  <div className="p-5 w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary-900">{item.name}</h3>
                      <span className="text-accent-600 font-bold whitespace-nowrap ml-2">{item.price}</span>
                    </div>
                    <p className="text-primary-700 text-sm">{item.description}</p>
                    {item.vegetarian && (
                      <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        Vegetarian
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience IDLY SHOP?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Visit us today and experience the authentic flavors of South India.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default Menu;