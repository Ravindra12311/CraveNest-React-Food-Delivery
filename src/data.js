export const categories = [
  { name: 'Biryani', emoji: '🍛', count: '48 places' },
  { name: 'Pizza', emoji: '🍕', count: '32 places' },
  { name: 'Burgers', emoji: '🍔', count: '26 places' },
  { name: 'South Indian', emoji: '🥞', count: '41 places' },
  { name: 'Desserts', emoji: '🍰', count: '19 places' },
  { name: 'Chinese', emoji: '🥡', count: '24 places' },
  { name: 'Healthy', emoji: '🥗', count: '16 places' },
  { name: 'Coffee', emoji: '☕', count: '21 places' },
];

export const restaurants = [
  { id: 1, name: 'The Biryani House', cuisine: 'Hyderabadi, Biryani, North Indian', rating: 4.7, time: '25–30 min', price: 250, offer: '50% OFF up to ₹100', tag: 'Bestseller', category: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=900', description: 'Dum-cooked classics, fragrant rice and recipes inspired by Hyderabad.' },
  { id: 2, name: 'Olive & Ember', cuisine: 'Italian, Pizza, Pasta', rating: 4.5, time: '30–35 min', price: 400, offer: 'Flat ₹125 OFF', tag: 'Trending', category: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900', description: 'Wood-fired pizzas, handmade pasta and comfort food with a twist.' },
  { id: 3, name: 'Burger Social', cuisine: 'American, Burgers, Fast Food', rating: 4.4, time: '20–25 min', price: 220, offer: 'Buy 1 Get 1', tag: 'Popular', category: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900', description: 'Big, juicy burgers stacked with fresh ingredients and signature sauces.' },
  { id: 4, name: 'Dakshin Stories', cuisine: 'South Indian, Breakfast', rating: 4.6, time: '20–25 min', price: 180, offer: '20% OFF', tag: 'Local favourite', category: 'South Indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=900', description: 'A celebration of South Indian comfort food, from crisp dosas to fluffy idlis.' },
  { id: 5, name: 'Scoop & Spoon', cuisine: 'Desserts, Ice Cream, Bakery', rating: 4.8, time: '15–20 min', price: 200, offer: 'Free dessert on ₹399', tag: 'Top rated', category: 'Desserts', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900', description: 'Small-batch desserts, decadent cakes and handcrafted ice creams.' },
  { id: 6, name: 'Wok This Way', cuisine: 'Chinese, Asian, Momos', rating: 4.3, time: '25–30 min', price: 280, offer: '30% OFF up to ₹90', tag: 'New on CraveNest', category: 'Chinese', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900', description: 'Street-style Asian favourites, wok-tossed noodles and delicious momos.' },
  { id: 7, name: 'Green Theory', cuisine: 'Healthy, Salads, Bowls', rating: 4.5, time: '20–30 min', price: 320, offer: 'Flat ₹75 OFF', tag: 'Feel good food', category: 'Healthy', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900', description: 'Fresh bowls, wholesome ingredients and feel-good meals made daily.' },
  { id: 8, name: 'Daily Grind', cuisine: 'Cafe, Coffee, Sandwiches', rating: 4.2, time: '15–20 min', price: 190, offer: 'Free coffee upgrade', tag: 'Cafe pick', category: 'Coffee', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900', description: 'Your everyday coffee stop for great brews and easy bites.' },
];

export const menuItems = [
  { id: 101, name: 'Signature Chicken Dum Biryani', description: 'Aromatic basmati, tender chicken, dum spices and raita.', price: 289, veg: false, bestseller: true, image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=500' },
  { id: 102, name: 'Paneer 65 Biryani', description: 'Crispy paneer tossed in house spices over fragrant rice.', price: 249, veg: true, bestseller: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500' },
  { id: 103, name: 'Chicken 65', description: 'Crispy bites with curry leaves, chilli and a squeeze of lime.', price: 189, veg: false, bestseller: false, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500' },
  { id: 104, name: 'Double Ka Meetha', description: 'Classic Hyderabadi bread pudding with nuts and saffron.', price: 119, veg: true, bestseller: false, image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500' },
];

export const coupons = [
  { code: 'CRAVE50', title: 'A little treat from us', detail: '50% off up to ₹100 on orders above ₹199', discount: 50, type: 'percent', min: 199 },
  { code: 'WELCOME125', title: 'Welcome to the nest', detail: 'Flat ₹125 off on orders above ₹399', discount: 125, type: 'flat', min: 399 },
  { code: 'FEAST20', title: 'Good food, better mood', detail: '20% off up to ₹150 on orders above ₹299', discount: 20, type: 'percent', min: 299 },
];
