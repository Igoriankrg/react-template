import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<h2>I AM NAVIGATION</h2>
			<ul>
				<Link to={"/"}>
					<li>Main</li>
				</Link>
				<Link to={"/first"}>
					<li>First</li>
				</Link>
				<Link to={"/second"}>
					<li>Second</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
