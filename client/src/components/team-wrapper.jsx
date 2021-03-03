import React, {useState} from 'react';
import {Card, ListGroup, Button, Modal} from 'react-bootstrap';
import {teams} from '../mock/team-hero';
const TeamWrapper = ({team}) => {
	const [show, setShow] = useState(false);
	const [heros, setHeros] = useState(() => []);
	function toggleShow() {
		setShow((prevState) => !prevState);
	}
	function onSelectTeam(id) {
		toggleShow();
		setHeros(() => {
			return teams?.find((e) => e.id === id)?.heros || [];
		});
	}

	let card = (
		<Card style={{width: '18rem'}}>
			<ListGroup variant="flush">
				{heros.length > 0 ? (
					heros.map((hero) => {
						return (
							<>
								<ListGroup.Item> hp: {hero.hp}</ListGroup.Item>
								<ListGroup.Item> ataque: {hero.attack}</ListGroup.Item>
							</>
						);
					})
				) : (
					<ListGroup.Item>no tenes heroes!</ListGroup.Item>
				)}
			</ListGroup>
		</Card>
	);
	return (
		<>
			<Button variant="primary" onClick={() => onSelectTeam(team.id)}>
				Mira tu equipo {team.name}
			</Button>

			<Modal show={show} onHide={toggleShow}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>{card || 'no tenes ningun equipo :('}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={toggleShow}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default TeamWrapper;
