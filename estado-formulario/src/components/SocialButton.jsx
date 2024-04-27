import React from 'react'


const SocialButtons = (props) => {
    return (
        <div>
            <div className="footer-icon">
                <a href="#"><i className={props.facebook}></i></a>
                <a href="#"><i className={props.instagram}></i></a>
                <a href="#"><i className={props.linkedin}></i></a>
            </div>
        </div>
    )
}

export default SocialButtons;



// export default function SocialButton() {
//     return (
//         <div>
//             <div className="footer-icon">
//                 <a href="#"><i className="fa-brands fa-facebook"></i></a>
//                 <a href="#"><i className="fa-brands fa-instagram"></i></a>
//                 <a href="#"><i className="fa-brands fa-linkedin"></i></a>
//             </div>
//         </div>
//     )
// }
