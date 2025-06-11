//slow down the function instead of calling the function every single time, only going to call the function 
//after set delay
//debounce waits until there's been at least a set period of time
const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce((text) =>{
    debounceText.textContent = text
})

const updateThrottleText = throttle((text) =>{
    throttleText.textContent = text
})

input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value)
    updateThrottleText(e.target.value)
})


function debounce (cb, delay = 2000){
    let timeout;
    return (...args) => {
        clearTimeout(timeout)
        setTimeout(()=>{
            cb(...args)
        },delay)
    }

}

function throttle(cb, delay = 1000){
    let shortWait = false;

    return (...args) =>{
        if (shortWait) return;

    cb(...args)
    shortWait = true

    setTimeout(()=>{
        shortWait = false
    }, delay)
    }

}