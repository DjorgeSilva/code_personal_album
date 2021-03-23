import React, {useEffect, useState} from 'react';

const Title = () => {

  useEffect(() => {
    const handleScroll = () => {

       let  show = window.scrollY > 0

        if (show) {
            document.querySelector(".title").style.background = "#E32B2B";
            document.querySelector(".title").style.boxShadow = "1px 2px 1px #ffffff";

        } else {
            document.querySelector(".title").style.background = "transparent";
            document.querySelector(".title").style.boxShadow = "none";

        }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
}, [])
// nav transparente quando no topo

  return (
    <div className="title">
      <h1>Seu Álbum Pessoal</h1>
    </div>
  )
}

export default Title;