import React, {	Component } from 'react';
import Button from "@material-ui/core/Button";

class App extends Component {
	render() {
		return ( <div className = "App" >
			<header className = "App-header" >
				<h1 className = "App-title" > Welcome to React < /h1>
			</header>
			<Button variant = "contained" color = "primary" >Hello World</Button>
			<p className = "App-intro" >
				To get started, edit < code > src / App.js < /code> and save to reload. 
			</p>
		</div>
		);
	}
}

export default App;