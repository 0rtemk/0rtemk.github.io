function add() {
    let time = sessionStorage.getItem('timer')
    time ++
    if(document.getElementById('time')){
        let hours = ~~(time / 3600)
        let minutes = ~~(time / 60) % 60
        let seconds = time % 60
        document.getElementById('time').textContent = (hours > 9 ? hours : "0" + hours) 
                                        + ":" + (minutes > 9 ? minutes : "0" + minutes)
                                        + ":" + (seconds > 9 ? seconds : "0" + seconds)
    }
    sessionStorage.setItem('timer', time)
    timer()
}

function timer() {
    if(!(sessionStorage.getItem('timer'))) sessionStorage.setItem('timer', 0)
    setTimeout(add, 1000)
}

timer()