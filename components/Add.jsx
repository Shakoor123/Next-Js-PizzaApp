import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Add({ setClose }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [extraOptions, setExtraOptions] = useState([]);
  return (
    <div className={styles.add}>
      <div className={styles.wrapper}>
        <h1>Add New Pizza</h1>
        <span onClick={() => setClose(false)}> X</span>
        <div className={styles.item}>
          <span className={styles.span}>Image</span>
          <input className={styles.input} type="file" name="" id="" />
        </div>
        <div className={styles.item}>
          <span className={styles.span}>Title</span>
          <input className={styles.input} type="text" name="" id="" />
        </div>
        <div className={styles.item}>
          <span className={styles.span}>Description</span>
          <input className={styles.input} type="text" name="" id="" />
        </div>
        <div className={styles.item}>
          <span className={styles.span}>Prices</span>
          <input
            className={`${styles.input} ${styles.small}`}
            type="number"
            name=""
            id=""
            placeholder="small"
            onChange={(e) => setPrices(e, 0)}
          />
          <input
            className={`${styles.input} ${styles.meadium}`}
            type="number"
            name=""
            id=""
            placeholder="medium"
            onChange={(e) => setPrices(e, 1)}
          />
          <input
            className={`${styles.input} ${styles.large}`}
            type="number"
            name=""
            id=""
            placeholder="large"
            onChange={(e) => setPrices(e, 2)}
          />
        </div>
      </div>
    </div>
  );
}
