import mainStyle from '../../pages/contest/scss/body.style.module.scss'
import polygonImg from '../../pages/contest/assets/images/polygon.svg'
import plusImg from '../../pages/contest/assets/images/plus.svg'
import roundImg from '../../pages/contest/assets/images/round.svg'
export default function Body({children}){
    return (
        <>
            <div className={mainStyle.mainContainer}>
                <div className={mainStyle.anim_icon_poly}>
                    <img alt={mainStyle.poly_icon_anim}  src={polygonImg} className={mainStyle.animIconPoly_st}/>
                </div>
                <div className={mainStyle.anim_icon_plus}>
                    <img alt={mainStyle.plus_icon_anim} src={plusImg} className={mainStyle.animIconPlus}/>
                </div>
                <div className={mainStyle.anim_icon_round}>
                    <img alt={mainStyle.round_icon_anim} src={roundImg} className={mainStyle.animIconRound}/>
                </div>
                {children}
            </div>
        </>
    )
}