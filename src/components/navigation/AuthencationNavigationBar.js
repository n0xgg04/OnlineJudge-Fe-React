import React from 'react';
import { MdStars } from "react-icons/md";
import './scss/contestNavBar.scss'


export default function AuthencationNavigationBar() {
    return (
        <>
<div className="navBar">
                <div className="navBar-content">
                    <div className="navBar-info">
                        <img alt="avatar" className="navBar-info_avatar" src="https://hoang-phuc.com/thoi-trang/wp-content/uploads/2021/12/meme-cheems-1.jpg" />
                        <div className="navBar-info_user">
                            <div className="navBar-info_user--name">
                                <span>n0xgg04</span>
                            </div>
                            <div className="navBar-info_user--point">
                                <MdStars style={{
                                    color: "#84A2EEFF",
                                    textAlign: "center",
                                    fontSize: "0.9rem",
                                }}></MdStars>
                                <span>100</span>
                            </div>
                        </div>
                    </div>
                    <div className="navBar-button">

                    </div>
                </div>
            </div>
        </>
    );
}
