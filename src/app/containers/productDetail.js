import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import api from "../api";
import Loading from "../components/Loading"
import Header from "../components/header";
import Stars from "../components/stars";
import styles from "../../../styles/modules/productDetail.module.scss";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch();
  }, [id]);

  const fetch = async () => {
    try {
      setLoading(true);
      if (!id) {
        return;
      }
      const response = await api.product.detail(id);
      await setProduct(response.data);
    } catch (error) {
      await setProduct(null);
    }
    setLoading(false);
  };

 return (
   <div>
     <Header />
     <div className="container">
       {loading ? (
         <Loading />
       ) : product ? (
         <>
           <Head>
             <title>{product.title}</title>
             <meta name="description" content={product.description} />
           </Head>
           <div className={styles.wrapper}>
             <div className={styles.image}>
               <img src={product.image || ""} alt={product.title} />
             </div>
             <div className={styles.info}>
               <div className={styles.top}>
                 <h3 className={styles.title}>{product.title}</h3>
                 <Stars stars={product.rating.rate} />
               </div>
               <div className={styles.category}>{product.category}</div>
               <div className={styles.price}>${product.price}</div>
               <div className={styles.description}>
                 <label>Description</label>
                 <p>{product.description}</p>
               </div>
             </div>
           </div>
         </>
       ) : (
         <button className="retry-button" onClick={() => fetch()}>
           تلاش مجدد
         </button>
       )}
     </div>
   </div>
 );
           
};
export default ProductDetail;
