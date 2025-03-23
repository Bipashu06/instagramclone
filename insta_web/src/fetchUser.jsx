import vasu_pic from './assets/vasu_pic.jpg'
import messi_reel from './assets/messi_reel.mp4'
export default function FetchUser(){
    const users = [
        {
            creator_pic: vasu_pic, 
            creator_name: "chico_lachowski",
            posted_time: '6h',
            location: "London, United Kingdom",
            photo: vasu_pic,
            number_of_likes:  2047,
            number_of_comments: 367,
            caption: "my first post."
        },
        {
            creator_pic: vasu_pic, 
            creator_name: "_im__vasu",
            posted_time: '2h',
            location: "London, United Kingdom",
            reel: messi_reel,
            number_of_likes:  2047,
            number_of_comments: 564,
            caption: "my first post."
        },
        {
            creator_pic: vasu_pic, 
            creator_name: "leomessi",
            posted_time: '2h',
            location: "London, United Kingdom",
            reel: messi_reel,
            number_of_likes:  2047642,
            number_of_comments: 43432,
            caption: "my first post."
        },
        {
        creator_pic: vasu_pic, 
        creator_name: "chico_lachowski",
        posted_time: '6h',
        location: "London, United Kingdom",
        photo: vasu_pic,
        number_of_likes:  2047,
        number_of_comments: 367,
        caption: "my first post."
    },
    {
        creator_pic: vasu_pic, 
        creator_name: "_im__vasu",
        posted_time: '2h',
        location: "London, United Kingdom",
        reel: messi_reel,
        number_of_likes:  2047,
        number_of_comments: 564,
        caption: "my first post."
    },
    {
        creator_pic: vasu_pic, 
        creator_name: "leomessi",
        posted_time: '2h',
        location: "London, United Kingdom",
        reel: messi_reel,
        number_of_likes:  2047642,
        number_of_comments: 43432,
        caption: "my first post."
    },
];
   return users;
}