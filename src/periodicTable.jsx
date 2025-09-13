import './periodicTable.css';
import { Link } from 'react-router-dom';
import data from "./chemPeriodicTable.json";

function PeriodicTable() {
    return (
        <>
            <div className="periodicTable">
                {data.map((element, index) => {
                    // Check if it's a space-break
                    if (element.cssClass === "space-break") {
                        return (
                            <div
                                key={index}
                                className={`element ${element.cssClass}`}
                                style={{ gridColumn: element.gridCol, gridRow: element.gridRow }}
                            ></div>
                        );
                    }

                    // Regular element with link
                    return (
                        <Link
                            key={index}
                            to={`/${element.name.toLowerCase()}`}
                            className={`element ${element.cssClass}`}
                            style={{ gridColumn: element.gridCol, gridRow: element.gridRow }}
                        >
                            {element.symbol}
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export default PeriodicTable;