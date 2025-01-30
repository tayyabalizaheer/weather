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
import SearchLocation from "./map/SearchLocation";

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
            <div className="modal fade login-div-modal" id="searchModal" tabindex="-1" aria-modal="true" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    
                  </div>
                  <div className="modal-body">
                    
                    <div id="login-td-div" className="com-div-md">
                      <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                      </button>
                      <div className="login-modal-pn">
                      <SearchLocation></SearchLocation>
                      </div>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <Footer></Footer>
        </div>
        
         
    );
  }