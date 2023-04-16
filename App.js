import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Map from './component/Map';
import Detail from './component/Detail'
import Hotel from './component/Hotel'
import Intro from "./component/intro_component/Intro"
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";

function App() {
	let navigate = useNavigate();

	return (
		
		<>
			<div className="wrap-container">
				<Navbar bg="light" variant="light">
					<Container>
						<Navbar.Brand href="/" style={{
							fontSize: '30px'
						}}>Palgong Mountain</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link onClick={() => { navigate('/detail') }} style={{
								paddingLeft: '5em'
							}}>Detail</Nav.Link>
							<Nav.Link onClick={() => { navigate('/Hotel') }}>
								Hotel
							</Nav.Link>
							<Nav.Link onClick={() => { navigate('/map') }}>
								Map
							</Nav.Link>
						</Nav>
					</Container>
				</Navbar>

				<AnimatePresence>

					<Routes>
						<Route path='/' element={<Intro></Intro>}></Route>
						<Route path='/detail' element={<Detail></Detail>}></Route>
						<Route path='/map' element={<Map></Map>} />
						<Route path='/hotel' element={<Hotel />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</AnimatePresence>
			</div >

		</>

	);
}

function PageNotFound() {
	return (
		<div>
			<h2>404 Page not found</h2>
		</div>
	);
}

export default App;
