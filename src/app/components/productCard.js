import React from "react";
import Link from "next/link";
import styles from "../../../styles/modules/ProductCard.module.scss";
import Stars from '../components/stars';

const ProductCard = ({ product }) => {

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Link href={`/products/${product.id}`}>
            <img src={product.image || ""} alt={product.title} />
          </Link>
        </div>
        <Stars stars={product.rating.rate} />
        <h3 className={styles.title}>
          <Link href={`/products/${product.id}`}>
            {product.title.slice(0, 50) +
              (product.title.length >= 50 ? "..." : "")}
          </Link>
        </h3>
        <div className={styles.price}>${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
