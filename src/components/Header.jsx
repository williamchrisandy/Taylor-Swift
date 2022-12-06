/*
Nama        : William Chrisandy
NIM         : 2301862941
Kelas       : LA03
Mata Kuliah : MOBI6012001 - Web Design
Nama Dosen  : D5022 - Ramot Lubis, S.T., M.Sc.
*/

import React, { useState, useEffect, useRef } from "react";
import {NavLink} from "react-router-dom";
import HomeIcon from "../image/home-icon.png"
import AboutIcon from "../image/info-icon.png"
import ContactIcon from "../image/contact-icon.png"
import ProductIcon from "../image/red-taylors-version.jfif"

export default function Header()
{
    const [height, setHeight] = useState(0);
    const ref = useRef(null);

    const spacing =
    () =>
    {
        return(
            <div style={{height: height + "px"}}></div>
        );
    }

    useEffect
    (
        () =>
        {
            setHeight(ref.current.clientHeight);
        }
    )

    return(
        <div>
            <header ref={ref}>
                <div className="brand-logo image-link">
                    <NavLink className="link" to="/"><h1>Taylor Swift</h1></NavLink>
                </div>
                <nav>
                    <ul>
                        <li className="main-page image-link">
                            <NavLink className="link" to="/">
                                <figure>
                                    <img src={HomeIcon} alt="Home Icon"/>
                                    <figcaption><h3>Home</h3></figcaption>
                                </figure>
                            </NavLink>
                        </li>
                        <li className="main-page image-link">
                            <NavLink className="link" to="/about">
                                <figure>
                                    <img src={AboutIcon} alt="About Icon"/>
                                    <figcaption><h3>About</h3></figcaption>
                                </figure>
                            </NavLink>
                        </li>
                        <li className="main-page image-link">
                            <NavLink className="link" to="/product">
                                <figure>
                                    <img src={ProductIcon} alt="Product Icon"/>
                                    <figcaption><h3>Product</h3></figcaption>
                                </figure>
                            </NavLink>
                        </li>
                        <li className="main-page image-link">
                            <NavLink className="link" to="/contact">
                                <figure>
                                    <img src={ContactIcon} alt="Contact Icon"/>
                                    <figcaption><h3>Contact</h3></figcaption>
                                </figure>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            {spacing()}
        </div>
    );
}