'use client'

import Image from "next/image";
import styles from "./page.module.css";
import {useEffect} from "react";

export default function Home() {

  const getVendors = async () => {
    const vendors = fetch('http://localhost:3000/vendor/')
    console.log(vendors)
  }

  useEffect(() => {
    getVendors()
  }, [])

  return (
    <div className={styles.page}>

    </div>
  );
}
