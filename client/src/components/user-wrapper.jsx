import React, {useState} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import TeamWrapper from './team-wrapper';

const UserWrapper = ({user}) => {
	return (
		<>
			<Card style={{width: '18rem'}}>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<div>Este es el usuario: {user.name}</div>
						{user.teams.map((team) => (
							<TeamWrapper team={team} />
						))}
					</ListGroup.Item>
				</ListGroup>
			</Card>
		</>
	);
};

export default UserWrapper;
