import { HeadComponent, Navbar, Banner } from "../components";
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

export default function Home() {


  return (
    <>
      <Navbar />
      <HeadComponent title={"Ecommerce"} />
      <Banner/>
    </>
  );
}
