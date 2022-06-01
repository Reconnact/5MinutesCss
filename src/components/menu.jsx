import React from "react";
import '../index.css';

function Menu(){
    return (
        <div class="menu">
                <ul style={{marginTop: 0}}>
                    <li class="item" id="home">
                        <a href="/" class="btn"><i class="fa"></i>Home</a>
                    </li>
                    <li class="item" id="menu1">
                        <a href="#menu1" class="btn"><i class="fa"></i>Menu1</a>
                        <div class="smenu">
                            <a href="">Submenu</a>
                            <a href="">Submenu</a>
                            <a href="">Submenu</a>
                        </div>
                    </li>
                    <li class="item" id="menu2">
                        <a href="#menu2" class="btn"><i class="fa"></i>Menu2</a>
                        <div class="smenu">
                            <a href="">Submenu</a>
                            <a href="">Submenu</a>
                        </div>
                    </li>
                </ul>
            </div>
    )
}

export default Menu;