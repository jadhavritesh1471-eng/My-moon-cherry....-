const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

// मोबाईलवर बोट लावताच (Touch) बटन पळण्यासाठी:
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // मोबाईलवर क्लिक होण्यापासून रोखण्यासाठी
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// कॉम्प्युटरसाठी:
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    question.innerHTML = "I love you too!!! ❤️✨";
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
});
