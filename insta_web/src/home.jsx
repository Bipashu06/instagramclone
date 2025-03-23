import './home.css'
import Navbar from './Navbar'
import User from './follwers'
import Post from './post'
import vasu_pic from './assets/vasu_pic.jpg'
import FetchUser from './fetchUser'
import MobileBottomNav from './mobilebottomnav'
import { useState, useEffect } from 'react'
export default function Home(){
    const [currentindex, setCurrentindex] = useState(0);
    const [displayNavtext, setDisplayNavText] = useState(true);
    const [isMultipleAccount, setIsMultipleAccount] = useState(true);
    const users = FetchUser();

    const gap = 18;
    const accountName = "_im_alok77";
    const sirName = "Avi";

    const suggestions_name = ["riya_231", "queen_angel", "priya_sharma"
        ,"its_siya_342", "neha_queen_5"
    ];

    const suggestions_sirname = ["Riya", "Queen", "Priya"
        ,"Siya", "Neha"
    ];

    const user_names = ["_im_vasu", "_im__alok77", "im_mr_yunus",
        "_im_ansh7", "vikz7", "devil_ff", "abs_gaming", "leomessi", "leomessi",
        , "vikz7", "devil_ff", "abs_gaming", "leomessi", "leomessi",
        
   ]
    const translateAmount = (74 * user_names.length + (user_names.length-1) * gap) / (74 + gap);

    function nextSlide(){
        setCurrentindex((prev) => (prev + 1));
        console.log(currentindex);
    }
    function prevSlide(){
        setCurrentindex((prev) => (prev - 1));
    }

    useEffect(() => {
        function checkWidth(){
            setDisplayNavText(window.innerWidth > 1193)
            
        }
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    })

    return(
        <>

            <div className="main_page">
            <MobileBottomNav />
            <Navbar textTobeShown = {displayNavtext} 
             Width={!displayNavtext ? 'max-content' : '100%'}
            />
            <div className="row">
                <div className="col_1">
                    <div className="profiles-container">
                    {currentindex > 0 && (
                    <button id='prev' onClick={prevSlide}>&#10094;</button>
                    )
                    }
                    {(currentindex < user_names.length / 7) &&  (
                    <button id='next' onClick={nextSlide}>&#10095;</button>
                    )
                    }
                    <div className="profiles" style={{transform: `translate(-${14 * currentindex}%)`}}>
                        {user_names.map((user_name, index) => {
                            return(
                                <User name={user_name} image={vasu_pic} key={index} Height={74} Width={74}/>
                            )
                        })}
                    </div>
                    </div>
                    <Post {...users[0]} />
                    <Post {...users[1]} />
                    <Post {...users[2]} />
                </div>
                <div className="col_2">
                    <div className="col2_user_profile" style={{marginTop: '0px'}}>
                        <div className="col2_user_pic_name">
                            <User image={vasu_pic} Height={44} Width={44} isBorder={false}/>
                            <p>
                                <span id="account_name">{accountName}</span>
                                <br />
                                {sirName}
                            </p>
                            
                        </div>
                        {isMultipleAccount &&
                            (
                                <a href="#" id="switch_btn">Switch</a>
                            )
                        }
                    </div>
                    <div className="suggestion-container">
                        <div className="suggested">
                            <p>Suggested for you</p>
                            <a href="#">See All</a>
                        </div>
                        <div className="suggestions">
                            {suggestions_name.map((name, index) => {
                                return(
                                    <div className="col2_user_profile">
                                        <div className="col2_user_pic_name">
                                            <User image={vasu_pic} Height={44} Width={44} isBorder={false}></User>
                                                <p>
                                            <span id="account_name">{name}</span>
                                            <br />
                                            {suggestions_sirname[index]}
                                                </p>
                                        </div>
                                        {isMultipleAccount &&
                                        (
                                            <a href="#" id="switch_btn">Follow</a>
                                        )
                                        }
                                    </div>
                            )
                            })}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}