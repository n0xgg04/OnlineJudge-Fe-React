import styles from './scss/style.404.module.scss'
import logo from '../../assets/images/logo.png'
import image404 from './assets/images/404.svg'
import svgRocket from './assets/images/rocket.svg'
import svgEarth from './assets/images/earth.svg'
import svgMoon from './assets/images/moon.svg'
import svgAstronout from './assets/images/astronaut.svg'
import {Link} from 'react-router-dom'

export default function NotFoundPage(){
    return (
        <>
            <div className={styles.all_page}>
                <div className={styles.bg_purple}>
                    <div className={styles.stars}>
                        <div className={styles.custom_navbar}>
                            <div className={styles.brand_logo}>
                                <img alt="logo" src={logo} width="80px"/>
                            </div>
                            <div className={styles.navbar_links}>
                            </div>
                        </div>
                        <div className={styles.central_body}>
                            <img alt="i" className={styles.image_404} src={image404} width="300px"/>
                                <Link href="" className={styles.btn_go_home} onClick={(e) => {
                                    e.preventDefault();

                                }}>Về trang chủ</Link>
                        </div>
                        <div className={styles.objects}>
                            <img alt="rocketImage" className={styles.object_rocket} src={svgRocket} width="40px"/>
                                <div className={styles.earth_moon}>
                                    <img alt="i" className={styles.object_earth} src={svgEarth} width="100px"/>
                                        <img alt="i" className={styles.object_moon} src={svgMoon} width="80px"/>
                                </div>
                                <div className={styles.box_astronaut}>
                                    <img alt="i" className={styles.object_astronaut} src={svgAstronout}
                                         width="140px"/>
                                </div>
                        </div>
                        <div className={styles.glowing_stars}>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}