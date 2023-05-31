import './scss/style.module.scss';
import ContestNavigationBar from "./ContestNavigationBar.js";



export default function NavigationBar({inContest}) {
    return inContest ? <ContestNavigationBar key={1}/> : true
}
