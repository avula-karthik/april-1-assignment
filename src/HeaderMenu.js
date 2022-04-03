import axios from 'axios';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Registration from './Registration';
const HeaderMenu = () => {
    return (
        <div>
            <BrowserRouter>
                <Link className='btn btn-primary col-lg-5' to='/register'>
                    Register
                </Link>
                <Link className='btn btn-primary col-lg-6' to='/login'>
                    Login
                </Link>
                <Link className='btn btn-danger col-lg-1' to='/logout'>
                    Logout
                </Link>
                <Routes>
                    <Route path='/register' element={<Registration />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default HeaderMenu;
