import { Fragment } from "react";

function Navbar()  {
    let items = [
        { id: 0, link: '#home', title: 'Home'},
        { id: 1, link: '#benefits', title: 'Benefits'},
        { id: 2, link: '#testimonial', title: 'Testimonial'},
        { id: 3, link: '#faq', title: 'FAQs'},
        { id: 4, link: '#booking', title: 'Book Flight'}
    ]

    let ulLists = [
        { id: 5, link: '#home', title: 'Home'},
        { id: 6, link: '#benefits', title: 'Benefits'},
        { id: 7, link: '#testimonial', title: 'Testimonials'},
        { id: 8, link: '#faq', title: 'FAQs'},
        { id: 9, link: '#booking', title: 'Book Flight'}
    ]

    return (
        <Fragment>
            <header>
                <a href="#home" className="logo" aria-label="website logo">LOGO</a>
                <nav>
                    {items.length === 0 ? <p>No item found</p> : null}
                    <ul className="nav_links">
                        {items.map(item => <li key={item.id}><a aria-label="desktop nav" href={item.link}>{item.title}</a></li>)}   
                    </ul>
                    <ul className="navbar2">
                        {ulLists.map(elem => <li key={elem.id}><a aria-label="mobile nav" href={elem.link}>{elem.title}</a></li>)}
                    </ul>
                    <button className="menu-btn" aria-label="menu" aria-haspopup="true" aria-expanded="false">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#2A1415" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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