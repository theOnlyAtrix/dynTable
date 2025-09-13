import "./main.css";
import PeriodicTable from "./periodicTable.jsx";
import { Helmet } from "react-helmet"

function PeriodicTableView() {
    return (
        <>
            <Helmet>
                <title>DynTable: The Periodic Table Refined</title>
            </Helmet>
            <div className="introCard">
                <span className="animated-text"><h1 className="animated-text">Welcome </h1></span><span className="animated-text"><h1 className="animated-text">to </h1></span><span className="animated-text"><h1 className="animated-text">DynTable</h1></span>
                <span className="animated-text"><h3>The Future of Elements starts here</h3></span>
            </div>
            <div className="periodicTableView">
                <h1 style={{textAlign: "center", fontSize: "50px", color: "white", display: "block"}}>Periodic Table</h1>
                <div className="periodicTable">
                    <PeriodicTable />
                </div>
            </div>
        </>
    );
}

export default PeriodicTableView;
