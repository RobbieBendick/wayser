import React from "react";
import "./Footer.css";


function Footer() {

return(
    <div>
        <section id="socials">
            <a className="social-media-icon" href="https://www.twitch.tv/wayser">
                <i className="fab fa-twitch fa-2x"></i>
            </a>
            <a className="social-media-icon" href="#">
                <i className="fab fa-steam fa-2x"></i>
            </a>
            <a className="social-media-icon" href="https://discordapp.com/users/125033567536283648">
                <i className="fab fa-discord fa-2x"></i>
            </a>
            <a className="social-media-icon" href="https://www.last.fm/user/ifffy_">
                <i className="fab fa-lastfm fa-2x"></i>
            </a>
        </section>
    </div>
    )
}


export default Footer;