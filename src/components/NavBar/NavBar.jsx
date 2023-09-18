import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/Ai';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' },
        { id: 6, path: '*', name: 'Not Found' }
    ];

    return (
        <nav className="text-black bg-gray-50 p-4">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open ? <AiOutlineMenu></AiOutlineMenu> : <AiOutlineClose></AiOutlineClose>
                }
                
            </div>
            <ul className={`md:flex duration-700 absolute md:static bg-gray-50 p-2 rounded-lg ms-2 ${open ? '-top-60' : 'top-12'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;