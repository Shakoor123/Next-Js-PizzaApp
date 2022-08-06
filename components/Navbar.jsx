import Image from "next/image";
import React, { Component } from "react";
import style from "../styles/Navbar.module.css";
export class Navbar extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.logo}>
            <Image src={"/img/telephone.png"} alt="" width={22} height={22} />
          </div>
          <div className={style.contact}>
            <span>Order Now</span>
            <span>123 456 789</span>
          </div>
        </div>
        <div className={style.center}>
          <div className={style.list}>
            <div className={style.item}>HomePage</div>
            <div className={style.item}>Products</div>
            <div className={style.item}>Menu</div>
            <Image src={"/img/logo.png"} alt="" width={122} height={42} />

            <div className={style.item}>Events</div>
            <div className={style.item}>Blog</div>
            <div className={style.item}>Contact</div>
          </div>
        </div>
        <div className={style.bottom}>
          <Image
            src={"/img/cart.png"}
            alt=""
            className={style.cartLogo}
            width={22}
            height={22}
          />
          <div className={style.valueCircle}>
            <div className={style.value}>4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
