import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Home';
import Login from './Login';
import Register from './Register';
import GenerateLink from './GenerateLink';
import Link from './Link'
import Nav from '../Nav'

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>

                    <Route path="/" element={<GenerateLink />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/sign-up' element={<Register />} />
                    <Route path="/link/:id" element={<Link />} />
                    {/*<Route path="/links" element={<Links />} />*/}
                </Routes>
            </BrowserRouter>
        </>
    );
}