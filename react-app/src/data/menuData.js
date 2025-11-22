// Menu data with real Indian cafe food images and pricing
export const MENU_ITEMS = [
    // Hot Beverages
    {
        id: 101,
        category: 'hot-beverages',
        name: 'Masala Chai',
        description: 'Traditional Indian spiced tea with aromatic blend of cardamom, ginger, and cloves',
        price: '₹40',
        tags: ['Classic', 'Spiced', 'Veg'],
        spiceLevel: 1,
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80',
        popular: true
    },
    {
        id: 102,
        category: 'hot-beverages',
        name: 'Filter Coffee',
        description: 'South Indian style filter coffee with frothy milk',
        price: '₹50',
        tags: ['Strong', 'Aromatic', 'Veg'],
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80'
    },
    {
        id: 103,
        category: 'hot-beverages',
        name: 'Cappuccino',
        description: 'Classic Italian coffee with steamed milk foam',
        price: '₹80',
        tags: ['Foamy', 'Coffee', 'Veg'],
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80'
    },
    {
        id: 104,
        category: 'hot-beverages',
        name: 'Café Latte',
        description: 'Smooth espresso with steamed milk',
        price: '₹90',
        tags: ['Mild', 'Creamy', 'Veg'],
        image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80'
    },
    {
        id: 105,
        category: 'hot-beverages',
        name: 'Espresso',
        description: 'Strong shot of pure coffee',
        price: '₹60',
        tags: ['Intense', 'Veg'],
        image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80'
    },
    {
        id: 106,
        category: 'hot-beverages',
        name: 'Mocha',
        description: 'Rich chocolate and coffee blend',
        price: '₹100',
        tags: ['Rich', 'Chocolate', 'Veg'],
        image: 'https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?w=800&q=80'
    },
    {
        id: 107,
        category: 'hot-beverages',
        name: 'Hot Chocolate',
        description: 'Creamy Belgian chocolate drink',
        price: '₹90',
        tags: ['Comfort', 'Veg'],
        image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80'
    },
    {
        id: 108,
        category: 'hot-beverages',
        name: 'Green Tea',
        description: 'Light and refreshing herbal tea',
        price: '₹40',
        tags: ['Light', 'Herbal', 'Veg'],
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80'
    },

    // Cold Beverages
    {
        id: 109,
        category: 'cold-beverages',
        name: 'Cold Coffee',
        description: 'Chilled coffee with ice cream and chocolate sauce',
        price: '₹100',
        tags: ['Chilled', 'Veg'],
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
        popular: true
    },
    {
        id: 110,
        category: 'cold-beverages',
        name: 'Mango Lassi',
        description: 'Sweet yogurt drink with fresh mango pulp',
        price: '₹80',
        tags: ['Refreshing', 'Veg'],
        image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80',
        popular: true
    },
    {
        id: 111,
        category: 'cold-beverages',
        name: 'Nimbu Pani',
        description: 'Fresh lime soda with mint',
        price: '₹50',
        tags: ['Zesty', 'Veg'],
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
    },
    {
        id: 112,
        category: 'cold-beverages',
        name: 'Fresh Fruit Smoothie',
        description: 'Seasonal fruits blended with yogurt',
        price: '₹110',
        tags: ['Fruity', 'Veg'],
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80'
    },
    {
        id: 113,
        category: 'cold-beverages',
        name: 'Chocolate Milkshake',
        description: 'Thick chocolate shake with ice cream',
        price: '₹100',
        tags: ['Creamy', 'Veg'],
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80'
    },
    {
        id: 114,
        category: 'cold-beverages',
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed orange juice',
        price: '₹70',
        tags: ['Fresh', 'Veg'],
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80'
    },

    // Snacks & Quick Bites
    {
        id: 115,
        category: 'snacks',
        name: 'Veg Sandwich',
        description: 'Grilled sandwich with fresh vegetables and cheese',
        price: '₹80',
        tags: ['Light', 'Veg'],
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80'
    },
    {
        id: 116,
        category: 'snacks',
        name: 'Paneer Tikka Sandwich',
        description: 'Grilled paneer with mint chutney',
        price: '₹100',
        tags: ['Protein', 'Veg'],
        spiceLevel: 2,
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80'
    },
    {
        id: 117,
        category: 'snacks',
        name: 'Cheese Toast',
        description: 'Crispy toast with melted cheese',
        price: '₹70',
        tags: ['Cheesy', 'Veg'],
        image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=800&q=80'
    },
    {
        id: 118,
        category: 'snacks',
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter',
        price: '₹90',
        tags: ['Baked', 'Veg'],
        image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=800&q=80'
    },
    {
        id: 119,
        category: 'snacks',
        name: 'Croissant',
        description: 'Flaky French pastry',
        price: '₹60',
        tags: ['Buttery', 'Veg'],
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80'
    },
    {
        id: 120,
        category: 'snacks',
        name: 'Veg Puff',
        description: 'Crispy puff pastry with spiced potato filling',
        price: '₹40',
        tags: ['Savory', 'Veg'],
        spiceLevel: 1,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
        popular: true
    },
    {
        id: 121,
        category: 'snacks',
        name: 'Paneer Puff',
        description: 'Flaky pastry with paneer and spices',
        price: '₹50',
        tags: ['Spiced', 'Veg'],
        spiceLevel: 2,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80'
    },
    {
        id: 122,
        category: 'snacks',
        name: 'Samosa',
        description: 'Crispy fried pastry with potato and peas',
        price: '₹30',
        tags: ['Crispy', 'Veg'],
        spiceLevel: 2,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
        popular: true
    },
    {
        id: 123,
        category: 'snacks',
        name: 'Mini Kachori',
        description: 'Spiced lentil filled fried snack (2 pcs)',
        price: '₹40',
        tags: ['Snack', 'Veg'],
        spiceLevel: 2,
        image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&q=80'
    },
    {
        id: 124,
        category: 'snacks',
        name: 'French Fries',
        description: 'Crispy golden fries with seasoning',
        price: '₹80',
        tags: ['Crispy', 'Veg'],
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80'
    },
    {
        id: 125,
        category: 'snacks',
        name: 'Nachos',
        description: 'Tortilla chips with cheese sauce and salsa',
        price: '₹120',
        tags: ['Cheesy', 'Veg'],
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80'
    },

    // Light Eats & Street Food Specials
    {
        id: 126,
        category: 'light-eats',
        name: 'Pav Bhaji',
        description: 'Spiced mashed vegetables with buttered pav',
        price: '₹100',
        tags: ['Street', 'Veg'],
        spiceLevel: 2,
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
        popular: true
    },
    {
        id: 127,
        category: 'light-eats',
        name: 'Vada Pav',
        description: 'Mumbai\'s iconic potato fritter in bun',
        price: '₹40',
        tags: ['Iconic', 'Veg'],
        spiceLevel: 2,
        image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800&q=80',
        popular: true
    },
    {
        id: 128,
        category: 'light-eats',
        name: 'Bun Maska',
        description: 'Soft bun with generous butter',
        price: '₹50',
        tags: ['Soft', 'Veg'],
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80'
    },
    {
        id: 129,
        category: 'light-eats',
        name: 'Keema Pav',
        description: 'Spiced minced meat with pav bread',
        price: '₹120',
        tags: ['Hearty', 'Non-Veg'],
        spiceLevel: 3,
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80'
    },
    {
        id: 130,
        category: 'light-eats',
        name: 'Masala Maggi',
        description: 'Spicy instant noodles with vegetables',
        price: '₹60',
        tags: ['Quick', 'Veg'],
        spiceLevel: 2,
        image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&q=80'
    },
    {
        id: 131,
        category: 'light-eats',
        name: 'Veg Momos',
        description: 'Steamed dumplings with spicy chutney (6 pcs)',
        price: '₹80',
        tags: ['Steamed', 'Veg'],
        spiceLevel: 2,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80',
        popular: true
    },
    {
        id: 132,
        category: 'light-eats',
        name: 'Mini Pizzas',
        description: 'Personal size pizza with toppings (2 pcs)',
        price: '₹140',
        tags: ['Cheesy', 'Veg'],
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80'
    },

    // Desserts & Sweet Treats
    {
        id: 133,
        category: 'desserts',
        name: 'Chocolate Brownie',
        description: 'Warm fudgy brownie with ice cream',
        price: '₹100',
        tags: ['Rich', 'Veg'],
        image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80',
        popular: true
    },
    {
        id: 134,
        category: 'desserts',
        name: 'Belgian Waffles',
        description: 'Crispy waffles with maple syrup and fruits',
        price: '₹120',
        tags: ['Crispy', 'Veg'],
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&q=80'
    },
    {
        id: 135,
        category: 'desserts',
        name: 'Gulab Jamun',
        description: 'Soft milk dumplings in sugar syrup (2 pcs)',
        price: '₹60',
        tags: ['Traditional', 'Veg'],
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80'
    },
    {
        id: 136,
        category: 'desserts',
        name: 'Ras Malai',
        description: 'Cottage cheese dumplings in sweet milk (2 pcs)',
        price: '₹80',
        tags: ['Creamy', 'Veg'],
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80'
    },
    {
        id: 137,
        category: 'desserts',
        name: 'Kulfi',
        description: 'Traditional Indian ice cream',
        price: '₹50',
        tags: ['Frozen', 'Veg'],
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80'
    },
    {
        id: 138,
        category: 'desserts',
        name: 'Cheesecake Slice',
        description: 'Creamy New York style cheesecake',
        price: '₹110',
        tags: ['Rich', 'Veg'],
        image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80'
    }
];

export const CATEGORIES = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'hot-beverages', name: 'Hot Beverages', icon: '☕' },
    { id: 'cold-beverages', name: 'Cold Beverages', icon: '🥤' },
    { id: 'snacks', name: 'Snacks & Quick Bites', icon: '🥪' },
    { id: 'light-eats', name: 'Light Eats & Specials', icon: '🍜' },
    { id: 'desserts', name: 'Desserts & Treats', icon: '🍰' }
];
