import "./periodicTable.css";
import { Link } from "react-router-dom";
import data from "./chemPeriodicTable.json";

function PeriodicTable() {
    return (
        <div className="p-2">
            <div className="grid gap-[1px] grid-cols-18">
                {data.map((element, index) => {
                    if (element.cssClass === "space-break") {
                        return (
                            <div
                                key={index}
                                className="element space-break"
                                style={{
                                    gridColumn: element.gridCol,
                                    gridRow: element.gridRow,
                                }}
                            ></div>
                        );
                    }

                    return (
                        <Link
                            key={index}
                            to={`/${element.name.toLowerCase()}`}
                            className={`element ${element.cssClass} aspect-square flex items-center justify-center text-center rounded-sm text-xs sm:text-md md:text-lg lg:text-3xl`}
                            style={{
                                gridColumn: element.gridCol,
                                gridRow: element.gridRow,
                            }}
                        >
                            {element.symbol}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default PeriodicTable;