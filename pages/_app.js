import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { useData } from "@/useStore/useData";
import { createClient } from "@sanity/client";
import { Chart as ChartJS } from "chart.js/auto";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const client = createClient({
  projectId: "okpn4ty3",
  dataset: "production",
  useCdn: false,
});

export default function App({ Component, pageProps }) {
  const [companies, updateCompanies, updateLoading] = useData((store) => [
    store.companies,
    store.updateCompanies,
    store.updateLoading,
  ]);

  const router = useRouter();
  const [progress, setProgress] = useState(0)
  const fetchCompanies = async () => {
    updateLoading(true);
    await client
      .fetch(`*[_type == "company"]{...,alumniSelected[]->}`)
      .then((data) => {
        updateCompanies(data);
      });
    updateLoading(false);
  };

  useEffect(() => {
    fetchCompanies();
    console.log("asasas", companies);
  }, [router]);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(50);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router]);

  return (
    <div>
      <div className="">
        <Navbar />
        <LoadingBar
          color="#3b82f6"
          progress={progress}
          waitingTime={300}
          onLoaderFinished={() => setProgress(0)}
        />
        <Component {...pageProps} />
        <Footer />
      </div>
      {/* <div className="text-center font-semibold text-gray-600 py-4 text-lg md:hidden block">
        Please view in Laptop
      </div> */}
    </div>
  );
}
