import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Chart as ChartJS } from "chart.js/auto";

export default function App({ Component, pageProps }) {
  return  (
    <div>
      <div className="md:block hidden">
       
       <Navbar />
       <Component {...pageProps} />
       <Footer/>
       
     </div>
     <div className="text-center font-semibold text-gray-600 py-4 text-lg md:hidden block">Please view in Laptop</div>
    </div>
  );
}
