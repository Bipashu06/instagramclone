import './dmProfile.css'
import vasu_pic from './assets/vasu_pic.jpg'
import User from './follwers'
export default function DmProfile({reelsSent, 
    dmprofName, activeStatus, sent_time, imageWidth, 
    textWeight, textSize,
    setBg, onclick}){

    return(
        <div className="dm-profile-container" onClick = {onclick} style={{backgroundColor: setBg ? '#EFEFEF' : 'white'}}>
            <div className="name-and-pic">
                <div className="pic">
                    {activeStatus === 0 && (<div className="green-dot-container">
                    <label id = "green_dot"></label>
                    </div>)}
                <User image={vasu_pic}
                 Width={imageWidth} isBorder={false}
                />
                </div>
                <div className="name-and-status">
                    <p style={{fontSize: textSize, fontWeight: textWeight}}>{dmprofName}</p>
                    { !reelsSent && activeStatus !=0 && (
                        <p>Active {activeStatus}h ago</p>
                    )}
                    { activeStatus === 0 && (
                        <p >Active now</p>
                    )}
                    {reelsSent && activeStatus !=0 && (
                        <p id="sent_text">{dmprofName} Sent an attachment. <span>{sent_time}m</span></p>
                    )}
                </div>
                
                
            </div>
            { reelsSent && 
                    (<label htmlFor="" className="blue-dot">
                    </label>)
            }
        </div>
    )
}
DmProfile.defaultProps = {
    reelsSent: true,
    dmprofName: "Avi",
    activeStatus: 2,
    sent_time: 36,
    imageWidth: 60,
    setBg: false,
}