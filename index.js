let fact = document.querySelector('#fact')
let factText = document.querySelector('#factText')
let numberInput = document.querySelector('#numberInput')

numberInput.addEventListener('blur',getFactAjax)
// numberInput.addEventListener('blur',getFactFetch)

function getFactAjax(){
    let number = numberInput.value 
    let url = `http://numbersapi.com/${number}`
    let xhr = new XMLHttpRequest()
    xhr.open('GET',url,true)
    xhr.send()
    // adding loading ui
    document.getElementById('nw-status').classList.add('spinner-border')
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200 && number!=""){
              
             // removing loader after getting response
            document.getElementById('nw-status').classList.remove('spinner-border')
            fact.style.display = 'block'
            // factText.innerText = xhr.responseText
            //       or
            factText.innerText = this.responseText
        }
        else{
            document.getElementById('nw-status').classList.remove('spinner-border')
            fact.style.display = 'block'
            
            factText.innerText ="Opps Error!"
        }
    }
}

// function getFactFetch(){
//     let number = numberInput.value 
//     let url = `http://numbersapi.com/${number}`
//     fetch(url)
//        .then(response=>response.text())
//        .then(data=>{
//            console.log(data)
//            if(number!=''){
//             fact.style.display = 'block'
//             factText.innerText = data
//            }


//        })
//        .catch(error=>{
//            console.log(error)
//        })

// }







