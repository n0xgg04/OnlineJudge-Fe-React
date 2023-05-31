import './scss/style.scss'
import {GrLinkNext} from "react-icons/gr";
import axios from "axios";
import React, {useRef} from "react";
import {Toaster} from "react-hot-toast";
import config from "../../config";
import socketIOClient from "socket.io-client";

const host = config.api

export default function BoxJoin({notify}){
    const socketRef = React.useRef();
    const isConnectedRef = React.useRef(false);
    React.useEffect(() => {
        socketRef.current = socketIOClient.connect(host)
        socketRef.current.on('connect', () => {
            isConnectedRef.current = true;
        });
    },[])

    const inputContestRef = useRef(null);
    const joinContest = () => {
        const contestId = inputContestRef.current.value;
        if (contestId === '') {
            notify("Vui lòng nhập mã cuộc thi");
        }else{
            axios.post(`${config.api}/api/contest/join`, {
                contestId: contestId
            },{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Specify the allowed headers
                }
            }).then(res => {
                if (res.data.status === 'success') {
                    //emit
                    socketRef.current.emit('clientJoiner', {
                        contestId: contestId,
                        token: localStorage.getItem('token')
                    })
                    localStorage.setItem('token', res.data.token)
                    window.location.href = '/contest/' + contestId;
                } else {
                    notify(res.data.message);
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
    return (
        <>
            <Toaster/>
        <div className="box-join-contest-overlay">
            <div className="box-join-contest fallIn">
                <div className="box-join-contest__title">
                    <h3>Nhập mã cuộc thi</h3>
                </div>
                <div className="box-join-contest__content">
                    <div className="box-join-contest__content__input">
                        <input ref={inputContestRef} type="text" placeholder="Nhập mã thi đấu"/>
                    </div>
                    <div className="box-join-contest__content__button">
                        <button onClick={joinContest}><GrLinkNext style={{
                            fontSize: "1rem",
                            color: "#fff",
                            fontWeight: "bold",
                        }}/></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}