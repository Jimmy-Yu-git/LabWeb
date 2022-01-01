import Header from './Header'
import Intro from './Professor'
import Project from './Project'
import Footer from './Footer'
import Contact from './Contact'
import Appbar from './Appbar'
import Resume from './Resume.js'
const Advisor = () => (
    	<div className="App">
			<Appbar/>
			{/* <Header/> */}
			<Intro/>
			{/* <Resume/> */}
			<Contact/>
			<Footer/>
		</div>
);


export default Advisor;