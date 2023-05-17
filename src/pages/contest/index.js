import { Helmet } from 'react-helmet';
import React,{useEffect, useState} from "react";
import axios from "axios";

import MainBox from "../../components/main-box"
import NavigationBar from '../../components/navigation/index.js'
import Body from '../../components/BodyPage'
import Loading from '../../components/loading'
import './scss/styles.scss'

import config from '../../config/index'

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
export default function ContestPage(){
    const [contestData, setContestData] = useState([]);

    //!Fetch contest data
    useEffect(() => {
        axios.get(`${config.api}/problems`)
            .then(response => {
                setContestData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[])


    console.log(contestData)
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
                <ContestDataContext.Provider value={contestData}>
                     <NavigationBar contestData={contestData} contestId={1} inContest={true}/>
                    {contestData.length === 0 && <Loading/>}
                     <MainBox contestData={contestData}>
                     </MainBox>
                </ContestDataContext.Provider>
            </Body>

        </>
    )
}