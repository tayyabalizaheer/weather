import { Geist, Geist_Mono } from "next/font/google";
import "../css/bootstrap.min.css";
import "../css/all.min.css";
import "../css/style.css";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";
import "../css/jquery.fancybox.min.css";

import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function AppLayout({ children }) {
    return (
        <div>
            <Head>
                <script src="js/bootstrap.bundle.min.js"></script>
                <script src="js/jquery.min.js"></script>
                <script src="js/owl.carousel.min.js"></script>
                <script src="js/custom.js"></script>
                <script src="js/jquery.fancybox.min.js"></script>


            </Head>
            <Header></Header>
            <div className={`${geistSans.variable} ${geistMono.variable}`}> 
            {children}
            </div>
            <Footer></Footer>
        </div>
        
         
    );
  }