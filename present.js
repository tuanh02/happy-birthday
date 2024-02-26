
var to = 'Phạm Thị Uyên!';
var gift_url = '';
var gift_image_url = 'img/avt.jpg';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    /* document.getElementById('messageBtn').classList.add('message-show'); */
    document.getElementById('bal').classList.add('ballon-show');
    document.getElementById('bal2').classList.add('ballon2-show');
    document.getElementById('bal3').classList.add('ballon3-show');
    document.getElementById('bal4').classList.add('ballon4-show');
    setTimeout(function() {
      messageBtn.classList.add('message-show');
    }, 5000);
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

