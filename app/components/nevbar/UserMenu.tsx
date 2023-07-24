'use client';

import { useCallback, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Logo from "./Logo";
import Button from "../Button";
import MenuItem from "./MenuItem";

const UserMenu = () => {
    const [navBackground, setNavBackground] = useState(false);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);

    useEffect(() => {
        setButton(window.innerWidth > 960)
        setNavBackground(window.scrollY > 121)
    }, [])


    
    // window.addEventListener('resize', showButton);
    // window.addEventListener('scroll', changeBackground);

    return (
        <div className={`w-full ${navBackground ? 'bg-gradient-to-b from-cyan-700 to-blue-500' : 'bg-transparent'}`}>
            <div className=" flex flex-row justify-between items-center">
               <Logo />
            <div className="flex flex-row justify-center items-center">
                    <MenuItem label="posts" onClick={()=> {}}/>
                    <MenuItem label="my posts" onClick={()=> {}}/>
                    {button && <Button outline label="SIGN IN" onClick={() => {}} />}
            </div> 
            </div>
            
        </div>
    )
}

export default UserMenu;