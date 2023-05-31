import React, {useContext, useEffect} from 'react';
import { CiClock2 } from "react-icons/ci";
import { MdStars } from "react-icons/md";
import CountdownTimer from '../CountdownTimer/index';
import styles from './scss/contestNavBar.module.scss';
import {FaListOl} from "react-icons/fa";
import {ContestDataContext,ContestContext} from '../../pages/contest'

export default React.memo(function () {
    let contestData = useContext(ContestDataContext)
    let contestInfoData = useContext(ContestContext)
    console.log("Contest info data " + JSON.stringify(contestInfoData))

    var endAt = contestInfoData.endAt;
    var startAt = contestInfoData.startAt;
    let stt = 0;
    useEffect(() => {
       console.log("NavBar is mounted or updated" + contestData)

        return () => {
            console.log("NavBar is unmounted")
        }

    },[contestData])
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbar_Content}>
                    <div className={styles.navbar_info}>
                        <img alt="avatar" className={styles.navbar_info_avatar} src="https://hoang-phuc.com/thoi-trang/wp-content/uploads/2021/12/meme-cheems-1.jpg" />
                        <div className={styles.navbar_info_user}>
                            <div className={styles.navbar_info_user_name}>
                                <span>n0xgg04</span>
                            </div>
                            <div className={styles.navbar_info_user_point}>
                                <MdStars
                                    style={{
                                        color: "#84A2EEFF",
                                        textAlign: "center",
                                        fontSize: "0.9rem",
                                    }}
                                />
                                <span>100</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navbar_button}>
                        <div
                            key={"all"}
                            className={`${styles.navbar_button_content_button} ${stt++ === 0 && styles.actived_button} ${styles.problem_done}`}
                        >
                            <span className={styles.actived_button_text} style={{
                                display: "grid",
                                placeItems: "center",
                            }}>
                                <FaListOl style={{ fontSize: "1.1rem", color: "#c0c0c0" }} />
                            </span>
                        </div>
                        {contestData?.map((problem) => (
                            <div
                                key={problem.name}
                                className={`${styles.navbar_button_content_button} ${stt++ === 0 && styles.actived_button} ${styles.problem_done}`}
                            >
                                <span className={styles.actived_button_text}>{problem.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.navbar_button_clock}>
                        <div className={styles.navbar_button_clock_box}>
                            <CiClock2
                                style={{
                                    marginRight: "10px",
                                    fontSize: "1.3rem",
                                    color: "#c0c0c0",
                                }}
                            />
                            <CountdownTimer startAt={startAt} endAt={endAt} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})
