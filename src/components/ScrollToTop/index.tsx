import { useEffect, useState } from "react";
import React from "react";
import styled, {css} from "styled-components"
import arrow from "../../public/arrowup.png"
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

export default function ScrollToTop(){

    const Scroll = styled.img`
    height: 60px;
    width: 60px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    `;

    const [ScrollButton, setScrollToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 200){
                setScrollToTop(true)
            }else {
                setScrollToTop(false)
            }
        })

    }, [])

    const scrollUp = () => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      };
    
    return <div>
        {ScrollButton && (

            <Scroll onClick={scrollUp} src={arrow}></Scroll>
        )}
    </div>
}