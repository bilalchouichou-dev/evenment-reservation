import Image from "next/image";
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'


export default function Home() {
  const handleSearch =  () => {
    searchRef
  }
  return (
    <>
    <Header/>
    <Main />
    <Footer/>
    </>
  );
}
