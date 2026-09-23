const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainCard = document.getElementById('mainCard');
const loveLetterCard = document.getElementById('loveLetterCard');
const bgMusic = document.getElementById('bgMusic');

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    mainCard.style.display = 'none'; // जुने कार्ड पूर्णपणे गायब करा
    loveLetterCard.classList.remove('hide'); // फक्त नवीन लव्ह लेटर दाखवा
    bgMusic.play().catch(e => console.log("Music blocked"));
});
