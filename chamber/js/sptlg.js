const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const a = document.querySelector('a')
const requestURL = 'https://ochen1997.github.io/chamber/data/data.json';


fetch(requestURL)
.then(function(response){
    return response.json()
})
.then(function(jsonObject){
    console.table(jsonObject)
    const sportLight = document.querySelector('.sportlight-1');
    const Img = document.createElement('img');
    const para1 = document.querySelector('.para-1');
    const para2 = document.querySelector('.para-2');
    const myLink = document.createElement('a')
    
    Img.innerHTML = `${jsonObject.directory[0].imageurl}`
    para1.innerHTML = `${jsonObject.directory[0].address}`;
    para2.innerHTML = `${jsonObject.directory[0].phonenumber}`;
    myLink.innerHTML = `${jsonObject.directory[0].link}`;
    myLink.href = `${jsonObject.directory[0].link}`

    Img.setAttribute('src', jsonObject.directory[0].imageurl);
    Img.setAttribute('alt', `campony's information`);
    sportLight.appendChild(Img)
    sportLight.appendChild(para1)
    sportLight.appendChild(para2)
    sportLight.appendChild(myLink)

    const sportLight2 = document.querySelector('.sportlight-2');
    const Img2 = document.createElement('img');
    const para3 = document.querySelector('.para-3');
    const para4 = document.querySelector('.para-4');
    const myLink2 = document.createElement('a')

    Img2.innerHTML = `${jsonObject.directory[1].imageurl}`
    para3.innerHTML = `${jsonObject.directory[1].address}`;
    para4.innerHTML = `${jsonObject.directory[1].phonenumber}`;
    myLink2.innerHTML = `${jsonObject.directory[1].link}`;
    myLink2.href = `${jsonObject.directory[1].link}`

    Img2.setAttribute('src', jsonObject.directory[1].imageurl);
    Img2.setAttribute('alt', `campony's information`);
    sportLight2.appendChild(Img2)
    sportLight2.appendChild(para3)
    sportLight2.appendChild(para4)
    sportLight2.appendChild(myLink2)


    const sportLight3 = document.querySelector('.sportlight-3');
    const Img3 = document.createElement('img');
    const para5 = document.querySelector('.para-5');
    const para6 = document.querySelector('.para-6');
    const myLink3 = document.createElement('a')

    Img3.innerHTML = `${jsonObject.directory[5].imageurl}`
    para5.innerHTML = `${jsonObject.directory[5].address}`;
    para6.innerHTML = `${jsonObject.directory[5].phonenumber}`;
    myLink3.innerHTML = `${jsonObject.directory[5].link}`;
    myLink3.href = `${jsonObject.directory[5].link}`

    Img3.setAttribute('src', jsonObject.directory[5].imageurl);
    Img3.setAttribute('alt', `campony's information`);
    sportLight3.appendChild(Img3)
    sportLight3.appendChild(para5)
    sportLight3.appendChild(para6)
    sportLight3.appendChild(myLink3)

 })