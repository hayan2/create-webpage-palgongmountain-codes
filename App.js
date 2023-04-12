import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Map from './component/Map';
import Detail from './component/Detail'
import Intro from "./component/intro_component/Intro"
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

function App() {

	return (
		<>
			<div className="wrap-container">
				<Navbar bg="light" variant="light">
					<Container>
						<Navbar.Brand href="/" style={{
							fontSize: '30px'
						}}>Palgong Mountain</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="/detail" style={{
								paddingLeft: '5em'
							}}>Detail</Nav.Link>
							<Nav.Link href="/map
							">
								Map
							</Nav.Link>
						</Nav>
					</Container>
				</Navbar>				
			

				<Routes>
					<Route path='/' element={<Intro></Intro>}></Route>
					<Route path='/detail' element={<Detail></Detail>}></Route>
					<Route path='/map' element={<Map></Map>} />
				</Routes>
			</div>

		</>

	);
}

export default App;
