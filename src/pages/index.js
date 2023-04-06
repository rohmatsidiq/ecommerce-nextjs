import { HeadComponent, Navbar } from "../components";
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeadComponent title={"Ecommerce"} />
      <h1>Home</h1>
    </>
  );
}
