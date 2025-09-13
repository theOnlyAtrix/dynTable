import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import ElementFormat from './ElementFormat.jsx';
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
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
