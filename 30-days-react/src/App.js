import './App.css';
import Technologies from './components/Technologies/technologies';
import UserCard from './components/userCard/userCard';
import image from './images/frontend_technologies.png';
import Colors from './components/Colors/color';

function App() {
	return (
		<div className="App">
			{/* <Technologies /> */}
			<UserCard />
			<Colors />
		</div>
	);
}

export default App;
