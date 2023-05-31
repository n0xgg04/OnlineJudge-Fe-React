import { Helmet } from 'react-helmet';
import React,{useEffect, useState} from "react";
import axios from "axios";

import MainBox from "../../components/main-box"
import NavigationBar from '../../components/navigation/index.js'
import Body from '../../layouts/BodyPage'
import Loading from '../../components/loading'
import WaitingToStart from '../../layouts/waitingStart/'
import './scss/styles.scss'
import { useParams } from 'react-router-dom';
import config from '../../config/index'
import ScrollBtn from "../../components/btnScrollToEditor";
import moment from "moment";

const ContestContext = React.createContext({

});
export const ContestDataContext = React.createContext(// 20230512193533
// http://localhost:3001/problems

    [
        {
            "name": "A",
            "id": 1,
            "data": {
                "problemName": "Covid đang tới",
                "maxScores": 100,
                "author": "admin"
            }
        },
        {
            "name": "B",
            "id": 2,
            "data": {
                "problemName": "Bài khó của anh Huy",
                "maxScores": 100,
                "author": "admin"
            }
        },
        {
            "name": "C",
            "id": 3,
            "data": {
                "problemName": "Phương Thảo và chiếc tàu lượn",
                "maxScores": 100,
                "author": "admin"
            }
        }
    ]);

//!Contest ID context

export default function ContestPage(){
    const [contestData, setContestData] = useState([]);
    const [contestStatus, setContestStatus] = useState({
        status: false,
        startAt : null,
        endAt: null,
    });

    // eslint-disable-next-line
    const [isLoading, setIsLoading] = useState(true);
    const {contestId} = useParams();
    const userToken = localStorage.getItem("token");
    let startAtRef = React.useRef(null);


    //!Fetch contest data
    useEffect(() => {
        window.addEventListener("load", function () {
            setIsLoading(false);
        })
        console.log(userToken)

        axios.post(`${config.api.replaceAll("3001","1234")}/api/contestInfo/${contestId}`,{
            token: userToken
        },{
            headers: {
                'Authorization' : 'Bearer ' + userToken,
            }
        })
            .then(response => {
                let proObj = JSON.parse(response.data?.problemList)
                let startAt = moment(response.data.startAt, 'YYYY-MM-DD HH:mm:ss').toDate();
                let endAt = moment(response.data.endAt, 'YYYY-MM-DD HH:mm:ss').toDate();
                if (startAt > new Date()) {
                    setContestStatus({
                        startAt : startAt,
                        endAt: endAt,
                        status: true,
                    });

                    startAtRef.current = startAt;
                    console.log("contest start at ", startAt)
                } else {
                    setContestStatus({
                        startAt : startAt,
                        endAt: endAt,
                        status: false,
                    })
                    setContestData(proObj)
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        return () => {
            window.removeEventListener("load", function () {
                setIsLoading(false);
            })
        }
    },[contestId,userToken])

    return (
        <>
            <Helmet>
                <title>ITPTIT Contest</title>
                <meta name="description" content="Contest"/>
                <meta charSet="UTF-8"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/logo-single.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/logo-single.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/logo-single.png"/>
                <meta name="viewport"
                                              content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
                <meta name="title" content="ITClub PTIT Hanoi"/>
                <meta name="description"
                                                      content="Câu lạc bộ học thuật thuộc Học viện Công nghệ Bưu chính Viễn thông"/>
                <meta name="keywords" content="ITPTIT,ITCLub,CodeIT"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title"
                                                                          content="ITClub PTIT Hanoi"/>
                <meta property="og:description"
                                                                              content="Câu lạc bộ học thuật thuộc Học viện Công nghệ Bưu chính Viễn thông"/>
                <meta property="og:image"
                      content="https://code.itptit.com/assets/images/club-logo.jpeg"/>
            </Helmet>
            <Body>
                <ContestContext.Provider value={{
                    contestId: contestId,
                    startAt : contestStatus.startAt,
                    endAt : contestStatus.endAt
                }}>

                {contestStatus.status ? <WaitingToStart /> :
                    <>
                        <ContestDataContext.Provider value={contestData}>
                            {contestData.length === 0 && <Loading/>}
                            {contestData['startAt']}
                            <div className="contestLayout">
                                {contestData.length !== 0 && (
                                    <>
                                         <NavigationBar contestData={contestData} contestId={1} inContest={true}/>
                                        {/* eslint-disable-next-line no-mixed-operators */}
                                         <MainBox contestData={contestData}>
                                         </MainBox>
                                         <ScrollBtn/>
                                    </>)}
                            </div>
                        </ContestDataContext.Provider>
                    </>
                }
                </ContestContext.Provider>
            </Body>
        </>
    )
}

export {ContestContext}
