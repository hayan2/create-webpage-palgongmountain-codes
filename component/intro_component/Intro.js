import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './intro.css'
import { useEffect } from 'react'
import Content from './Content'
import Footer from './Footer'
import IntroHead from './IntroHead'
import './Content.css'

function Intro() {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, []);

	return (
		<>
			<div>
				<IntroHead></IntroHead>
			</div>

			<div className="App">
				<div className="body-contents-container">
					<div data-aos="fade-right">
						<div className="content-component-container">
							<div className="left-contents">
								<div className="content-title">
									Github
								</div>
								<div className="content-contens">
									<a href="https://github.com/hayan2">
										https://github.com/hayan2
									</a>
								</div>
							</div>
						</div>
					</div>
					<div data-aos="fade-left">
						<div className="content-component-container">
							<div className="left-contents">
								<div className="content-title">
									Velog
								</div>
								<div className="content-contens">
									<a href="https://velog.io/@p3pwp3p">
										https://velog.io/@p3pwp3p
									</a>
								</div>
							</div>
						</div>
					</div>
					<div data-aos="fade-up">
						<div className="content-component-container">
							<div className="left-contents">
								<div className="content-title">
									E-mail
								</div>
								<div className="content-contens">
									uhayan2@gmail.com
								</div>
							</div>
						</div>
					</div>
					<div data-aos="zoom-in">
						<div className="content-component-container">
							<div className="left-contents">
								<div className="content-title">
									Phone
								</div>
								<div className="content-contens">
									010-4938-xxxx
								</div>
							</div>
						</div>
					</div>
					<div data-aos="fade-left">
						<div className="content-component-container">
							<div className="left-contents">
								<div className="content-title">
									Thank you!
								</div>

							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Intro;