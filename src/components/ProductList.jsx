import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Navbar from './Navbar';

export const plantsData = [
  // Category 1: Indoor Plants
  {
    id: 1,
    name: 'Monstera Deliciosa',
    category: 'Indoor Plants',
    price: 650,
    description: 'Iconic Swiss cheese plant with dramatic perforated leaves, thrives in bright indirect light.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Snake Plant',
    category: 'Indoor Plants',
    price: 500,
    description: 'Virtually indestructible air-purifier with architectural sword-like variegated foliage.',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Peace Lily',
    category: 'Indoor Plants',
    price: 450,
    description: 'Graceful glossy green foliage paired with stunning white spathe blossoms and air detoxifying benefits.',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'ZZ Plant',
    category: 'Indoor Plants',
    price: 550,
    description: 'Ultra drought-tolerant houseplant featuring waxy, deep green feather-shaped stalks.',
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Spider Plant',
    category: 'Indoor Plants',
    price: 350,
    description: 'Playful arching ribbon leaves producing miniature plantlets, ideal for hanging planters.',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Rubber Plant',
    category: 'Indoor Plants',
    price: 600,
    description: 'Stately rubber tree with thick, burgundy-tinted rubbery leaves that elevate room decor.',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80',
  },

  // Category 2: Outdoor Plants
  {
    id: 7,
    name: 'Areca Palm',
    category: 'Outdoor Plants',
    price: 750,
    description: 'Lush golden-cane cluster palm that provides tropical elegance and natural privacy screening.',
    image: 'https://images.unsplash.com/photo-1599598425947-52026857ba0a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Hibiscus',
    category: 'Outdoor Plants',
    price: 400,
    description: 'Exotic tropical shrub boasting vibrant, flared trumpet blooms that attract pollinators.',
    image: 'https://images.unsplash.com/photo-1550952024-565860d5b5b0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    name: 'Bougainvillea',
    category: 'Outdoor Plants',
    price: 450,
    description: 'Cascading outdoor climber drenched in breathtaking magenta flower bracts, loves warm sun.',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    name: 'Jasmine',
    category: 'Outdoor Plants',
    price: 380,
    description: 'Sweetly fragrant star-shaped white blossoms climbing vigorously on garden trellises.',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 11,
    name: 'Croton',
    category: 'Outdoor Plants',
    price: 480,
    description: 'Vivid rainbow foliage with blazing patterns of red, gold, orange, and emerald greens.',
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 12,
    name: 'Gardenia',
    category: 'Outdoor Plants',
    price: 520,
    description: 'Creamy-white intoxicating blooms framed by lustrous evergreen foliage for patio pots.',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=600&q=80',
  },

  // Category 3: Succulents & Cacti
  {
    id: 13,
    name: 'Echeveria',
    category: 'Succulents & Cacti',
    price: 300,
    description: 'Geometric rosette succulent with powder-blue fleshy petals that blushed pink in full sunlight.',
    image: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 14,
    name: 'Jade Plant',
    category: 'Succulents & Cacti',
    price: 350,
    description: 'Classic symbol of prosperity with miniature tree-like woody stems and plump oval leaves.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 15,
    name: 'Haworthia',
    category: 'Succulents & Cacti',
    price: 320,
    description: 'Zebra-striped succulent showcasing distinct pearl-white raised ridges and compact charm.',
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 16,
    name: 'Barrel Cactus',
    category: 'Succulents & Cacti',
    price: 420,
    description: 'Ribbed golden cylindrical desert succulent armed with amber spines and vibrant yellow caps.',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 17,
    name: 'Aloe Vera',
    category: 'Succulents & Cacti',
    price: 280,
    description: 'Celebrated soothing medicinal succulent with thick serrated spears filled with healing gel.',
    image: 'https://images.unsplash.com/photo-1567689265664-1c48de61db0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 18,
    name: 'String of Pearls',
    category: 'Succulents & Cacti',
    price: 490,
    description: 'Whimsical trailing succulent with cascading strings of pea-shaped jade bead leaves.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = ['Indoor Plants', 'Outdoor Plants', 'Succulents & Cacti'];

  const isItemInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        image: plant.image,
      })
    );
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80';

  return (
    <div className="page-wrapper">
      <Navbar />

      <header className="products-hero">
        <div className="products-hero-content">
          <span className="section-subtitle">BOTANICAL CATALOG</span>
          <h1 className="products-main-title">Discover Our Living Plants</h1>
          <p className="products-main-desc">
            Explore 18+ hand-nurtured, healthy houseplants across indoor, outdoor, and succulent varieties.
          </p>
        </div>
      </header>

      <main className="product-catalog-container">
        {categories.map((category) => {
          const plantsInCategory = plantsData.filter((plant) => plant.category === category);

          return (
            <section key={category} className="category-section" id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="category-header">
                <div className="category-title-wrap">
                  <span className="category-pill">{category}</span>
                  <h2 className="category-title">{category} Collection</h2>
                </div>
                <span className="category-count">{plantsInCategory.length} varieties</span>
              </div>

              <div className="product-grid">
                {plantsInCategory.map((plant) => {
                  const inCart = isItemInCart(plant.id);

                  return (
                    <article key={plant.id} className="plant-card">
                      <div className="plant-image-container">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="plant-thumbnail"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = fallbackImage;
                          }}
                        />
                        <span className="plant-badge">{plant.category}</span>
                      </div>

                      <div className="plant-card-body">
                        <div className="plant-card-top">
                          <h3 className="plant-name">{plant.name}</h3>
                          <span className="plant-price">₹{plant.price}</span>
                        </div>
                        <p className="plant-description">{plant.description}</p>
                        <div className="plant-card-actions">
                          <button
                            type="button"
                            className={`btn btn-add-cart ${inCart ? 'btn-disabled' : ''}`}
                            onClick={() => handleAddToCart(plant)}
                            disabled={inCart}
                            aria-label={inCart ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}
                          >
                            {inCart ? (
                              <>
                                <span className="btn-icon">✓</span> Added to Cart
                              </>
                            ) : (
                              <>
                                <span className="btn-icon">+</span> Add to Cart
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>

      <footer className="footer">
        <p>© 2026 Paradise Nursery. Bringing Nature Into Homes.</p>
      </footer>
    </div>
  );
};

export default ProductList;
