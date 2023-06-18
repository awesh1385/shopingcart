import React from "react";
import { ProductCard } from "../components/ProductCard";
import {useTitle} from '../hooks/useTitle';

export const Home = () => {
  useTitle("Home");
    const products = [
        {
          "id": 1,
          "name": "Sony WH-1000XM4",
          "price": 349.99,
          "image": "/images/headphone1.jpg"
        },
        {
          "id": 2,
          "name": "Bose QuietComfort 35 II",
          "price": 299.99,
          "image": "/images/headphone3.jpg"
        },
        {
          "id": 3,
          "name": "Sennheiser HD 660 S",
          "price": 499.99,
          "image": "/images/headphone4.jpg"
        },
        {
          "id": 4,
          "name": "Audio-Technica ATH-M50x",
          "price": 149.99,
          "image": "/images/headphone5.jpg"
        },
        {
          "id": 5,
          "name": "Jabra Elite 85h",
          "price": 199.99,
          "image": "/images/headphone6.jpg"
        },
        {
          "id": 6,
          "name": "AKG K702",
          "price": 199.99,
          "image": "/images/headphone2.jpg"
        }
      ];
      
  return (
    <main>
      <section className="products">
      {products.map((product)=>
        <ProductCard key={product.id} product={product} />
      )}
      </section>
    </main>
  );
};
