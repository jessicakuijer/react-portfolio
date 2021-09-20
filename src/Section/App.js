import React from 'react'

import Sidebar from './Sidebar'
import Intro from './Intro'
import About from './About'
import Services from './Services'
import Work from './Work'
import Blog from './Blog'
import Copyright from './Copyright'


function App() {
    
    return (
        <div>
            <Sidebar/>

            <div id="main-part">
		<div className="main-part-mobile">
			<i className="fas fa-bars"></i>
		</div>

            <Intro/>
            <About/>
            <Services/>
            <Work/>
            <Blog/>
            <Copyright/>
            </div>

        </div>

        
    )
}

export default App