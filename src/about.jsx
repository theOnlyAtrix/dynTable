import './propertyView.css';
import {Link} from "react-router-dom";
import { Helmet } from 'react-helmet';

function About() {
    return (
        <>
            <Helmet>
                <title>About Dyntable</title>
                <meta name="google-adsense-account" content="ca-pub-4254925270009380" />
                <meta name="google-site-verification" content="6LAp87tVg_yPBRH5P88K5yGYi8Ms0UwIgdApADmnwxQ" />
            </Helmet>
            <div className="about">
                <h1>About DynTable:</h1><br/><br/>
                <h3>
                    Dyntable is a reference website that is used by people to learn about the elements of the periodic table.<br/>
                    Please Note that this is used by people to learn about the elements of the periodic table. This is not for experimental-level use.<br/><br/>
                    This Website is Made by <Link to="https://github.com/theOnlyAtrix" style={{textAlign:"left"}} className="me">theOnlyAtrix</Link>.
                </h3>
            </div>
        </>
    );
}

export default About;
