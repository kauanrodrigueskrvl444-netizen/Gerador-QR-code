const box = document.querySelector(`#box`);
const divQrCode = document.querySelector(`.right`);

function gerarCodigoQr() {

    const campoQr = document.querySelector(`#campo-qr`).value;

    box.innerHTML = ``;

    if (campoQr.trim() !== ``) {

        new QRCode(box, {
            text: campoQr,
            width: 250,
            height: 250
        });

        setTimeout(() => {

            const img = box.querySelector(`img`);

            if (img) {

                const linkDownload = document.querySelector(`#download`);
                linkDownload.href = `${img.src}`;

                const logo = document.createElement(`img`);
                box.appendChild(logo);
            }

        }, 300);

    } else {

        alert(`Por favor, preencha o campo antes de gerar o QR Code!`);

    }
}
