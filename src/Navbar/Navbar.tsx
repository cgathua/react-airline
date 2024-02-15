import { Fragment } from "react";
import { DesktopListItems } from './DesktopLiItems'
import { MobileListItems } from './MobileListItems'
import { useState } from "react"
import { LogoIconTsx } from "./LogoIcon";

function Navbar(): JSX.Element {
    const [isNavShowing, setisNavshowing] = useState(false);
    return (
        <Fragment>
            <header>
                <a href="#home" className="logo" aria-label="logo">
                    <LogoIconTsx />
                </a>
                <nav>
                    {DesktopListItems.length === 0 ? <p>No item found</p> : null}
                    <ul className="NavLinks">
                        {DesktopListItems.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
                    </ul>
                    <ul className={`NavBar2 ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                        {MobileListItems.map(elem => <li key={elem.id}><a href={elem.link}>{elem.title}</a></li>)}
                    </ul>
                    <button className="MenuBtn" onClick={() => setisNavshowing(!isNavShowing)} aria-label="menu" aria-haspopup="true" aria-expanded="false">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none"
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className="feather feather-menu">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </nav>
            </header>
        </Fragment>
    );
};

export default Navbar