import { useState } from "react"
import '../styles/themes.css'

function NavBar() {

    const [darkMode, setDarkMode] = useState(false);
    const ToggleMode = () => setDarkMode(!darkMode)

    return (
        <div className= 'body container' data-bs-theme= {darkMode ? 'light' : 'dark'}>
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container-fluid">
                    <a class=" logo navbar-brand" href="#">OL</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                            <button onClick={ToggleMode} className={darkMode ? 'btn-outline-dark': 'btn-outliine-light'}>{darkMode ? 'Light' : 'Dark'}</button>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}
export default NavBar