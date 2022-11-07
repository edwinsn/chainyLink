import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Home';
import Login from './Login';
import Register from './Register';
import GenerateLink from './GenerateLink';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<GenerateLink />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path='/sign-up' element={<Register />} />
                {/*<Route path="/links" element={<Links />} />*/}
                {/*<Route path="/links/:id" element={<Link />} />*/}
            </Routes>
        </BrowserRouter>
    );
}