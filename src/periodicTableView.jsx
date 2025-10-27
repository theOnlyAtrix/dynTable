import "./main.css";
import PeriodicTable from "./periodicTable.jsx";
import { Helmet } from "react-helmet";

function PeriodicTableView() {
    return (
        <>
            <Helmet>
                <title>DynTable: The Periodic Table Refined</title>
                <meta name="description" content="Information about elements in the periodic table"/>
                <meta name="google-adsense-account" content="ca-pub-4254925270009380" />
                <meta name="google-site-verification" content="6LAp87tVg_yPBRH5P88K5yGYi8Ms0UwIgdApADmnwxQ" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCFZKTJDFB"></script>
            </Helmet>
            {/* Google Tag Manager (noscript) */}
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKFSK6SP"
                height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
                {/* End Google Tag Manager (noscript) */}
            <div className="mains m-0">
                <div className="introCard bg-gradient-to-r from-fuchsia-500 to-cyan-500 m-0 px-8 py-40 sm:py-77 text-sm leading-7 font-bold sm:text-4xl text-black sm:leading-15">
                    <h1 className="animated-text inline">Welcome </h1><h1 className="animated-text inline">to </h1><span className="bg-[#36013f] text-white rounded-sm"><h1 className="animated-text inline whitespace-pre"> DynTable </h1></span><br />
                    <h3>The Future of Elements starts here.</h3><br /><br />
                </div>
                <hr className="m-0 h-2 text-black"/>
                <div className="bg-sky-200 text-black">
                    <div className="block m-0 px-5 text-xl py-10 font-bold sm:text-2xl">
                        <h1 className="text-3xl"><u>What is a "Periodic Table"?</u></h1><br />
                        <h2>A periodic table is a chart that organizes all known chemical<br /> elements into rows (periods) and columns (groups) <br />based on their atomic number, revealing patterns in their properties and <br />allowing scientists to predict chemical behaviors.</h2>
                    </div>
                    <div className="periodicTableView mx-auto py-3">
                        <h1 style={{textAlign: "center", fontSize: "50px", display: "block"}} className="font-bold">Periodic Table</h1>
                        <div className="ptable px-1 sm:px-6 lg:px-8 py-4">
                            <PeriodicTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PeriodicTableView;
