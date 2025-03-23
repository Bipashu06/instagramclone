import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle} from '@fortawesome/free-solid-svg-icons';
import User from './follwers'
import { useState } from 'react';
export default function Post({creator_pic, 
    creator_name, posted_time, location, 
    photo, reel, number_of_likes, number_of_comments, 
     caption}){
    const [isReel, setIsReel] = useState(true);
    const [isPhoto, setIsPhoto] = useState(true);

    return(
    <div className="post-container">
        <div className="post-header">
            <div className="creator-profile">
                <User name="" image={creator_pic} Height={35} Width={35}/>
                <div className="creator-info-container">
                    <p>{creator_name} 
                        <FontAwesomeIcon icon={faCircle} style={{fontSize: '4px', color: 'gray', padding: '0px  6px 4px 6px'}}/>
                        <span id ="posted_time">{posted_time}</span>
                        <FontAwesomeIcon icon={faCircle} style={{fontSize: '4px', color: 'gray', padding: '0px  6px 4px 6px'}}/>
                        <a href="#" id='follow_btn'>Following</a>
                        <br />
                        <span id="location">{location}</span>
                    </p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
        </div>
        {isPhoto && !reel && photo &&(
            <div className="photo_post">
                <img src={photo} alt="" />
            </div>
        )}
       
        {isReel && !photo && reel &&(
             <div className="reel_post">
                <video src={reel} autoPlay muted loop playsInline></video>

             </div>
        )}
       <div className="like_comment_section">
            <div className="part_1">
            <svg aria-label="Notifications" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Notifications</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
            <svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            <svg aria-label="Share" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </div>
            <svg aria-label="Save" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
       </div>
       <div className="caption-container">
            <span id="number_of_likes">{number_of_likes} likes</span>
            <p id="caption">
                <span id="name_in_caption">{creator_name} </span> 
                {caption} 
            </p>
            <a href="#" id='view_comments_btn'>View all {number_of_comments} comments</a>
            <div className="add_comment">
                <input type="text" id="comment_input"/>
                <div className="emoji_post_container">
                    <a href="#" id='comment_post'>Post</a>
                    <svg aria-label="Emoji" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="13" role="img" viewBox="0 0 24 24" width="13"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                </div>
            </div>
       </div>
    </div>
    )
}
