import '../../pages/contest/scss/body.style.scss'
import polygonImg from '../../pages/contest/assets/images/polygon.svg'
import plusImg from '../../pages/contest/assets/images/plus.svg'
import roundImg from '../../pages/contest/assets/images/round.svg'
export default function Body({children}){
    return (
        <>
            <div className="main-container">
                <div className="anim-icon-poly">
                    <img alt="poly-icon-anim"  src={polygonImg} className="anim-icon-poly_st"/>
                </div>
                <div className="anim-icon-plus">
                    <img alt="plus-icon-anim" src={plusImg} className="anim-icon-plus_st"/>
                </div>
                <div className="anim-icon-round">
                    <img alt="round-icon-anim" src={roundImg} className="anim-icon-round_st"/>
                </div>
                {children}
            </div>
        </>
    )
}