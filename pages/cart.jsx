import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

export default function cart() {
  const [open, setOpen] = useState(false);
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              console.log(details);
            });
          }}
        />
      </>
    );
  };
  return (
    <div className={styles.cart}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
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
                    <Image
                      src={product.image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text},</span>
                    ))}
                  </span>
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
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.container}>
          <h2>Cart Total</h2>
          <span>Subtotal {cart.total}</span>
          <span>Discount 0</span>
          <span>Total RS:{cart.total}</span>
          {open ? (
            <div>
              <button className={styles.buttonCash}>CASH ON DELIVERY</button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "ARDlILap1MSMZ2eZc9woMb7roTEqq1ThnU5eP3bw4u8asYlevceoahDMFbZtgHPRTzxK-fNaB10VZm0m",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button className={styles.button} onClick={() => setOpen(true)}>
              Check out Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
