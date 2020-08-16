import React, {useState} from 'react'
import './hotstar.css'
import Slider from './Slider'

export default function Hotstar(){
    return(
        <div class = "main border">
            <div className="top-nav border" id="top-nav">
                
                <div className="a-container">
                    HOTSTAR
                  <a href="#home" class="active">Movies</a>
                  <a href="#news">TV Shows</a>
                  <a href="#contact">Web Series</a>
                  <img className="menu" src={require("./res/hb.jpg")}></img>
                  
                </div>
            </div>
            <div className="content border">
                <div className="advertise auto-scroll-left border">
                    <Slider slides = {images} autoPlay={3} names={movieNames}/>
                </div>
                <div className="view-by-category border">
                    <div className="category">
                        <h3>DC Comics</h3>
                        <div className="auto-scroll-left">
                            <img className="img2" src={require("./res/joker2.jfif")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/2.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/ww.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/sr.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/jl.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/am.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/joker2.jfif")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/2.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/ww.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/sr.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/jl.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/am.jpg")} alt="" srcset=""/>
                        </div>
                    </div>
                    <div className="category">
                        <h3>Marvel</h3>
                        <div className="auto-scroll-left">
                            <img className="img2" src={require("./res/im2.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/bw.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/av.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/iw.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/venom.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/bw.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/iw.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/av.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/im2.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/im2.jpg")} alt="" srcset=""/>
                        </div>
                    </div>
                    <div className="category">
                        <h3>DC Comics</h3>
                        <div className="auto-scroll-left">
                            <img className="img2" src={require("./res/joker2.jfif")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/2.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/ww.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/sr.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/jl.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/am.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/joker2.jfif")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/2.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/ww.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/sr.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/jl.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/am.jpg")} alt="" srcset=""/>
                        </div>
                    </div>
                    <div className="category">
                        <h3>Marvel</h3>
                        <div className="auto-scroll-left">
                            <img className="img2" src={require("./res/im2.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/bw.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/av.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/iw.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/venom.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/bw.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/iw.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/av.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/im2.jpg")} alt="" srcset=""/>
                            <img className="img2" src={require("./res/im2.jpg")} alt="" srcset=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const images = [
    "./res/im.png",
    "./res/joker.jpg",
    "./res/1.jpg",
]
const movieNames = [
    "Iron Man",
    "Joker",
    "The Dark Knight"
]