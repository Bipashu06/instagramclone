import './Login.css'
import Mobiles from './mobilescreen'
import facebook_icon from './assets/facebook.png'
import playstore from './assets/get_on_playstore.png'
import microsoft from './assets/get_on_micro.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import vasu_pic from './assets/vasu_pic.jpg'
export default function Login(){
    const [signUpclicked, setSignUpClicked] = useState(false);
    const [user_name, setUser_name] = useState("_im__vasu");
    return(
        <>
       <div className="container">
            <Mobiles />
           
            <div className="form-container">
            {signUpclicked && (
                    <>
                    <div className="login_section" id='login_section_1'>
                        <h2 className="login_head">Instagram</h2>
                        <img src={vasu_pic} alt="" id='curved_image'/>
                        <Link to='/instagram' id="continue_as">Continue as {user_name}</Link>
                        <p id='not_user'>Not {user_name}? <a href="#" onClick={() => setSignUpClicked(!signUpclicked)}>Sign up</a></p>
                    </div>
                    </>)}
            {!signUpclicked && (<>
                    <form action="" className="login_section">
                    <h2 className="login_head">Instagram</h2>
                    <input type="text" placeholder='Phone number, username, or email'/>
                    <input type="password" placeholder='Password'/>
                    <input type="submit" value="Log in" className='login_btn'/>
                    <label id="or">OR</label>
                    <a href="#" id= "facebook_link"  onClick={() => setSignUpClicked(!signUpclicked)}>
                        <img src={facebook_icon} alt="" id='facebook_icon'/>
                        Log in with Facebook
                    </a>
                    <a href="#" id='forgot'>Forgot password?</a>
                </form>
                <div className="sign_up">
                    <p>Don't have an account? <a href="#" className='signup_btn' >Sign up</a></p>
                </div>
                <div className="get_app">
                    <p>Get the app.</p>
                    <div className="get_app_badges">
                        <img src={playstore} alt="" />
                        <img src={microsoft} alt="" />
                    </div>
                </div>
                </>)}
            </div>
       </div>
       <div className="footer">
            <div className="footer_links">
                <a href="#">Meta</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Job</a>
                <a href="#">Help</a>
                <a href="#">API</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Location</a>
                <a href="#">Instagram Lite</a>
                <a href="#">Threads</a>
                <a href="#">Contact Uploading & Non-Users</a>
                <a href="#">Meta Verified</a>
            </div>
            <div className="copyright_section">
                <select id="languages">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="chinese">Chinese</option>
                    <option value="japanese">Japanese</option>
                    <option value="hindi">Hindi</option>
                    <option value="arabic">Arabic</option>
                    <option value="russian">Russian</option>
                </select>
                <p>&copy; 2024 Instagram from Meta</p>
            </div>
       </div>
       </>
    )
}