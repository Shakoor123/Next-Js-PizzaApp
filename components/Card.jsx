import Image from "next/image";
import style from "../styles/Card.module.css";
export default function Card() {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <Image src={"/img/pizza.png"} alt="" width={200} height={200} />
      </div>
      <h3 className={style.title}>Double chease</h3>
      <span className={style.price}>Rs 499</span>
      <span className={style.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        molestias.
      </span>
    </div>
  );
}
