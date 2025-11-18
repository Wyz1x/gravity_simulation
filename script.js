let mouse_effect = document.getElementById('mouse-effect');

document.addEventListener('mousemove', (e) => {
    setTimeout(() => {
        let x = e.clientX;
        let y = e.clientY;

        mouse_effect.style.left = `${x}px`;
        mouse_effect.style.top = `${y}px`;
    }, 150);
});
