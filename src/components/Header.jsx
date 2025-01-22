import React, {useState} from 'react';
import flagURL from '../assets/flag.png';

const Header = () => {
  const [mode, setMode] = useState("Dark Mode");
  const [modeIcon, setModeIcon] = useState(<i class="fa-regular fa-moon"></i>);

  const toggleMode = () => {
    if(mode == "Dark Mode"){
      setMode("Light Mode"),
      setModeIcon(<i class="fa-regular fa-sun"></i>)
    }
    else{
      setMode("Dark Mode"),
      setModeIcon(<i class="fa-regular fa-moon"></i>)
    }
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <a href="/">
          <img src={flagURL} />
          <span>Country Flags</span>
        </a>
      </div>
      <button className="header-mode" onClick={() => toggleMode()}>
        {modeIcon}
        &nbsp; {mode}                               
      </button>
    </header>
  )
}

export default Header