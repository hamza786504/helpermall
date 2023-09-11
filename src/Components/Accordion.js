import React, { useState } from "react";

const categories = [
    "Electronics",
    "Books",
    "Clothing, Shoes & Jewelry",
    "Home & Kitchen",
    "Health & Household",
    "Beauty & Personal Care",
    "Toys & Games",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Automotive",
    "Pet Supplies",
    "Baby",
    "Movies & TV Shows",
    "Music",
    "Grocery & Gourmet Food",
    "Computers & Accessories",
    "Office Products",
    "Industrial & Scientific",
    "Arts, Crafts & Sewing",
    "Garden & Outdoor",
  ];

  const items = [
    {
      label: "Electronics",
      icon: "pi pi-fw pi-electric",
      items: [
        [
          {
            label: "Camera & Photo",
            items: [
              { label: "DSLR Cameras" },
              { label: "Mirrorless Cameras" },
              { label: "Point & Shoot Cameras" },
            ],
          },
          {
            label: "Headphones",
            items: [
              { label: "Over-Ear Headphones" },
              { label: "In-Ear Headphones" },
              { label: "Noise-Canceling Headphones" },
            ],
          },
        ],
        [
          {
            label: "Wearable Technology",
            items: [
              { label: "Smartwatches" },
              { label: "Fitness Trackers" },
              { label: "Virtual Reality Headsets" },
            ],
          },
          {
            label: "Home Audio & Theater",
            items: [
              { label: "Soundbars" },
              { label: "Home Theater Systems" },
              { label: "Wireless & Bluetooth Speakers" },
            ],
          },
        ],
        [
          {
            label: "Car Electronics",
            items: [
              { label: "Car Stereos" },
              { label: "Car Speakers" },
              { label: "Car GPS Units" },
            ],
          },
          {
            label: "Musical Instruments",
            items: [
              { label: "Guitars" },
              { label: "Keyboards" },
              { label: "Drums & Percussion" },
            ],
          },
        ],
        [
          {
            label: "GPS & Navigation",
            items: [
              { label: "Handheld GPS" },
              { label: "Car GPS" },
              { label: "Marine GPS" },
            ],
          },
        ],
      ],
    },

    {
      label: "Books",
      icon: "pi pi-fw pi-book",
      items: [
        [
          {
            label: "Literature & Fiction",
            items: [
              { label: "Contemporary Fiction" },
              { label: "Classic Literature" },
              { label: "Historical Fiction" },
            ],
          },
          {
            label: "Mystery, Thriller & Suspense",
            items: [
              { label: "Police Procedurals" },
              { label: "Psychological Thrillers" },
              { label: "Legal Thrillers" },
            ],
          },
        ],
        [
          {
            label: "Science Fiction & Fantasy",
            items: [
              { label: "Space Opera" },
              { label: "Epic Fantasy" },
              { label: "Urban Fantasy" },
            ],
          },
          {
            label: "Romance",
            items: [
              { label: "Historical Romance" },
              { label: "Paranormal Romance" },
              { label: "Contemporary Romance" },
            ],
          },
        ],
        [
          {
            label: "Biographies & Memoirs",
            items: [
              { label: "Autobiographies" },
              { label: "Memoirs of Public Figures" },
              { label: "Personal Journals" },
            ],
          },
          {
            label: "History",
            items: [
              { label: "Ancient History" },
              { label: "World War II History" },
              { label: "Cultural History" },
            ],
          },
        ],
        [
          {
            label: "Self-Help",
            items: [
              { label: "Personal Development" },
              { label: "Motivational" },
              { label: "Time Management" },
            ],
          },
          {
            label: "Cookbooks, Food & Wine",
            items: [
              { label: "Quick & Easy Cooking" },
              { label: "Baking" },
              { label: "International Cuisine" },
            ],
          },
        ],
      ],
    },

    {
      label: "Clothing, Shoes & Jewelry",
      icon: "pi pi-fw pi-book",
      items: [
        [
          {
            label: "Women",
            items: [
              { label: "Dresses" },
              { label: "Tops" },
              { label: "Bottoms" },
            ],
          },
          {
            label: "Men",
            items: [
              { label: "Shirts" },
              { label: "Pants" },
              { label: "Outerwear" },
            ],
          },
          {
            label: "Handbags & Accessories",
            items: [
              { label: "Tote Bags" },
              { label: "Wallets" },
              { label: "Sunglasses" },
            ],
          },
        ],
        [
          {
            label: "Girls",
            items: [
              { label: "Dresses" },
              { label: "Tops" },
              { label: "Shoes" },
            ],
          },
          {
            label: "Boys",
            items: [
              { label: "T-Shirts" },
              { label: "Jeans" },
              { label: "Activewear" },
            ],
          },
        ],
        [
          {
            label: "Baby",
            items: [
              { label: "Bodysuits" },
              { label: "Sleepwear" },
              { label: "Accessories" },
            ],
          },
          {
            label: "Shoes",
            items: [
              { label: "Sneakers" },
              { label: "Sandals" },
              { label: "Sandals" },
            ],
          },
        ],
        [
          {
            label: "Jewelry",
            items: [
              { label: "Necklaces" },
              { label: "Earrings" },
              { label: "Bracelets" },
            ],
          },
          {
            label: "Watches",
            items: [
              { label: "Analog Watches" },
              { label: "BakingDigital Watches" },
              { label: "Smartwatches" },
            ],
          },
        ],
      ],
    },
  ];


  const Accordion = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [activeSubcategory2, setActiveSubcategory2] = useState(null);
  
    const toggleCategory = (category) => {
      if (activeCategory === category) {
        setActiveCategory(null);
        setActiveSubcategory(null);
        setActiveSubcategory2(null);
      } else {
        setActiveCategory(category);
        setActiveSubcategory(null);
        setActiveSubcategory2(null);
      }
    };
  
    const toggleSubcategory = (subcategory) => {
      if (activeSubcategory === subcategory) {
        setActiveSubcategory(null);
        setActiveSubcategory2(null);
      } else {
        setActiveSubcategory(subcategory);
        setActiveSubcategory2(null);
      }
    };
  
    const toggleSubcategory2 = (subcategory2) => {
      if (activeSubcategory2 === subcategory2) {
        setActiveSubcategory2(null);
      } else {
        setActiveSubcategory2(subcategory2);
      }
    };
  
    const renderSubcategories = (subItems, level, parentSubcategory) => {
      const subcategoryState =
        level === 1 ? activeCategory : level === 2 ? activeSubcategory : null;
  
      return (
        <div className={`accordion-content level-${level}`}>
          {subItems.map((subItem, index) => (
            <div
              key={subItem.label}
              onClick={(e) => {
                e.stopPropagation(); // Prevent category toggle
                if (level === 1) {
                  toggleCategory(subItem.label);
                } else if (level === 2 && parentSubcategory === activeCategory) {
                  toggleSubcategory(subItem.label);
                }
              }}
              className={`level ${
                subcategoryState === subItem.label ? "active" : ""
              } level-${level}`}
            >
              {subItem.label}
              {subItem.items &&
                (level < 2 || subcategoryState === subItem.label) &&
                renderSubcategories(subItem.items, level + 1, subItem.label)}
            </div>
          ))}
        </div>
      );
    };
  
    return (
      <ul className="category-list">
        {categories.map((category) => {
          const categoryItem = items.find((item) => item.label === category);
          const hasSubcategories = categoryItem && categoryItem.items.length > 0;
          const isOpen = activeCategory === category;
  
          return (
            <li key={category}>
              {hasSubcategories ? (
                <div
                  className={`accordion-item ${isOpen ? "open" : ""}`}
                  onClick={() => toggleCategory(category)}
                >
                  <button className="accordion-button">{category}</button>
                  {isOpen && renderSubcategories(categoryItem.items[0], 1, null)}
                </div>
              ) : (
                <a href="#" className="category-link">
                  {category}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default Accordion;