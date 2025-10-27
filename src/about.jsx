import './main.css';
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet';

function About() {
    return (
        <>
            <Helmet>
                <title>About Dyntable</title>
                <meta name="google-adsense-account" content="ca-pub-4254925270009380" />
                <meta name="google-site-verification" content="6LAp87tVg_yPBRH5P88K5yGYi8Ms0UwIgdApADmnwxQ" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCFZKTJDFB"></script>
            </Helmet>
            {/* Google Tag Manager (noscript) */}
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKFSK6SP"
                height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
                {/* End Google Tag Manager (noscript) */}
            <div className="p-5 text-bold">
                <h1 className="block text-white text-lg sm:text-xl md:text-2xl">About DynTable:</h1><br/><br/>
                <h3 className="text-white text-md sm:text-lg md:text-xl">
                    Dyntable is a reference website that is used by people to learn about the elements of the periodic table.<br/>
                    Please Note that this is used by people to learn about the elements of the periodic table. This is not for experimental-level use.<br/><br/>
                    This Website is Made by <Link to="https://github.com/theOnlyAtrix" style={{textAlign:"left"}} className="me">theOnlyAtrix</Link>.
                </h3>
            </div>
        </>
    );
}

export default About;
