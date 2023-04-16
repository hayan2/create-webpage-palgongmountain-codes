import hotelImg0 from './hotel_images/goldentime.png'
import hotelImg1 from './hotel_images/grandhotel.png'
import hotelImg2 from './hotel_images/maxhotel.png'
import hotelImg3 from './hotel_images/tforu.png'
import hotelImg4 from './hotel_images/zzarahotel.png'
import hotelImg5 from './hotel_images/dontknow.png'
import hotelImg6 from './hotel_images/spahotel.png'
import hotelImg7 from './hotel_images/jbhotel.png'
import hotelImg8 from './hotel_images/coutstay.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import HomeIcon from '@mui/icons-material/Home';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './Hotel.css';
import { BorderColor } from '@mui/icons-material'
import { motion } from "framer-motion";


function Hotel() {
	let [hotels, setHotels] = useState(data);
	let [hotelImg, setHotelImg] = useState([hotelImg0, hotelImg1, hotelImg2, hotelImg3, hotelImg4, hotelImg5, hotelImg6, hotelImg7, hotelImg8])

	return (
		<motion.div
		initial={{ opacity: 0, scale: 0.5 }}
		animate={{ opacity: 1, scale: 1 }}
		transition={{
			duration: 0.8,
			delay: 0.1,
			ease: [0, 0.71, 0.2, 1.01]
		}}
		>
			<div className="card-container">
				<Container>
					<Row>
						{
							hotels.map((a, i) => {
								return (
									<HotelComponent hotels={hotels[i]} hotelImg={hotelImg[i]} key={a.id} i={i}></HotelComponent>
								)
							})
						}
					</Row>
				</Container>
			</div>
		</motion.div>

	)
}

function HotelComponent(props) {
	return (
		<Col className="card-content-container" style={{ marginBottom: "4rem" }}>
			<Card style={{ width: '18rem', color: 'black' }}>
				<Card.Img variant="top" src={props.hotelImg} />
				<Card.Body>
					<Card.Title style={{ fontSize: "21px" }}>{props.hotels.title}</Card.Title>
					<Card.Text>
						<HomeIcon></HomeIcon>&nbsp;&nbsp;{props.hotels.address}
					</Card.Text>
					<Card.Text>
						<ContentCopyIcon></ContentCopyIcon>&nbsp;&nbsp;{props.hotels.content}
					</Card.Text>
				</Card.Body>
				<Card.Body>
					<a href={props.hotels.link}>
						<Button variant="primary" style={{ color: "white" }}>예약하기</Button>
					</a>
				</Card.Body>
			</Card>
		</Col>

	)
}

export default Hotel
