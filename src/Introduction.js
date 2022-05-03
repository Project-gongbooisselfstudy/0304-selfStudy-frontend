import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillFileAdd, AiFillEdit,AiFillFolderOpen } from "react-icons/ai";
import IN from "./images/IN.png";

import styles from "./Introduction.module.css";
import Header from "./Header.js";
import Footer from "./Footer.js";



function Introduction() {

  return (
    <><><div >
      <Header />
    </div><h1 className={styles.center}>
        공부는 셀프입니다.
        <div className={styles.IN}>
        <img 
          src={IN} />
        </div>
      </h1>
    </><div className={styles.center}>
        <h3>
          나만의 문제를 만들어
        </h3>
<br></br>
        <h3>
          나만의 공부를 시작해보자
        </h3>
      </div>
      <br></br>
      <div>
        <p className={styles.centersize}>
          <AiFillFileAdd />
          내가 직접 문제를 만들고
        </p>

        <p className={styles.centersize}>
          <AiFillEdit />
          만든 문제를 언제든 다시 풀어보고
        </p>

        <p className={styles.centersize}>
          <AiFillFolderOpen />
          틀린 문제를 따로 보관하고
        </p>
      </div>

      
      <Footer />
      </>
      );
}
        export default Introduction;