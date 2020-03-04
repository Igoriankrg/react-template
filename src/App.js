import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/main/Main';
import First from './components/first/First';
import Second from './components/second/Second';

function App() {
	return (
		<>
			<Router>
				<Header/>
				<main>
					<Switch>
						<Route path="/" exact component={Main}/>
						<Route path="/first" component={First}/>
						<Route path="/second" component={Second}/>
					</Switch>
				</main>
				<Footer/>
			</Router>
		</>
	);
}

export default App;
