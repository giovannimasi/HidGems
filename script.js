if(screen.width<=1023){
    mobile();
}else{
    desktop();
}

function mobile(){
    const slider = document.querySelector('.mockup')
    const container = document.querySelector('.slide')
    document.getElementById('left').addEventListener('click', function() {toPrevious()})
    document.getElementById('right').addEventListener('click', function() {toNext()})

    let current = 0
    let prev = 3
    let next = 1

    const toPrevious = () => {
        console.log('prev')
        if(current>0){
            toSlide(current-1)
        }else{
            toSlide(container-length-1)
        }
    }

    const toNext = () => {
        console.log('next')
        if(current<3){
            toSlide(current+1)
        }else{
            toSlide(0)
        }
    }

    const toSlide = (number) => {
        current=number
        prev = current-1
        next = current+1

        for (let i = 0; i<container.length; i++){
            container[i].classList.remove('active')
            container[i].classList.remove('prev')
            container[i].classList.remove('next')
        }

        if(next==4){ next=0 }

        if(prev==-1) {prev = 4}

        container[current].classList.add('active')
        container[prev].classList.add('prev')
        container[next].classList.add('next')
    }
}

function desktop(){

}