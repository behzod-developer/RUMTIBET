import React from 'react'
import about_image from '../../assets/About_Image.png'
import './About.css'
import MobileImage from '../../assets/Mobile_About.png'

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="parent">
                    <div className="child">
                        <img className='about-image' src={about_image} alt="" />
                    </div>
                    <div className="child child-about-text">
                        <span>о нашем походе</span>
                        <h2>Исследуйте все горные массивы мира вместе с нами</h2>
                        <p>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
                        <div>
                            <button className='about-btn'>Программа тура</button>
                        </div>
                    </div>
                    <div className="child">
                        <img className='mobile-image-about' src={MobileImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About