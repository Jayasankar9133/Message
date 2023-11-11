let setEl = document.getElementById("set");
let textEl = document.getElementById('text');

setEl.onclick = () => {
    let value = textEl.value;
    let strValue = JSON.stringify(value);
    localStorage.setItem('message', strValue);
};

let getData = localStorage.getItem('message');
let data = JSON.parse(getData);

textEl.value = data;