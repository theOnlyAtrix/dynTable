import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './main.css';
import ScrollToTop from './ScrollToTop.jsx';
import ElementFormat from './ElementFormat.jsx';
import PeriodicTable from "./periodicTable.jsx";
import PeriodicTableView from "./periodicTableView.jsx";
import About from './about.jsx';

function App() {
  return (
    <>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<PeriodicTableView />} />
                    <Route path={"/:element"} element={<ElementFormat />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/chem"} element={<PeriodicTable />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
