import './NavBar.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import logo from './nba-logo.png'
import Home from './Home.js';
import About from './About.js';
import Documentation from './Documentation.js';
import InvalidURL from './InvalidURL.js';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const linkStyle = {textDecoration: 'none'};
function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <Box style={{display:"flex", alignItems:"flex-start"}} sx={{width:'100%', my:-1.4, ml:-1.2}}>
                    <Link to='/'>
                     <img src ={logo} style={{maxWidth:80, backgroundColor:"#245EAB",border:'1px solid black', borderRadius:'4px'}}/>
                     </Link>
                    </Box>
                    <li>
                        <Link style={linkStyle} to='/'> 
                            <Button variant="contained" startIcon={<HomeIcon />}> Home </Button> 
                        </Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='about'>
                            <Button variant="contained" startIcon={<InfoIcon />}> About </Button>
                        </Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='documentation'>
                            <Button variant="contained" startIcon={<DescriptionIcon />}> Documentation </Button>
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