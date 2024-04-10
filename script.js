const generateBtn = document.querySelector('form button');
const inputText = document.querySelector('form input');
const qrCode = document.querySelector('.qr-code');
const qrImage = document.querySelector('.qr-code img');

generateBtn.addEventListener('click', ()=> {
    const inputValue = inputText.value;
    if(!inputValue) {
        return alert('مقداری را وارد کنید.');
    }
    generateBtn.innerHTML = 'درحال دریافت QR Code';
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

    qrImage.addEventListener('load', ()=> {
        qrCode.classList.remove('hidden');
        generateBtn.innerHTML = 'تولید QR Code';
    });
});

inputText.addEventListener('keyup', ()=> {
    if(!inputText.value) {
        qrCode.classList.add('hidden');
    }
});