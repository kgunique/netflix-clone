import { useEffect, useState } from 'react'
import './nav.css'

function Nav() {
    const[show ,HandleShow]  = useState(false)

    const transitionNavbar = () => {
        if (window.scrollY >100 ) {
            HandleShow(true)
        }else{
            HandleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return ()=> window.removeEventListener("scroll",transitionNavbar)
    },[])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_content">
                <img className="nav_logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="netflix logo"
                />
                <img className="nav_avtar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="netflix avtar"
                />
            </div>

        </div>
    )
}

export default Nav
