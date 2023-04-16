let hotels = [
	{
		id: 0,
		image: "maxhotel.png",
		title: "팔공산맥섬석유스호스텔",
		link: "https://kr.trip.com/hotels/daegu-hotel-detail-13755797/palgongsan-youth-hostel/?checkin=2023-04-23&city=1287&module=list&link=button&from_page=list&adult=1&checkout=2023-04-24",
		address: "대한민국 대구광역시 갓바위로 223-35 (41008)",
		content: `대구(동구)에 위치한 팔공산맥섬석유스호스텔의 경우 차로 13분 거리에 동화사 등이 있습니다.`
	},
	{
		id: 1,
		image: "grandhotel.png",
		link: "https://kr.trip.com/hotels/daegu-hotel-detail-13750075/palgongsan-grand-motel/?checkin=2023-04-23&city=1287&module=list&link=button&from_page=list&adult=1&checkout=2023-04-24",
		title: "대구 팔공산 그랜드 무인텔",
		address: "대한민국 대구광역시 갓바위로 246-5 능성동 (41008)",
		content: `대구에 위치한 그랜드모텔은 에어컨과 무료 Wi-Fi가 완비된 객실을 제공합니다. `
	},
	{
		id: 2,
		image: "zzarahotel.png",
		link: "https://kr.trip.com/hotels/daegu-hotel-detail-4969125/zzara-hotel/?checkin=2023-04-23&city=1287&module=list&link=button&from_page=list&adult=1&checkout=2023-04-24",
		title: "짜라 호텔",
		address: "대한민국 대구광역시 동구 갓바위로 246-13 (701-530)",
		content: `짜라호텔은 대구를 찾는 여행객들에게 인기가 높습니다. `
	},
	{
		id: 3,
		title: "대구 팔공산 티포유",
		link: "https://kr.trip.com/hotels/daegu-hotel-detail-58051684/daegu-palgong-mountain-t4u/?checkin=2023-04-23&city=1287&module=list&link=button&from_page=list&adult=1&checkout=2023-04-24",
		image: "tforu.png",
		address: "대한민국 대구광역시 팔공산로185길 55-1",
		content: `대구 팔공산 티포유에서는 바쁜 일정 후 휴식시간을 보낼 수 있는 편안한 객실이 마련되어 있습니다.`
	},
	{
		id: 4,
		title: "대구 팔공산 골든타임",
		link: "https://kr.trip.com/hotels/daegu-hotel-detail-58048248/daegu-palgongsan-golden-time/?checkin=2023-04-23&city=1287&module=list&link=button&from_page=list&adult=1&checkout=2023-04-24",
		image: "goldentime.png",
		address: "대한민국 대구광역시 팔공산로185길 43 용수동 (41007)",
		content: `대구(동구)에 위치한 대구 팔공산 골든타임에 숙박하실 경우 차로 15분 정도 이동하면.. `
	},
	{
		id: 5,
		title: "팔공에밀리아 호텔",
		link: "https://www.google.com/travel/search?q=%ED%8C%94%EA%B3%B5%EC%82%B0%20%ED%98%B8%ED%85%94&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4920132%2C4924070%2C4936396%2C4965990%2C4968087%2C4972345%2C4977499%2C4977922%2C4986665%2C4986666%2C4991446%2C4998325&hl=ko-KR&gl=kr&cs=1&ssta=1&ts=CAESCAoCCAMKAggDGhwSGhIUCgcI5w8QBBgUEgcI5w8QBBgVGAEyAhAAKgcKBToDS1JX&qs=CAEyFENnc0k5dmZfamY3Ymt2YjBBUkFCOApCCwn2-7_h30rs9BgBQgsJ80UuMgsX26YYAUILCRqGy16jfML2GAE&ap=aAG6AQhvdmVydmlldw&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwiQwZXR_a3-AhUAAAAAHQAAAAAQBQ",
		image: "dontknow.png",
		address: "동구 팔공산로 1121, 대구광역시, 41007",
		content: `대구 인근 동구 지역에 있는 팔공에밀리아호텔의 경우 산 및 도립 공원에 위치해 있습니다.`
	},
	{
		id: 6,
		title: "팔공산온천호텔",
		link: "https://www.google.com/travel/search?q=%ED%8C%94%EA%B3%B5%EC%82%B0%20%ED%98%B8%ED%85%94&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4920132%2C4924070%2C4936396%2C4965990%2C4968087%2C4972345%2C4977499%2C4977922%2C4986665%2C4986666%2C4991446%2C4998325&hl=ko-KR&gl=kr&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaUgo0EjIyJTB4MzU2Njc2ZjYyN2MyYmI5ZDoweDU2ZGVkNTJjMTIyZWNkMTc6Ce2MlOqzteyCsBIaEhQKBwjnDxAEGBQSBwjnDxAEGBUYATICEAAqBwoFOgNLUlc&qs=CAEyJkNoZ0k4NHU1a2JQaHhlMm1BUm9MTDJjdk1YUmtlRFpzTkhFUUFROAZCCwn2-7_h30rs9BgBQgsJ80UuMgsX26YYAUILCcJBeGGtPefhGAE&ap=KigKEgnLyVgNF-tBQBFae5_SVRJgQBISCUwtT4UeCEJAEVp7n4KvF2BAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwjIpILfga7-AhUAAAAAHQAAAAAQZA",
		image: "spahotel.png",
		address: "대구광역시 동구 팔공산로185길 11",
		content: `팔공산 온천 관광호텔은 팔공산에서 아주 가까이에 자리하고 있어 팔공산 올레길과 갓바위 등을 둘러보기에 좋습니다.`
	},
	{
		id: 7,
		title: "제이비관광호텔",
		link: "https://www.google.com/travel/search?q=%ED%8C%94%EA%B3%B5%EC%82%B0%20%ED%98%B8%ED%85%94&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4920132%2C4924070%2C4936396%2C4965990%2C4968087%2C4972345%2C4977499%2C4977922%2C4986665%2C4986666%2C4991446%2C4998325&hl=ko-KR&gl=kr&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaVAo0EjIyJTB4MzU2Njc2ZjYyN2MyYmI5ZDoweDU2ZGVkNTJjMTIyZWNkMTc6Ce2MlOqzteyCsBIcEhQKBwjnDxAEGBQSBwjnDxAEGBUYATIECAAQACoHCgU6A0tSVw&qs=CAEyJ0Noa0l2TnlnZ29mRWs2OG9HZzB2Wnk4eE1YSXlObUl3T1cxNkVBRTgGQgsJ9vu_4d9K7PQYAUILCfNFLjILF9umGAFCCwnCQXhhrT3n4RgBSAA&ap=KigKEgnLyVgNF-tBQBFae5_SVRJgQBISCUwtT4UeCEJAEVp7n4KvF2BAMABoAQ&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwjIpILfga7-AhUAAAAAHQAAAAAQmwE",
		image: "jbhotel.png",
		address: "대구광역시 동구 율암로 162",
		content: `가성비가 좋지만 팔공산에서 거리가 조금 있는 호텔`
	},
	{
		id: 8,
		title: "Gout Stay",
		link: "https://www.google.com/travel/search?q=%ED%8C%94%EA%B3%B5%EC%82%B0%20%ED%98%B8%ED%85%94&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4920132%2C4924070%2C4936396%2C4965990%2C4968087%2C4972345%2C4977499%2C4977922%2C4986665%2C4986666%2C4991446%2C4998325&hl=ko-KR&gl=kr&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaVAo0EjIyJTB4MzU2Njc2ZjYyN2MyYmI5ZDoweDU2ZGVkNTJjMTIyZWNkMTc6Ce2MlOqzteyCsBIcEhQKBwjnDxAEGBQSBwjnDxAEGBUYATIECAAQACoHCgU6A0tSVw&qs=CAEyKENob1FyX1R5d01yVTRJbjdBUm9OTDJjdk1URnJhR0prZUhGMGFoQUM4BkILCfb7v-HfSuz0GAFCCwnzRS4yCxfbphgBQgsJwkF4Ya095-EYAUgA&ap=KigKEgkGxkyMP-tBQBGy2E3X9xFgQBISCbuqi-ZGCEJAEbLYTYdRF2BAMABoAboBCG92ZXJ2aWV3&ictx=1&sa=X",
		image: "coutstay.png",
		address: "아파트 전체",
		content: `관광, 레크리에이션, 식당, 교통편 측면에서 전반적으로 위치가 좋음`
	}
]


export default hotels