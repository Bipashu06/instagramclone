import './follwers.css'
export default function User({image, name, Width,
     isBorder, FontSize, FontColor}){
    const borderStyle = {
       background: 'conic-gradient(red, magenta, red, orange, red)'
    }
    return(
        <div className="user-profile">
            <div className="user_pic_container"
                 style={isBorder ? borderStyle : { border: 'none' }} 
                 >
            <img src={image} alt="" className='user_pic' style={{width: Width + 'px', height: Width + 'px'}}/>
            </div>
            {name != "" && (<p style={{fontSize: FontSize
                , color: FontColor
            }}>{name}</p>)}
        </div>
    )
}
User.defaultProps ={
    isBorder: true,
    Width: 74, 
    FontSize: '12px',
    FontColor: 'black',
}