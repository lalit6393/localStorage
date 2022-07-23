const inpKey = document.getElementById('inpKey');
const inpValue = document.getElementById('inpValue');
const saveInfo = document.getElementById('saveInfo');
const yourInfo = document.getElementById('yourInfo');

saveInfo.onclick = () => {
    if (inpKey.value && inpValue.value) {
        localStorage.setItem(inpKey.value, inpValue.value);
        location.reload();
    }

}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    yourInfo.innerHTML += `${key}:${localStorage.getItem(key)} <br />`;
}