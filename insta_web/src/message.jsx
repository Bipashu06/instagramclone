import './message.css'
import User from './follwers'
import vasu_pic from './assets/vasu_pic.jpg'
export default function Message({msg_txt, self_message}){
    return(
        <div className="message-container">
            <div className="message">
                {msg_txt}
            </div>
            {!self_message && (
                <User isBorder={false} Width={30} image={vasu_pic}></User>
            )}
        </div>
    )
}
Message.defaultProps = {
    msg_txt: 'Hello', 
    self_message: true,
}