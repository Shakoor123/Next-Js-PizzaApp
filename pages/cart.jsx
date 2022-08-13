import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
export default function cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles.cart}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.row}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.products.map((product) => (
            <tr className={styles.row} key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image src={product.image} objectFit="cover" layout="fill" />
                </div>
              </td>
              <td>
                <span className={styles.name}>{product.title}</span>
              </td>
              <td>
                <span className={styles.extras}></span>
              </td>
              <td>
                <span className={styles.price}>RS {product.price}</span>
              </td>
              <td>
                <span className={styles.quantity}>{product.quantity}</span>
              </td>
              <td>
                <span className={styles.total}>
                  RS {product.price * product.quantity}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.container}>
          <h2>Cart Total</h2>
          <span>Subtotal 400</span>
          <span>Discount 0</span>
          <span>Total 400</span>
          <button className={styles.button}>Check out Now</button>
        </div>
      </div>
    </div>
  );
}
