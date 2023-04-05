import { Inter } from "next/font/google";
import { HeadComponent, Navbar } from "../components";
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <HeadComponent title={"Ecommerce"} />
    </>
  );
}
