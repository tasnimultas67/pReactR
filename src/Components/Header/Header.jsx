import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='sticky top-0'>
            <nav className=' block md:flex lg:flex justify-center gap-5 items-center h-[3rem] bg-indigo-600 w-full text-white font-semibold uppercase text-sm shadow-md'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;