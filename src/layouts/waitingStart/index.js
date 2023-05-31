import wStart from './scss/style.module.scss'
import React from 'react'
import {ContestContext} from '../../pages/contest/'
import moment from "moment";
import socketIOClient from "socket.io-client";
import config from "../../config";
import toast from "react-hot-toast";
import {isEmpty} from "lodash";

const host = config.api

export default React.memo(function () {
    const ContestInfoData = React.useContext(ContestContext)
    const clockRef = React.useRef(null)
    const socketRef = React.useRef();
    const [joiner, setJoiner] = React.useState({
        all: [],
        new:[],
    })

    React.useEffect(() => {
        socketRef.current = socketIOClient.connect(host)
        socketRef.current.on('connect', () => {
            socketRef.current.emit('getJoinerList', {
                contestId: ContestInfoData.contestId,
                token: localStorage.getItem('token')
            })
            console.log('connected')
        });

        socketRef.current.on('serverSendJoinerList', list => {
            if (!isEmpty(list)){
                //!Check who is new
                let newJoiner = list.filter(item => !joiner.all.includes(item))
                if (newJoiner.length > 0){
                    toast.success(`${newJoiner[0].name} đã tham gia cuộc thi`,{
                        style: {
                            zIndex: 9999
                        }
                    })
                }
                setJoiner({
                    all: list,
                    new: newJoiner
                })
            }
        })

        socketRef.current.on('serverSendError', err => {
            toast.error(err,{
                style: {
                    zIndex: 9999
                }
            })
        })


        return () => {
            socketRef.current.disconnect();
        };
        // eslint-disable-next-line
    }, []);

    React.useEffect(() => {
        const startAt = moment(ContestInfoData.startAt)

        const updateCountdown = () => {
            const now = moment()
            const distance = startAt.diff(now)
            const duration = moment.duration(distance)
            if (distance < 0) {
                clearInterval(countDownInterval)
                clockRef.current.innerText = '00:00:00'
                // Refresh page
                window.location.reload()
            } else {
                let hours = (duration.hours() < 10 ? '0' : '') + duration.hours()
                let minutes = (duration.minutes() < 10 ? '0' : '') + duration.minutes()
                let seconds = (duration.seconds() < 10 ? '0' : '') + duration.seconds()
                // Set remaining time
                clockRef.current.innerText=`${hours}:${minutes}:${seconds}`
            }
        }

        // Initial update
        updateCountdown()

        // Update countdown every second
        const countDownInterval = setInterval(updateCountdown, 1000)

        return () => {
            clearInterval(countDownInterval)
        }
    }, [ContestInfoData.startAt])

    return (
        <>
        <div className={wStart.waitingToStart}>
            <div className={wStart.all}>
                <div className={wStart.title}>
                    <h2>Cuộc thi sẽ bắt đầu sau</h2>
                </div>
                <div className={wStart.clock}>
                    <span ref={clockRef} ></span>
                </div>
                <div className={wStart.joiner}>
                    {
                        joiner.all.map((item, index) => {
                            return (
                                <div key={index} className={wStart.joinerItem + (joiner.new.indexOf(item) !== -1 && " withFadeInAnimation")}>
                                    <img src={item.avatar} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={wStart.button}>
                    <button>Tham gia</button>
               </div>
            </div>
        </div>
        <div className={wStart.area}>
            <ul className={wStart.circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        </>
    )
})