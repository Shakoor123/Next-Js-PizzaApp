import Image from "next/image";
import styles from "../../styles/Admin.module.css";
import axios from "axios";
import { useState } from "react";

export default function index({ orders, products }) {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const handleDelete = async (id) => {
    try {
      axios.delete("http://localhost:3000/api/products/" + id);
      setProductList(productList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.row}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Prices</th>
              <th>Actions</th>
            </tr>
            {productList.map((product) => (
              <tr className={styles.row}>
                <td>
                  <div className={styles.productImage}>
                    <Image
                      src={product.image}
                      className={styles.productImage}
                      objectFit="cover"
                      width={80}
                      height={80}
                    />
                  </div>
                </td>
                <td>{product.title}</td>
                <td>{product.topings[0].text}</td>
                <td>
                  Rs {product.price[0]},{product.price[1]},{product.price[2]}
                </td>

                <td>
                  <button className={styles.edit}>edit</button>
                  <button
                    className={styles.delete}
                    onClick={() => handleDelete(product._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.section}>
        <h1 className={styles.title}>Orders</h1>

        <table className={styles.table}>
          <tbody>
            <tr className={styles.row}>
              <th>ID</th>
              <th>customer</th>
              <th>address</th>
              <th>total</th>
              <th>method</th>
              <th>status</th>
              <th>Actions</th>
            </tr>
            {orders.map((order) => (
              <tr className={styles.row}>
                <td>{order._id}</td>
                <td>{order.customer}</td>
                <td>{order.address}</td>
                <td>rs {order.total}</td>
                <td>{order.method == 1 ? "Paid" : "Not Paid"}</td>
                <td>{order.status}</td>

                <td>
                  <button className={styles.stage}>Next stage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const productsRes = await axios.get("http://localhost:3000/api/products");
  const ordersRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props: {
      orders: ordersRes.data,
      products: productsRes.data,
    },
  };
};
