import Alumn from './Alumn'
import Footer from './Footer'
import Contact from './Contact'
import Appbar from './Appbar'
import Resume from './Resume.js'
const Alumns = () => (
    	<div className="App">
			<Appbar/>
			{/* <Header/> */}
			<Alumn/>
			{/* <Resume/> */}
			<Contact/>
			<Footer/>
		</div>
);


export default Alumns;