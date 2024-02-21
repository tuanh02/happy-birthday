function createBur(){
    const animationContainer = document.querySelector('.animation-container')
    const burst = document.querySelector('.burst')
    const lines = document.querySelector('.line')
    burst.style.top = Math.random() * innerHeight + 'px'
    burst.style.left = Math.random() * innerWidth + 'px'

    const color = ["#ea5e55","#34a854","#4285f4","#fbbc05","#fdfdfd","ocean"]
    lines.foreach(line =>{
        const randomColor = color[Math.floor(Math.random()*color.length)]
        line.style.background = randomColor
        
    })
    const burstClone = burst.cloneNode(true);
    animationContainer.appendChild(burstClone)
    setTimeout(()=>{
        burstClone.remove();
    },3000)
}
setInterval(createBur, 500)

var message = document.getElementById(messageBtn)
messageBtn.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
