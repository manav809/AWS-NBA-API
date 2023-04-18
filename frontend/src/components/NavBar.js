import './NavBar.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Documentation from './Documentation.js';
import InvalidURL from './InvalidURL.js';
import Button from '@mui/material/Button';

const linkStyle = {textDecoration: 'none'};
function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link style={linkStyle} to='/'> 
                            <Button variant="outlined"> Home </Button> 
                        </Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='about'>
                            <Button variant="outlined"> About </Button>
                        </Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='documentation'>
                            <Button variant="outlined"> Documentation </Button>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default function NavBar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about'element={<About/>}/>
                    <Route path='documentation' element={<Documentation/>}/>
                    <Route path='*' element={<InvalidURL/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}