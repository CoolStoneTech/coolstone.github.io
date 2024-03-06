this.script = document.getElementsByTagName("script")[0]
this.stylesheet = undefined




sessionStorage.setItem('isReady', false)

for (const l of document.getElementsByTagName("link")){
if(l.rel == "stylesheet"){
this.stylesheet = l
}
}


document.getElementById('help').oncontextmenu = (e) => {open(this.stylesheet.href)}
document.oncontextmenu = (e) => {e.preventDefault();}

document.getElementById('sub').addEventListener('click', () => {

    if(document.getElementById('up').files[0] || sessionStorage.getItem("avatar")){ 



     if(!document.getElementById("userInput").innerHTML || !document.getElementById("tagInput").innerHTML){
        return alert("Add an username and tag")
     }

if(document.getElementById('up').files[0]){
    const reader = new FileReader();
  

    reader.readAsDataURL(document.getElementById('up').files[0]);
  
    reader.onload =  () => {
sessionStorage.setItem("avatar", reader.result)
sessionStorage.setItem("username", document.getElementById("userInput").innerHTML)
sessionStorage.setItem("tag", document.getElementById("tagInput").innerHTML)
sessionStorage.setItem('isReady', true)

document.getElementById('setup').style.display = "none"




    };
  
    reader.onerror = (error) => {
      alert('Could not convert image to Base64 \n  ', error);


    }
  }else
{
  sessionStorage.setItem("avatar", sessionStorage.getItem("avatar"))
  sessionStorage.setItem("username", document.getElementById("userInput").innerHTML)
  sessionStorage.setItem("tag", document.getElementById("tagInput").innerHTML)
  sessionStorage.setItem('isReady', true)
  
  document.getElementById('setup').style.display = "none"
}

  }else{
    return alert("Upload an avatar")

  }

})


const am_pm = (date) =>{
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

let msg_count = 0

const Message = class{

  constructor(content){

    msg_count += 1

    const outerDiv = document.createElement('div')

    const outsideDiv = document.createElement('div')


  const avatar = document.createElement('img')
  
  avatar.src = sessionStorage.getItem('avatar')

avatar.style.objectFit = 'cover'

  avatar.style.float = "left"
  avatar.style.width = "3.8%"
  avatar.style.borderRadius = "50%"


  const insideDiv = document.createElement('div')

  insideDiv.style.color = "white"

  const dividerone = document.createElement('label')
  dividerone.innerHTML = '|'
  dividerone.style.visibility = "hidden"
  const dividertwo = document.createElement('label')
  dividertwo.innerHTML = '|'
  dividertwo.style.visibility = "hidden"

  insideDiv.appendChild(dividerone)

  const divider_u = document.createElement('label')
  divider_u.innerHTML = ' '
  divider_u.style.visibility = "hidden"

  insideDiv.appendChild(divider_u)

  const username = document.createElement("label")
  username.style.fontSize = "small"

  username.onmouseover = () => {
    
  username.style.textDecoration = 'underline'
  }

  username.onmouseleave = () => {
    username.style.textDecoration = 'none'
    }
  

  username.innerHTML =  sessionStorage.getItem("username")

  insideDiv.appendChild(username)
  insideDiv.appendChild(dividertwo)

  const time = document.createElement('label')
  time.style.color = "grey"
  time.style.fontSize = "xx-small"
  time.innerHTML = 'Today at ' + am_pm(new Date())

  insideDiv.appendChild(time)
  insideDiv.appendChild(document.createElement('br'))

  const dividerthree = document.createElement('label')
  dividerthree.innerHTML = '\''
  dividerthree.style.visibility = 'hidden'

  insideDiv.appendChild(dividerthree)

const message_content = document.createElement("label")
message_content.style.fontSize = 'smaller'
message_content.innerHTML = ' ' + content
insideDiv.appendChild(message_content)


outsideDiv.className = 'msg'

outsideDiv.oncontextmenu = (e) => {
e.preventDefault()
document.getElementById('messages').removeChild(outerDiv)

}

  outsideDiv.appendChild(avatar)
  outsideDiv.appendChild(insideDiv)



outerDiv.appendChild(outsideDiv)

outerDiv.appendChild(document.createElement('br'))
outerDiv.appendChild(document.createElement('br'))

insideDiv.id = 'inside_' + msg_count
outerDiv.id = 'msg_' + msg_count

  return outerDiv
  }

}



document.getElementById('send').onclick = () => {


document.getElementById('messages').appendChild(new Message(document.getElementById('text_input').value))
document.getElementById('text_input').value = ''
}


    document.getElementById('userInput').onclick = () => 
{
document.getElementById("userTagInputDiv").style.backgroundColor = "rgb((0, 172, 251)"
}


sessionStorage.clear() //reset on reload
