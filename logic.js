copy = () => {
    console.log('ppppp')
    const clipB = navigator.clipboard;
    const result = document.querySelector('p');
    clipB.writeText(result.innerText).then(() => {
        document.getElementById('succeededCopy').classList.add('show');
        setTimeout(() => {
            document.getElementById('succeededCopy').removeAttribute('class');
            document.getElementById('succeededCopy').classList.add('disappear');
        }, 1000);
    });
}

translate = () => {
    let text = document.getElementById('textToTrans').value;
    let output = text.replace(/[aeiouáéíóúü]/gi, 'i');
    document.getElementById('result').innerHTML = output
}

document.getElementById('textToTrans').addEventListener('keyup', translate);