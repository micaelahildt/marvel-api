import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserWrapper from './components/user-wrapper';
import Container from 'react-bootstrap/Container';
import {users} from './mock/user-team';

function App() {
	return (
		<Container>
			<div className="App">
				{users.map((user) => (
					<UserWrapper user={user} key={user.id} />
				))}
			</div>
		</Container>
	);
}

export default App;
