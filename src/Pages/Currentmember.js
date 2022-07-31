import Header from './Header'
import Members from './Member'
import Footer from './Footer'
import Contact from './Contact'
import Appbar from './Appbar'
import Resume from './Resume.js'
const Currentmember = () => (
    	<div className="App">
			<Appbar/>
			{/* <Header/> */}
			<Members/>
			{/* <Resume/> */}
			<Contact/>
			<Footer/>
		</div>
);


export default Currentmember;