import Image from "next/image";
import styles from "../styles/Cart.module.css";

export default function cart() {
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
          <tr className={styles.row}>
            <td>
              <div className={styles.product}>
                <Image src={"/img/pizza.png"} objectFit="cover" layout="fill" />
              </div>
            </td>
            <td>
              <span className={styles.name}>Thandhoori</span>
            </td>
            <td>
              <span className={styles.extras}>spicy source</span>
            </td>
            <td>
              <span className={styles.price}>RS 200</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>RS 400</span>
            </td>
          </tr>
          <tr className={styles.row}>
            <td>
              <div className={styles.product}>
                <Image src={"/img/pizza.png"} objectFit="cover" layout="fill" />
              </div>
            </td>
            <td>
              <span className={styles.name}>Thandhoori</span>
            </td>
            <td>
              <span className={styles.extras}>spicy source</span>
            </td>
            <td>
              <span className={styles.price}>RS 200</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>RS 400</span>
            </td>
          </tr>
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
