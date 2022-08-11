import Image from "next/image";
import styles from "../../styles/Order.module.css";

export default function Order() {
  return (
    <div className={styles.order}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.row}>
            <th>Order Id</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <span className={styles.name}>12346789</span>
            </td>
            <td>
              <span className={styles.name}>abdul shakoor</span>
            </td>
            <td>
              <span className={styles.name}>kattipara mahal</span>
            </td>
            <td>
              <span className={styles.name}>400</span>
            </td>
          </tr>
          <tr className={styles.status}>
            <td>
              <div className={styles.oneColum}>
                <Image
                  src={"/img/paid.png"}
                  width={30}
                  height={30}
                  alt="no image"
                />
                <span className={styles.text}>Payment</span>
                <Image
                  src={"/img/checked.png"}
                  width={30}
                  height={30}
                  alt="no image"
                />
              </div>
            </td>
            <td>
              <div className={styles.oneColum}>
                <Image
                  src={"/img/bake.png"}
                  width={30}
                  height={30}
                  alt="no image"
                />
                <span className={styles.text}>Priparing</span>
                <Image
                  src={"/img/checked.png"}
                  width={30}
                  height={30}
                  alt="no image"
                />
              </div>
            </td>
            <td>
              <div className={styles.oneColum}>
                <Image
                  src={"/img/bike.png"}
                  width={30}
                  height={30}
                  alt="no image"
                />
                <span className={styles.text}>On the Way</span>
                <Image
                  src={"/img/checked.png"}
                  width={30}
                  height={30}
                  alt="no image"
                />
              </div>
            </td>
            <td>
              <div className={styles.oneColum}>
                <Image
                  src={"/img/delivered.png"}
                  width={30}
                  height={30}
                  alt="no image"
                />
                <span className={styles.text}>Deliverd</span>
                <Image
                  src={"/img/checked.png"}
                  width={30}
                  height={30}
                  alt="no image"
                />
              </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}
