import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./propertyView.css";
import data from "./chemPeriodicTable.json";

function ElementFormat() {
    const { element } = useParams(); // e.g. "Hydrogen"

    // normalize both sides to lowercase for matching
    const selected = data.find(
        (el) => el.name.toLowerCase() === element.toLowerCase()
    );

    if (!selected) {
        return <h2>Element not found</h2>;
    }

    return (
        <>
            <div className="view">
                <Helmet>
                    <title>DynTable: About {selected.name}</title>
                    <meta name="description" content="Information about elements in the periodic table"/>
                    <meta name="google-adsense-account" content="ca-pub-4254925270009380" />
                    <meta name="google-site-verification" content="6LAp87tVg_yPBRH5P88K5yGYi8Ms0UwIgdApADmnwxQ" />
                    <!-- Google tag (gtag.js) -->
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCFZKTJDFB"></script>
                    <script>
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-ZCFZKTJDFB');
                    </script>
                </Helmet>
                <!-- Google Tag Manager (noscript) -->
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKFSK6SP"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <!-- End Google Tag Manager (noscript) -->
                <h1>Element: {selected.name}</h1><br/>
                <h2>Symbol: {selected.symbol}</h2>
                <h2>Atomic Number: {selected.atomicNo}</h2><br />
                <h2>About: {selected.about}</h2><br />
                <h1>Numerical Values of element:</h1><br />
                <h2>Atomic Mass: {selected.atomicMass}</h2>
                <h2>Electronic Configuration: {selected.EC}</h2>
                <h2>Block: {selected.block}-block Element</h2>
                <h2>Ionisation Enthalpy: {selected.ionisationE}</h2>
                <h2>Electronegativity: {selected.EN}</h2>
                <h2>Atomic Radius: {selected.atomicRadius}</h2>
                <h2>Van der Waals Radius: {selected.vanDeWaalsRadius}</h2>
                <h2>Molar Mass: {selected.molarMass}</h2>
                <h2>Standard State: {selected.standardState}</h2>
                <h2>Isotopes: </h2>
                <ul className="isotopes">
                    {Object.entries(selected.isotopes).map(([isotope, nums]) => (
                        <li>{isotope} - Protons: {nums[0]}, Neutrons: {nums[1]}, Electrons: {nums[2]}</li>
                    ))}
                </ul>
                <h2>Density at STP: {selected.densityAtSTP}</h2>
                <h2>Melting Point: {selected.meltingPoint}</h2>
                <h2>Boiling Point: {selected.boilingPoint}</h2>
                <h2>Triple Point(Temperature): {selected.triplePointTemp}</h2>
                <h2>Triple Point(Pressure): {selected.triplePointPressure}</h2>
                <h2>Critical Temperature: {selected.criticalTemp}</h2>
                <h2>Critical Pressure: {selected.critPressure}</h2>
                <h2>Enthalpy of Fusion: {selected.enthalpyOfFusion}</h2>
                <h2>Enthalpy of Vaporization: {selected.enthalpyOfVaporization}</h2>
                <h2>Formation Enthalpy: {selected.formationEnthalpy}</h2>
                <h2>Dissociation Energy: {selected.dissociationEnergy}</h2>
                <h2>Heat Capacity at STP: {selected.heatCapacityAtSTP}</h2>
                <h2>Thermal Conductivity: {selected.thermalConductivity}</h2>
                <h2>Electrical Conductivity: {selected.electricConductivity}</h2>
                <h2>Magnetic Ordering: {selected.magneticOrdering}</h2>
                <h2>Abundance in Universe: {selected.abundanceUniverse}</h2>
                <h2>Abundance in Earth's Crust: {selected.abundanceEarthCrust}</h2>
            </div>
        </>
    );
}

export default ElementFormat;

