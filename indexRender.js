
var currentWorkPath = process.cwd()
console.log(currentWorkPath)

var backgroundImagePath = 'url(\''
backgroundImagePath +=  currentWorkPath
backgroundImagePath += '/resources/background.jpg'
backgroundImagePath += '\')'
backgroundImagePath = backgroundImagePath.replace(/\\/g,"/")
document.getElementById('root').style.backgroundImage = backgroundImagePath

const bgmAudio = new Audio(currentWorkPath + '/resources/bgm.mp3')
bgmAudio.autoplay = true
bgmAudio.loop = true

function speak(content) {
	if ('speechSynthesis' in window) {  
	    var speech = new SpeechSynthesisUtterance()
	    speech.volume = 1 /* speak volumn */
	    speech.rate = 2 /* speak speed */
        speech.pitch = 1 /* speak pitch */
	    speech.text = content 

	    speechSynthesis.speak(speech)
	} else {  
	    console.error('browser unsupported Web Speech API');  
	}
}

document.getElementById('startButton').addEventListener('click', () => {
    bgmAudio.volume = 0.5

    var buttonDiv = document.getElementById('buttonDiv')
    buttonDiv.style.display = 'none'

    var countText = document.getElementById('countText') 
    countText.style.display = 'inline-block'
    
    var newYearDate = new Date('2024-02-10 00:00:00') /* release date */
    // var newYearDate = new Date('2024-02-01 13:13:00') /* develope date */
    var newYearTimestampSeconds = newYearDate.getTime()/1000
    var lastCountDown = -1
    const boomAudio = new Audio(currentWorkPath + '/resources/boom.mp3')
    const yeahAudio = new Audio(currentWorkPath + '/resources/yeah.mp3')
    yeahAudio.onended = ()=>{
        bgmAudio.volume = 1
    }
    var timer = setInterval(()=>{
        var timestampSeconds = Math.floor(Date.now() / 1000)
        var countdown = newYearTimestampSeconds - timestampSeconds
        countText.innerHTML = countdown
        
        if(countdown != lastCountDown){
            lastCountDown = countdown
      
            if(countdown <= 10){
                speak(countdown)
            } else {         
                boomAudio.play()
            }
        }

        if(countdown <= 0){
            clearInterval(timer)
            countText.innerHTML = '新年快乐！'

            yeahAudio.play() 
        }

    }, 500);
});

document.getElementById('setButton').addEventListener('click',  () => {
    const {ipcRenderer} = require('electron')
    ipcRenderer.send('openSetWindow')
});
