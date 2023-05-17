import './scss/style.scss';
import ContestNavigationBar from "./ContestNavigationBar.js";
import {useContext} from "react";
import {ContestDataContext} from '../../pages/contest'

export default function NavigationBar({inContest}) {
    let contestData = useContext(ContestDataContext)
    console.log(contestData)
    return inContest ? <ContestNavigationBar key={1} contestData={contestData} data={{
        startAt : "2023-05-11T14:15:00",
        endAt : "2023-05-15T14:20:00"
    }}/> : true
}
