window.onload = function() {
    new ClipboardJS('.cc-copy-btn');

    const qrcode = new QRCode("qrcode");
    document.getElementById('qrcode').onclick = function (el) {
        qrcode.clear();
        let img = el.currentTarget.querySelector('img');
        img.style.display = 'none';
    }
    document.querySelectorAll('.cc-copy-btn').forEach(el => {
        const target = el.getAttribute('data-clipboard-target');
        el.onclick = function () {
            const targetEl = document.querySelector(target);
            qrcode.clear();
            qrcode.makeCode(targetEl.innerText);
        }
    })
}


