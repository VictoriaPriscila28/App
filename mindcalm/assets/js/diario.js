function _(id){
    return document.getElementById(id)
}

function getRs() {
    let txt = _('txt').value;
    const d  = new Date();

    _('rs').innerHTML += `
    <div class="card">
    <p>${txt}</p> 
    <small>${d.toLocaleDateString()}, ${d.toLocaleTimeString()}</small>
    </div>`;

    let texts = JSON.parse(localStorage.getItem('texts')) || [];
    texts.push({text: txt, timestamp: d.getTime()});
    localStorage.setItem('texts', JSON.stringify(texts));
}

function loadHistory() {
    // Carrega o histórico do localStorage e exibe na página
    let texts = JSON.parse(localStorage.getItem('texts')) || [];
    texts.forEach(entry => {
        const d = new Date(entry.timestamp);
        _('rs').innerHTML += `
        <div class="card">
        <p>${entry.text}</p> 
        <small>${d.toLocaleDateString()}, ${d.toLocaleTimeString()}</small>
        </div>`;
    });
}

function goBack(){
    window.location.href = 'inicio.html';
}