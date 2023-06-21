const div=document.getElementById("qr")
// const button=document.getElementsByTagName("button")
const button=document.getElementById("btn")
// console.log(button);
const input=document.getElementById("floatingInput")
// console.log(input);



const generateQR=(input)=>{
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}&color=`).then((response) => {
    if(!response.ok){
        throw new Error("Something went wrong")
    } else{
        return response
    }

}
).then((data)=>{
    console.log(data.url)
    domaYaz(data)
 



}).catch((err)=>{
        domaHatYaz(err)
    
    })
}

button.addEventListener("click",(e) => { 
//     // e.preventDefault()
    generateQR(input)
    console.log(input.value);
    
    input.value =""
//     // input.focus()
}

)
const domaYaz=(data)=>{
    div.innerHTML=`
    <a href="${data.url}" target="_blank">
    <img src="${data.url}" alt="qrcode">
</a> 
<p class="fw-bold mt-3 text-warning">
You can check it with any QR code reader.</p>

    `
}



const domaHatYaz=()=>{
    // console.log(err)
    const p=document.createElement("p")
    p.classList.add("text-danger")
    p.classList.add("fw-bold")
    p.classList.add("text-center")
    div.appendChild(p)
    const text=document.createTextNode(p.value)
    p.appendChild(text)
    text.textContent="Somethings went wrong. Try again!"
}