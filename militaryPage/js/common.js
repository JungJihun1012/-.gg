const mapContainer = document.getElementById('map');
const tabs = document.querySelectorAll(".tabMenu li");
const selected = document.querySelector(".selected")
let moveLatLon;
let marker;
let content;
let overlays = [];

let mapOptions = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.776383, 126.843730), //지도의 중심좌표.
  level: 5 //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴

const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

function moveMap() {
  map.panTo(moveLatLon);
}

function corps1() { // 제1보병사단
  moveLatLon = new kakao.maps.LatLng(37.776383, 126.843730);
  moveMap();
}
function corps2() { // 제3보병사단
  moveLatLon = new kakao.maps.LatLng(38.243550, 127.414048);
  moveMap();
}
function corps3() { // 제5보병사단
  moveLatLon = new kakao.maps.LatLng(38.023487, 127.109811);
  moveMap();
}
function corps4() { // 제6보병사단
  moveLatLon = new kakao.maps.LatLng(38.242165, 127.250003);
  moveMap();
}
function corps5() { // 제7보병사단
  moveLatLon = new kakao.maps.LatLng(38.138561, 127.685901);
  moveMap();
}
function corps6() { // 제9보병사단
  moveLatLon = new kakao.maps.LatLng(37.702755, 126.796993);
  moveMap();
}
function corps7() { // 제12보병사단
  moveLatLon = new kakao.maps.LatLng(38.114501, 128.196289);
  moveMap();
}
function corps8() { // 제15보병사단
  moveLatLon = new kakao.maps.LatLng(38.054844, 127.525250);
  moveMap();
}
function corps9() { // 제17보병사단
  moveLatLon = new kakao.maps.LatLng(37.476609, 126.746114);
  moveMap();
}
function corps10() { // 제21보병사단
  moveLatLon = new kakao.maps.LatLng(38.084144, 127.975266);
  moveMap();
}
function corps11() { // 제22보병사단
  moveLatLon = new kakao.maps.LatLng(38.284153, 128.490796);
  moveMap();
}
function corps12() { // 제25보병사단
  moveLatLon = new kakao.maps.LatLng(37.890193, 126.954015);
  moveMap();
}
function corps13() { // 제28보병사단
  moveLatLon = new kakao.maps.LatLng(37.911247, 127.014179);
  moveMap();
}

for(let i=0; i<info.length; i++) {
  content = document.createElement('div').innerHTML =
            '    <div class="wrap">' + 
            '      <div class="info">' + 
            '        <div class="title">' + 
            `           ${info[i].title}`+ 
            '          <div class="close" onclick="closeOverlay('+i+')" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '          <div class="img">' +
            `            <img src="${info[i].image}" width="73" height="70">` +
            '          </div>' + 
            '          <div class="desc">' + 
            `            <div class="address">${info[i].address}</div>` + 
            `            <div class="jibun ellipsis">${info[i].symbolicName}</div>` + 
            `            <div><a href="${info[i].url}" target="_blank" class="link">자세히 보기</a></div>` + 
            '          </div>' + 
            '        </div>' + 
            '      </div>' +    
            '    </div>';

  marker = new kakao.maps.Marker({
    map: map,
    position: info[i].latlng,
    title: info[i].title,
  });

  overlays[i] = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition()
  });
  
  kakao.maps.event.addListener(marker, 'click', function() {
    overlays[i].setMap(map);
  });
}

function closeOverlay(i) {
  overlays[i].setMap(null);
}

let text = [];
tabs.forEach((el, idx) => {
  el.addEventListener("click", () => {
      if(idx == 0) {
        selected.innerHTML = `<h2>${info[0].title}</h2>`
        corps1();
      }
      if(idx == 1) {
        selected.innerHTML = `<h2>${info[1].title}</h2>`
        corps2();
      }
      if(idx == 2) {
        selected.innerHTML = `<h2>${info[2].title}</h2>`
        corps3();
      }
      if(idx == 3) {
        selected.innerHTML = `<h2>${info[3].title}</h2>`
        corps4();
      }
      if(idx == 4) {
        selected.innerHTML = `<h2>${info[4].title}</h2>`
        corps5();
      }
      if(idx == 5) {
        selected.innerHTML = `<h2>${info[5].title}</h2>`
        corps6();
      }
      if(idx == 6) {
        selected.innerHTML = `<h2>${info[6].title}</h2>`
        corps7();
      }
      if(idx == 7) {
        selected.innerHTML = `<h2>${info[7].title}</h2>`
        corps8();
      }
      if(idx == 8) {
        selected.innerHTML = `<h2>${info[8].title}</h2>`
        corps9();
      }
      if(idx == 9) {
        selected.innerHTML = `<h2>${info[9].title}</h2>`
        corps10();
      }
      if(idx == 10) {
        selected.innerHTML = `<h2>${info[10].title}</h2>`
        corps11();
      }
      if(idx == 11) {
        selected.innerHTML = `<h2>${info[11].title}</h2>`
        corps12();
      }
      if(idx == 12) {
        selected.innerHTML = `<h2>${info[12].title}</h2>`
        corps13();
      }
  })
});