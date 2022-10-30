import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/*<Route path="/links" element={<Links />} />*/}
            {/*<Route path="/links/:id" element={<Link />} />*/}
        </Routes>
    );
}