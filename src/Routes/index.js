import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from '../Nav'
import { lazy, Suspense } from 'react'
import EditLink from "./EditLink";
import LoadingPage from "../Pages/LoadingPage";

const About = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const GenerateLink = lazy(() => import('./GenerateLink'));
const Link = lazy(() => import('./Link'))
const UserLinks = lazy(() => import('./UserLinks'))

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Nav />
                <Suspense fallback={<LoadingPage />}>
                    <Routes>
                        <Route path="/" element={<GenerateLink />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path='/sign-up' element={<Register />} />
                        <Route path="/my-links" element={<UserLinks />} />
                        <Route path="/link/:id" element={<Link />} />
                        <Route path="/link/:id/edit" element={<EditLink />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}