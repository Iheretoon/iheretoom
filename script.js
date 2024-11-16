const cat = document.getElementById('cat');
const scoreDisplay = document.getElementById('score');
const saveButton = document.getElementById('save');
const resetButton = document.getElementById('reset');
const meowSound = document.getElementById('meow-sound');

// โหลดคะแนนจาก LocalStorage
let score = parseInt(localStorage.getItem('popcatScore')) || 0;
scoreDisplay.textContent = `Score: ${score}`;

// เปลี่ยนรูปและเพิ่มคะแนนตอนกด
cat.addEventListener('mousedown', () => {
    cat.src = 'img/1.jpg'; // ใส่รูปปากอ้า
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    meowSound.currentTime = 0; // รีเซ็ตเสียง
    meowSound.play(); // เล่นเสียง
});

// เปลี่ยนกลับเมื่อปล่อย
cat.addEventListener('mouseup', () => {
    cat.src = 'img/2.jpg'; // ใส่รูปปิดปาก
});

// รองรับ touch บนอุปกรณ์มือถือ
cat.addEventListener('touchstart', (e) => {
    e.preventDefault();
    cat.src = 'img/2.jpg';
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    meowSound.currentTime = 0;
    meowSound.play();
});

cat.addEventListener('touchend', (e) => {
    e.preventDefault();
    cat.src = 'img/1.jpg';
});

// บันทึกคะแนนลง LocalStorage
saveButton.addEventListener('click', () => {
    localStorage.setItem('popcatScore', score);
    alert('Score saved!');
});

// รีเซ็ตคะแนน
resetButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    localStorage.setItem('popcatScore', score); // อัปเดตใน LocalStorage ด้วย
});
