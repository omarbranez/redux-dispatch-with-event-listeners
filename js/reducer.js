// add code snippets from README
// let state = { count: 0 }
let state
function reducer(state = {count:0}, action){ //change state
    switch (action.type){
        case "INCREASE_COUNT":
            return {count: state.count +1}
        default: 
            return state
    }
}

function dispatch(action){ // persist state change
    state = reducer(state, action)
    render()
}

function render(){ // show state on page
    let container = document.getElementById("container")
    container.textContent = state.count
}

dispatch({type: "@@INIT"}) //initial

let button = document.getElementById("button")
button.addEventListener('click', ()=>{ // execute dispatch from the event handler's callback
    dispatch({type: "INCREASE_COUNT"})
})