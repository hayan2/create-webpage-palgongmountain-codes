import '../App.css'
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import palgongImg from '../image/palgong.jpg'
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VolcanoIcon from '@mui/icons-material/Volcano';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import UpdateIcon from '@mui/icons-material/Update';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HistoryIcon from '@mui/icons-material/History';
import HikingIcon from '@mui/icons-material/Hiking';

function Detail() {


	const [defineOpen, setDefineOpen] = useState(true);
	const [originOpen, setOriginOpen] = useState(true);
	const [openedOpen, setOpenedOpen] = useState(true);
	const [naturalOpen, setNaturalOpen] = useState(true);
	const [historyOpen, setHistoryOpen] = useState(true);
	const [stoneOpen, setStoneOpen] = useState(true);

	const [open, setOpen] = React.useState(true);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.01,
				ease: [0, 0.71, 0.2, 1.01]
			}} >
			<div style={{ fontFamily: "Noto Sans KR" }}>
				<div className="contents-container">
					<div className="contents-detail-snb">
						<div className="snb-list">
							<List
								sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
								component="nav"
								aria-labelledby="nested-list-subheader"
								subheader={
									<ListSubheader component="div" id="nested-list-subheader">
										목차
									</ListSubheader>
								}
							>
								<ListItemButton href="#define" >
									<ListItemIcon>
										<BorderColorIcon />
									</ListItemIcon>
									<ListItemText primary="정의" />
								</ListItemButton>
								<ListItemButton href="#opened">
									<ListItemIcon>
										<OpenInNewIcon />
									</ListItemIcon>
									<ListItemText primary="개설" />
								</ListItemButton>
								<ListItemButton onClick={handleClick} href="#origin">
									<ListItemIcon>
										<UpdateIcon />
									</ListItemIcon>
									<ListItemText primary="명칭 유래" />
								</ListItemButton>
								<ListItemButton onClick={handleClick} href="#natural">
									<ListItemIcon>
										<VolcanoIcon />
									</ListItemIcon>
									<ListItemText primary="자연환경" />
								</ListItemButton>
								<ListItemButton onClick={handleClick} href="#history">
									<ListItemIcon>
										<HistoryIcon />
									</ListItemIcon>
									<ListItemText primary="역사" />
								</ListItemButton>
								<ListItemButton onClick={handleClick} href="#stone">
									<ListItemIcon>
										<HikingIcon />
									</ListItemIcon>
									<ListItemText primary="갓바위" />
								</ListItemButton>
								<ListItemButton onClick={scrollToTop}>
									<ListItemIcon>
										<ArrowDropUpIcon />
										<PanToolAltIcon />
									</ListItemIcon>
									<ListItemText primary=" " />
								</ListItemButton>
							</List>
						</div>
					</div>

					<div className='contents-detail-contents'>
						<hr></hr>
						<div className="detail-section">
							<div className="detail-meta">
								<div className="meta-image-wrap">
									<img src={palgongImg}></img>
									<div className="meta-caption" style={{ fontSize: "13px" }}>
										▴ 팔공산임
									</div>
								</div>

								<div className="meta-contents-wrap">
									<div className='meta-head'>
										<div className="category-wrap">
											<Button variant="primary" size="sm" style={{ marginRight: "0.4rem" }}>
												<a href="https://encykorea.aks.ac.kr/Article/E0032729">
													신녕면
												</a>
											</Button>
											<Button variant="secondary" size="sm">
												<a href="https://efw.nfm.go.kr/service/book/text/107?groupId=1&refer_id=125">
													부계면
												</a>
											</Button>

										</div>
										<div className="meta-title">
											대구광역시 동구와 경상북도 영천시 신녕면 및 군위군 부계면, 칠곡군, 경산시에 걸쳐 있는 산.
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr></hr>

						<div className="detail-section">
							<div className="section-head">
								<div className='section-title'>
									<Button
										onClick={() => setDefineOpen(!defineOpen)}
										aria-controls="example-fade-text"
										aria-expanded={defineOpen}
										style={{
											color: "black",
											background: "white",
											borderColor: "lightgray",
										}}
									>
										<VisibilityIcon />
									</Button>
									<a id="define">&nbsp;&nbsp;정의</a>
								</div>
							</div>
							<div className="section-body">
								<div className="text-detail">
									<Fade in={defineOpen}>
										<div>
											대구광역시 동구와 경상북도 영천시 신녕면 및 군위군 부계면, 칠곡군, 경산시에 걸쳐 있는 산.
										</div>
									</Fade>

								</div>
							</div>
						</div>
						<hr></hr>

						<div className="detail-section">
							<div className="section-head">
								<div className='section-title'>
									<Button
										onClick={() => setOpenedOpen(!openedOpen)}
										aria-controls="example-fade-text"
										aria-expanded={openedOpen}
										style={{
											color: "black",
											background: "white",
											borderColor: "lightgray",
										}}
									>
										<VisibilityIcon />
									</Button>
									<a id="opened">&nbsp;&nbsp;개설</a>
								</div>
							</div>
							<div className="section-body">
								<div className="text-detail">
									<Fade in={openedOpen}>
										<div>
											팔공산(1,192.3m)은 태백산맥의 보현산(普賢山, 1,124m)에서 서남쪽으로 연결된 산이다.
											최고봉인 비로봉을 중심으로 동봉(東峰)과 서봉(西峰)이 양 날개를 펴고 있는 모습으로 솟아 있다.
											팔공산을 중심으로 대구광역시와 경상북도의 경계에 형성된 환상(環狀)의 산지는 이른바 팔공산맥이라고 하는데,
											이것은 대구분지의 북부를 병풍처럼 가리고 있다.<br></br><br></br>

											산맥은 남동쪽의 초례봉(醮禮峰, 648m)에서 시작하여 환성산(環城山, 811m)·인봉(印峰, 887m)·
											팔공산을 거쳐 북서부의 가산(架山, 902m)에 이른다. 인봉에서 가산까지는 팔공산맥의 주형으로 길이가 약 20㎞이다.
										</div>
									</Fade>

								</div>
							</div>
						</div>
						<hr></hr>
						<div className="detail-section">
							<div className="section-head">
								<div className='section-title'>
									<Button
										onClick={() => setOriginOpen(!originOpen)}
										aria-controls="example-fade-text"
										aria-expanded={originOpen}
										style={{
											color: "black",
											background: "white",
											borderColor: "lightgray",
										}}
									>
										<VisibilityIcon />
									</Button>
									<a id="origin">&nbsp;&nbsp;명칭 유래</a>
								</div>
							</div>
							<div className="section-body">
								<div className="text-detail">
									<Fade in={originOpen}>
										<div>
											팔공산의 옛 이름은 공산·부악(父岳)이었고, 『신증동국여지승람(新增東國輿地勝覽)』에는 “중악(中岳)에 비겨 중사(中祠)하였다.”라고 기록되어 있다.<br></br><br></br>

											후삼국시대 견훤(甄萱)이 서라벌을 공략할 때에 고려 태조가 5,000명의 군사를 거느리고 후백제군을 정벌하러 나섰다가 공산(公山) 동수(桐藪)에서
											견훤을 만나 포위를 당하였다. 그 때 신숭겸(申崇謙)이 태조로 가장하여 수레를 타고 적진에 뛰어들어 전사함으로써 태조가 겨우 목숨을 구하였다고 한다.
											당시에 신숭겸과 김락(金樂) 등 8명의 장수가 모두 전사하여 팔공산이라 부르게 되었다고 한다. 이외에도 팔공산 유래에 대해서는 중국 안휘성(安徽省)의
											팔공산 지명 차용설 등 몇 가지 설이 있다.
										</div>
									</Fade>

								</div>
							</div>
						</div>
						<hr></hr>
						<div className="detail-section">
							<div className="section-head">
								<div className='section-title'>
									<Button
										onClick={() => setNaturalOpen(!naturalOpen)}
										aria-controls="example-fade-text"
										aria-expanded={naturalOpen}
										style={{
											color: "black",
											background: "white",
											borderColor: "lightgray",
										}}
									>
										<VisibilityIcon />
									</Button>
									<a id="natural">&nbsp;&nbsp;자연환경</a>
								</div>
							</div>
							<div className="section-body">
								<div className="text-detail">
									<Fade in={naturalOpen} >
										<div>
											팔공산은 전체 배열이 주변의 구릉지와는 달리 종상의 산형을 이루고 있다.
											지질은 주변에 넓게 분포한 경상누층군(慶尙累層郡)에 불국사화강암(佛國寺花岡岩)이
											관입하여 돔(dome) 지형을 형성하였다. 그 뒤 침식작용으로 상부의 퇴적암은 제거되고 그 밑의
											화강암이 노출되어 현재와 같은 모습을 띠게 되었다. <br></br><br></br>

											팔공산의 북쪽에는 위천(渭川)의 상류인 남천(南川)과 여러 계류(溪流)가 흐르고,
											동쪽에는 한천(漢川)과 신령천(新寧川) 등이 흐른다. 산의 남쪽은 완만하여 응해산(鷹蟹山, 526m)·
											응봉(456m) 등의 구릉성 산지가 솟아 있고, 그 사이사이에 하천이 남류하여 동화천(桐華川)에 모인 후,
											금호강(琴湖江)으로 흘러든다.<br></br><br></br>

											팔공산에는 조류 24종, 포유류 14종, 식물 118과 464속 858종 4아종 193변종 25품종이 분포하는 것으로 조사되어 있다.
										</div>
									</Fade>
								</div>
							</div>

						</div>
						<hr></hr>

						<div className="detail-section">
							<div className="section-head">
								<div className='section-title'>
									<Button
										onClick={() => setHistoryOpen(!historyOpen)}
										aria-controls="example-fade-text"
										aria-expanded={historyOpen}
										style={{
											color: "black",
											background: "white",
											borderColor: "lightgray",
										}}
									>
										<VisibilityIcon />
									</Button>
									<a id="history">&nbsp;&nbsp;역사</a>
								</div>
							</div>
							<div className="section-body">
								<div className="text-detail">
									<Fade in={historyOpen} >
										<div>
											《삼국사기》에 따르면 팔공산은 신라 오악 중 중악(中岳)[3]으로서 국가 차원에서 숭배되어 온 영산(靈山)이었다.	<br></br><br></br>

											김유신 장군이 통일 구상을 하면서 수행했던 곳이며, 고려를 세운 태조가 견훤과 전투를 벌인 곳이기도 하다.
											견훤이 신라를 공격할 때 태조가 5,000명의 군사를 거느리고 신라를 도와주러 출병했는데 공산(公山) 동수(桐藪)에서 견훤을 만나 포위를 당하였다.
											그 때 신숭겸(申崇謙)이 태조로 가장하여 수레를 타고 적진에 뛰어들어 전사함으로써 태조가 겨우 목숨을 구하였다고 한다. 당시에 신숭겸과 김낙(金樂)
											등 8명의 장수가 모두 전사하여 팔공산이라 부르게 되었다고 한다.<br></br><br></br>

											신라시대부터 불교 문화의 중심지로 자리잡았다. 고려 시대에는 초조대장경이 팔공산 부인사(符仁寺)에 봉안되기도 했다.
											또한 홍진국사 혜영(弘眞國師 惠永) · 자정국사 자안(慈靜國師 子安)은 동화사(桐華寺) 주지로서 전국의 불교를 관장하는
											오교도승통(五敎都僧統)이 되기도 하였으며,[4] 보조국사 지눌이 팔공산 거조사(居組寺)에서 정혜결사(定慧結社)를 조직하기도 했다.
											불교가 탄압받던 조선 시대에도 파계사(把溪寺)가 영조의 장수를 비는 원찰로서 조선 왕실의 보호를 받는 등 그 법등은 계속 밝혀져 왔다.
											이같은 전통으로 현재도 수십 개소의 사찰이 자리잡고 있으면서 불교 문화의 꽃을 피우고 있다.
										</div>
									</Fade>
								</div>
							</div>

						</div>
						<hr></hr>

						<div className="detail-section">
							<div className="section-head">
								<div className='section-title'>
									<Button
										onClick={() => setStoneOpen(!stoneOpen)}
										aria-controls="example-fade-text"
										aria-expanded={stoneOpen}
										style={{
											color: "black",
											background: "white",
											borderColor: "lightgray",
										}}
									>
										<VisibilityIcon />
									</Button>
									<a id="stone">&nbsp;&nbsp;갓바위</a>
								</div>
							</div>
							<div className="section-body">
								<div className="text-detail">
									<Fade in={stoneOpen} >
										<div>
											경산 팔공산 관봉 석조여래좌상(慶山八公山冠峰石造如來坐像),
											대중적으로 팔공산 갓바위는 경상북도 경산시 와촌면 갓바위로81길 176-64(대한리 산44)에 위치한 석조 불상으로,
											불상 머리 위에 넓적한 바위를 갓처럼 얹은 모습이 특징적이라 갓바위라고 부른다. 팔공산을 이루는 봉우리 중
											하나인 관봉(冠峰, 850m)[1]의 정상부에 위치하고 있다. 높이는 5.48m, 재질은 화강암이며,[2] 수인은 항마촉지인을 하였다.
											석굴암 본존불상처럼 후덕하고 무뚝뚝한 이미지다. 갓은 본디 팔각형이었던 것으로 추정되나, 오랜 세월에 걸쳐 훼손되는 바람에 지금의 모양이 되었다.
										</div>
									</Fade>
								</div>
							</div>

						</div>
						<hr></hr>
					</div>
				</div>
			</div >
		</motion.div>
	)
}

export default Detail