import React, { useState, useEffect } from "react";
import Head from "next/head";
import api from "../api";
import Loading from "../components/Loading";
import ProductCard from '../components/productCard';
import Header from '../components/header'
import styles from "../../../styles/modules/productsList.module.scss";

const ProductsList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await api.product.list();
      await setData(response.data);
    } catch (error) {
      await setData(null);
    }
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>products list</title>
        <meta
          name="description"
          content="Meta description for the products page"
        />
      </Head>
      <Header />
      <div className="container">
        {loading ? (
          <Loading />
        ) : data ? (
          <div className={styles.list}>
            {data &&
              data.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}
          </div>
        ) : (
          <button className="retry-button" onClick={() => fetch()}>
            تلاش مجدد
          </button>
        )}
      </div>
    </div>
  );
           
};
export default ProductsList;
