import React from "react";

const HoverMenus = () => {
  const menus1 = [
    {
      top: "NEW ARRIVAL",
      menus: [
        "New In",
        "Fall Winter 2023",
        "Varsity",
        "Special Occasion",
        "Gifts for Her",
        "Givenchy Iconics",
        "Shark Lock",
      ],
    },
  ];

  const menus2 = [
    {
      top: "READY-TO-WEAR",
      menus: [
        "All Ready-to-Wear",
        "Outerwear & Blousons",
        "Coats & Jackets",
        "Dresses",
        "Knitwear",
        "Sweatshirts & Hoodies",
        "T-Shirts",
        "Tops & Shirts",
        "Pants",
        "Denim",
        "Skirts",
        "Shorts",
        "Bodysuits & Underwear",
        "Swimwear",
      ],
    },
  ];

  const menus3 = [
    {
      top: "BAGS",
      menus: [
        "All Bags",
        "Crossbody Bags",
        "Shoulder Bags",
        "Micro Bags",
        "Wallets & Card Holders",
        "Voyou",
        "Antigona",
        "G-Tote",
        "4G",
      ],
    },
  ];

  const menus4 = [
    {
      top: "SHOES",
      menus: [
        "All Shoes",
        "Shark Lock",
        "Boots & Booties",
        "Heels",
        "Sneakers",
        "Slides & Sandals",
        "City",
        "Marshmallow",
      ],
    },
  ];

  const menus5 = [
    {
      top: "ACCESSORIES",
      menus: [
        "All Accessories",
        "Jewelry",
        "Sunglasses",
        "Beanies & Caps",
        "Scarves",
        "Wallets & Card Holders",
        "Belts",
        "Straps & Other Accessories",
      ],
    },
  ];

  const menus6 = [
    {
      top: "KIDS",
      menus: ["All Kids", "Baby (1 month to 3 years)", "Girl (4 to 12 years)"],
    },
  ];

  return (
    <>
      {menus1.map((menu, i) => (
        <div key={i}>
          <p className="mb-8 hover:text-gray-700">{menu.top}</p>
          {menu.menus.map((subMenu, i) => (
            <p key={i} className="mt-3 hover:text-gray-700">
              {subMenu}
            </p>
          ))}
        </div>
      ))}
      {menus2.map((menu, i) => (
        <div key={i}>
          <p className="mb-8 hover:text-gray-700">{menu.top}</p>
          {menu.menus.map((subMenu, i) => (
            <p key={i} className="mt-3 hover:text-gray-700">
              {subMenu}
            </p>
          ))}
        </div>
      ))}
      {menus3.map((menu, i) => (
        <div key={i}>
          <p className="mb-8 hover:text-gray-700">{menu.top}</p>
          {menu.menus.map((subMenu, i) => (
            <p key={i} className="mt-3 hover:text-gray-700">
              {subMenu}
            </p>
          ))}
        </div>
      ))}
      {menus4.map((menu, i) => (
        <div key={i}>
          <p className="mb-8 hover:text-gray-700">{menu.top}</p>
          {menu.menus.map((subMenu, i) => (
            <p key={i} className="mt-3 hover:text-gray-700">
              {subMenu}
            </p>
          ))}
        </div>
      ))}
      {menus5.map((menu, i) => (
        <div key={i}>
          <p className="mb-8 hover:text-gray-700">{menu.top}</p>
          {menu.menus.map((subMenu, i) => (
            <p key={i} className="mt-3 hover:text-gray-700">
              {subMenu}
            </p>
          ))}
        </div>
      ))}
      {menus6.map((menu, i) => (
        <div key={i}>
          <p className="mb-8 hover:text-gray-700">{menu.top}</p>
          {menu.menus.map((subMenu, i) => (
            <p key={i} className="mt-3 hover:text-gray-700">
              {subMenu}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default HoverMenus;
