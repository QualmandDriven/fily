import React from 'react';
import Link from './Link';

import './NavLink.css';

function NavLink(props) {
    if (!props.image) {
        // const name = isNavLinkActive(props.to) ? props.name + "<span></span>" : props.name;
        const active = isNavLinkActive(props.to) ? <span className="navlink-active-span"></span> : "";
        const cssClass = isNavLinkActive(props.to) ? "navlink active" : "navlink";
        return (
            // <Link to={props.to} name={name} />
            <a className={cssClass} href={props.to}>{props.name} {active}</a>
        );
    }

    // With image in link
    return (
        <a className="navlink" href={props.to}><img className="navlink-image" src={props.image} alt="fily" /><span>{props.name}</span></a>
    );
}

function isNavLinkActive(link) {
    return window.location.href.toLowerCase().indexOf(link) > 0;
}
export default NavLink;