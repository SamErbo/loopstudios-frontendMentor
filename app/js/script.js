const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener('click', function(){
    
    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open')
        // console.log("open")
    }
    else{
        btnHamburger.classList.add('open')
        // console.log("open class removed")
    }
})

