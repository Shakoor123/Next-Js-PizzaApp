import Image from "next/image";
import { useState } from "react";
import style from "../../styles/Product.module.css";

export default function Product() {
  const [index, setIndex] = useState(0);
  const pizza = {
    name: "Thanduri pizza",
    id: "123",
    price: [200, 400, 600],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia at asperiores illo dolorem iste dignissimos commodi voluptate ipsam dolor, maxime molestias aspernatur adipisci laboriosam quas eius, nihil impedit laborum fugiat!",
  };
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.imageContainer}>
          <Image src={"/img/pizza.png"} layout="fill" />
        </div>
      </div>
      <div className={style.right}>
        <h1 className={style.title}>{pizza.name}</h1>
        <span className={style.price}>RS:{pizza.price[index]}</span>
        <span className={style.desc}>{pizza.desc}</span>
        <h3 className={style.innerTitle}>Choose the Size</h3>
        <h3 className={style.sizes}>
          <div className={style.size} onClick={() => setIndex(0)}>
            <Image src={"/img/size.png"} layout="fill" />
            <span className={style.sizeName}>Small</span>
          </div>
          <div className={style.size} onClick={() => setIndex(1)}>
            <Image src={"/img/size.png"} layout="fill" />
            <span className={style.sizeName}>Medium</span>
          </div>
          <div className={style.size} onClick={() => setIndex(2)}>
            <Image src={"/img/size.png"} layout="fill" />
            <span className={style.sizeName}>Large</span>
          </div>
        </h3>

        <h3 className={style.innerTitle}>Choose the additional Ingredians</h3>
        <div className={style.ingrediands}>
          <div className={style.ingrediand}>
            <input
              type="checkbox"
              className={style.checkbox}
              name="double"
              id="double"
            />
            <label htmlFor="double" className={style.ingrediandName}>
              double increadiant
            </label>
          </div>
          <div className={style.ingrediand}>
            <input
              type="checkbox"
              className={style.checkbox}
              name="chease"
              id="chease"
            />
            <label htmlFor="chease" className={style.ingrediandName}>
              Extra chease
            </label>
          </div>
          <div className={style.ingrediand}>
            <input
              type="checkbox"
              className={style.checkbox}
              name="source"
              id="source"
            />
            <label htmlFor="source" className={style.ingrediandName}>
              Spicy source
            </label>
          </div>
          <div className={style.ingrediand}>
            <input
              type="checkbox"
              className={style.checkbox}
              name="Garlic"
              id="Garlic"
            />
            <label htmlFor="Garlic" className={style.ingrediandName}>
              Garlic source
            </label>
          </div>
        </div>
        <input type="number" className={style.count} value="1" />
        <button className={style.button}>Add to Cart</button>
      </div>
    </div>
  );
}
