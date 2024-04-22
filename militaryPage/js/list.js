const info = [
  {
    title: '제1보병사단',
    latlng: new kakao.maps.LatLng(37.776383, 126.843730),
    image: './images/1.png',
    symbolicName: '전진부대',
    address: '경기도 파주시 광탄면 신산리',
    url: 'https://namu.wiki/w/%EC%A0%9C1%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제3보병사단',
    latlng: new kakao.maps.LatLng(38.243550, 127.414048),
    image: './images/2.PNG',
    symbolicName: '백골부대',
    address: '강원특별자치도 철원군',
    url: 'https://namu.wiki/w/%EC%A0%9C3%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제5보병사단',
    latlng: new kakao.maps.LatLng(38.023487, 127.109811),
    image: './images/3.PNG',
    symbolicName: '열쇠부대',
    address: '경기도 연천군 청산면 백의리',
    url: 'https://namu.wiki/w/%EC%A0%9C5%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제6보병사단',
    latlng: new kakao.maps.LatLng(38.242165, 127.250003),
    image: './images/4.PNG',
    symbolicName: '청성부대',
    address: '강원특별자치도 철원군',
    url: 'https://namu.wiki/w/%EC%A0%9C6%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제7보병사단',
    latlng: new kakao.maps.LatLng(38.138561, 127.685901),
    image: './images/5.PNG',
    symbolicName: '칠성부대',
    address: '강원특별자치도 화천군 화천읍',
    url: 'https://namu.wiki/w/%EC%A0%9C7%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제9보병사단',
    latlng: new kakao.maps.LatLng(37.702755, 126.796993),
    image: './images/6.PNG',
    symbolicName: '백마부대',
    address: '경기도 고양시 일산동구',
    url: 'https://namu.wiki/w/%EC%A0%9C9%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제12보병사단',
    latlng: new kakao.maps.LatLng(38.114501, 128.196289),
    image: './images/7.PNG',
    symbolicName: '을지부대',
    address: '강원특별자치도 인제군 북면 원통리',
    url: 'https://namu.wiki/w/%EC%A0%9C12%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제15보병사단',
    latlng: new kakao.maps.LatLng(38.054844, 127.525250),
    image: './images/8.PNG',
    symbolicName: '승리부대',
    address: '강원특별자치도 화천군 사내면 삼일리',
    url: 'https://namu.wiki/w/%EC%A0%9C15%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제17보병사단',
    latlng: new kakao.maps.LatLng(37.476609, 126.746114),
    image: './images/9.PNG',
    symbolicName: '번개부대',
    address: '인천광역시 부평구 일신동',
    url: 'https://namu.wiki/w/%EC%A0%9C17%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제21보병사단',
    latlng: new kakao.maps.LatLng(38.084144, 127.975266),
    image: './images/10.PNG',
    symbolicName: '백두산부대',
    address: '강원특별자치도 양구군 양구읍 안대리',
    url: 'https://namu.wiki/w/%EC%A0%9C21%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제22보병사단',
    latlng: new kakao.maps.LatLng(38.284153, 128.490796),
    image: './images/11.PNG',
    symbolicName: '율곡부대',
    address: '강원특별자치도 고성군 토성면 학야리',
    url: 'https://namu.wiki/w/%EC%A0%9C22%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제25보병사단',
    latlng: new kakao.maps.LatLng(37.890193, 126.954015),
    image: './images/12.PNG',
    symbolicName: '상승비룡부대',
    address: '경기도 양주시 남면',
    url: 'https://namu.wiki/w/%EC%A0%9C25%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
  {
    title: '제28보병사단',
    latlng: new kakao.maps.LatLng(37.911247, 127.014179),
    image: './images/13.PNG',
    symbolicName: '무적태풍부대',
    address: '경기도 동두천시 상패동',
    url: 'https://namu.wiki/w/%EC%A0%9C28%EB%B3%B4%EB%B3%91%EC%82%AC%EB%8B%A8'
  },
];