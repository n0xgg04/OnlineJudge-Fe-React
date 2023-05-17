import React from 'react';
import { CiClock2 } from "react-icons/ci";
import { MdStars } from "react-icons/md";
import CountdownTimer from '../CountdownTimer/index'
import './scss/contestNavBar.scss'


export default function ContestNavigationBar({contestData,data}) {
    var endAt = data.endAt
    var startAt = data.startAt
    console.log(contestData)
    let stt = 0;
    console.log(contestData)
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
                        {
                            contestData?.map((problem) => {
                                return (
                                    <div key={problem.name} className={"navBar-content_button " + (stt++ === 0 && "actived_button ") + "problem_done"}>
                                        <span className="actived_button-text">{problem.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="navBar-clock">
                        <div className="navBar-clock_box">
                            <CiClock2 style={{
                                marginRight: "10px",
                                fontSize: "1.3rem",
                                color: "#c0c0c0"
                            }}>

                            </CiClock2>
                            <CountdownTimer startAt={startAt} endAt={endAt} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
