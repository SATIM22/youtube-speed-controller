function createSpeedButton(speed) {
    const button = document.createElement('button');
    button.className = 'ytp-speed-button';
    button.textContent = `${speed}x`;
    button.addEventListener('click', () => {
        document.querySelector('video').playbackRate = speed;
        document.getElementById('current-speed').textContent = `Speed: ${speed}x`;
    });
    return button;
}

function addSpeedControls() {
    const playerControls = document.querySelector('.ytp-right-controls');
    if (playerControls && !document.querySelector('.ytp-speed-button')) {
        const speeds = [0.5, 1, 1.25, 1.5, 2];
        speeds.forEach(speed => {
            playerControls.appendChild(createSpeedButton(speed));
        });
        const currentSpeedDisplay = document.createElement('div');
        currentSpeedDisplay.id = 'current-speed';
        currentSpeedDisplay.style.padding = '1px';
        currentSpeedDisplay.style.color = 'red';
        currentSpeedDisplay.style.marginLeft = '0px';
        currentSpeedDisplay.textContent = 'Speed: 1x';

        const leftplayerControls = document.querySelector('.ytp-left-controls');
        leftplayerControls.appendChild(currentSpeedDisplay);
    }
}

const observer = new MutationObserver(addSpeedControls);
observer.observe(document.body, { childList: true, subtree: true });

addSpeedControls();