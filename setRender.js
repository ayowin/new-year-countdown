var backgroundImagePath = 'url(\''
backgroundImagePath +=  __dirname
backgroundImagePath += '/res/background.jpg'
backgroundImagePath += '\')'
backgroundImagePath = backgroundImagePath.replace(/\\/g,"/")
document.getElementById('root').style.backgroundImage = backgroundImagePath