import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Main from './Pages/Main'
import Advisor from './Pages/Advisor'
import ReSume from './Pages/Resume';
import Public from './Pages/Public'
const { PUBLIC_URL } = process.env;
// console.log(process.env)
console.log('ReSume', ReSume);

const App = () => (
	<BrowserRouter basename={PUBLIC_URL}>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path='/' component={Main}/> 
				<Route path="/Advisor" component={Advisor}/>
				<Route path="/Journals" component={Public}/>
				{/* <Route exact path='/'><Appbar pageComponent={<Main />}></Appbar></Route> */}
				{/* <Route path="/" component={Main} /> */}
				{/* <Route path="/projects" component={Projects} />
				<Route path="/stats" component={Stats} />
				<Route path="/contact" component={Contact} />
				<Route path="/resume" component={Resume} />
				<Route component={NotFound} status={404} /> */}
			</Switch>
		</Suspense>
  	</BrowserRouter>
		// <div className="App">
		// 	<Appbar/>
		// 	<Main/>
		// 	{/* <Intro/>
		// 	<Project/>
		// 	<Contact/>
		// 	<Footer/> */}
		// </div>
)

export default App;
