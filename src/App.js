import { useEffect, useState } from "react";
import { AppRouter, Header, Footer } from "./Path"

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  useEffect(() => {
    let scrollpos;
    const header = document.querySelector("header")
    const header_height = header.offsetHeight

    const add_class_on_scroll = () => header.classList.add("on")
    const remove_class_on_scroll = () => header.classList.remove("on")

    window.addEventListener("scroll", function() { 
      scrollpos = window.scrollY;

      if (scrollpos >= header_height) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
    })

    return () => {
      window.removeEventListener("scroll", function() { 
        scrollpos = window.scrollY;
  
        if (scrollpos >= header_height) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
      })
    }
  },[])

  return (
    <div>
      <Header isLoggedIn={isLoggedIn}/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
