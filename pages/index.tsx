import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SavingsSection from "@/components/MursyidSection";
import KegiatanSection from "@/components/KegiatanSection";
import SlideShow from "@/components/SlideShow";
import YouTubeGallery from "@/components/YouTubeGallery";
import KitabAurod from "@/components/KitabAurod";
import DownloadKitabAurod from "@/components/DownloadKitab";
import MapsLocation from "@/components/MapsLocation";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="../public/img/logo.png" /> {/* Favicon */}
        <link rel="apple-touch-icon" href="../public/img/logo.png" /> {/* Apple devices */}
        <title>majelis-sabilulkhairaat</title>
        <meta 
        name="description" 
        content="Majelis Sabilul Khairaat - Official Website" />
        <meta property="og:image" content="../public/img/logo.png" /> {/* OpenGraph Image */}
        <meta property="og:title" content="Majelis Sabilul Khairaat" />
        <meta property="og:description" content="Majelis Taddabur Alquran!" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <Hero/>
      <div className="bg-green-700 flex flex-col justify-center px-16 py-12 max-md:px-5 max-md:py-10"/>
      <YouTubeGallery />
      <div className="bg-green-700 flex flex-col justify-center px-16 py-12 max-md:px-5 max-md:py-10"/>
      <div className="bg-white flex flex-col justify-center px-16 py-12 max-md:px-5 max-md:py-10"/>
      <SlideShow/>
      <div className="bg-white flex flex-col justify-center px-16 py-12 max-md:px-5 max-md:py-10"/>
      <MapsLocation/>
      <div className="bg-white flex flex-col justify-center px-16 py-12 max-md:px-5 max-md:py-10"/>
    </>
  );
};

export default Index;
