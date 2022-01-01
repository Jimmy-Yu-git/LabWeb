import Header from './Header'
import Intro from './Professor'
import Project from './Project'
import Photo from './Photo'
import Footer from './Footer'
import Contact from './Contact'
import Appbar from './Appbar'
const Main = () => (
    	<div className="App">
			<Appbar/>
			<Header/>
			{/* <Intro/> */}
			<Photo/>
			<Project/>
			<Contact/>
			<Footer/>
		</div>
);


export default Main;