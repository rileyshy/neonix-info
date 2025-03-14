document.querySelector('.click-to-enter').addEventListener('click', function() {
    this.classList.add('hide');
    document.querySelector('.main-content').classList.add('show');

    const video = document.getElementById('background-video');
    video.muted = false;
    video.play();

    setTimeout(() => {
        document.querySelector('.bio-box').style.display = "block";
    }, 6600);
});

function copydiscorduser() {
    navigator.clipboard.writeText("mario_ot");
    alert("Discord User copied to clipboard!");
}

function copyemail() {
    navigator.clipboard.writeText("mario@rileyb.co.uk");
    alert("Email copied to clipboard!");
}

const titleElement = document.getElementById('title');
const text = "@Neonix";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (isDeleting) {
        titleElement.textContent = text.slice(0, index--);
        if (index === 0) isDeleting = false;
    } else {
        titleElement.textContent = text.slice(0, index++);
        if (index === text.length) isDeleting = true;
    }
}

setInterval(typeEffect, 250);

(function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            window.location.replace('about:blank');
        }
    });
    console.log('%c', element);

    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 100;
        const heightThreshold = window.outerHeight - window.innerHeight > 100;
        
        if (widthThreshold || heightThreshold) {
            window.location.replace('about:blank');
        }
    }

    setInterval(detectDevTools, 1000);

    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
        }
    });
})();

const video = document.getElementById('background-video');
const volumeControl = document.getElementById('volumeControl');
volumeControl.addEventListener('input', () => video.volume = volumeControl.value);

const volumeIcon = document.getElementById("volume-icon");
const volumeSlider = document.getElementById("volume-range");
volumeSlider.addEventListener("input", function () {
    volumeIcon.src = this.value == 0 ? "mute.png" : "volume.png";
});

const cursor = document.querySelector('.crosshair');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.transform = 'translate(-50%, -50%)';
});

document.addEventListener("DOMContentLoaded", function () {
    const customCursor = "url('assets/crosshair.png'), pointer";
    const defaultCursor = "auto";

    document.querySelectorAll("button, .cta-button, a").forEach((element) => {
        element.addEventListener("mouseenter", () => {
            document.body.style.cursor = customCursor;
        });

        element.addEventListener("mouseleave", () => {
            document.body.style.cursor = defaultCursor;
        });
    });
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', event => {
    if (event.ctrlKey && (event.key === 's' || event.key === 'S')) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C')) {
        event.preventDefault();
    }
    if (event.key === 'F12') {
        event.preventDefault();
    }
});

(function() {
    const devtools = new Function('debugger');
    setInterval(devtools, 100);
})();

const detectDevTools = () => {
    const element = new Image();
    element.__defineGetter__('id', function() {
        window.location.replace('about:blank');
    });
    console.log('%c', element);
};
setInterval(detectDevTools, 1000);

const checkDevTools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    
    if (widthThreshold || heightThreshold) {
        document.body.innerHTML = "<h1 style='text-align: center; color: red;'>Access Denied</h1>";
    }
};

setInterval(checkDevTools, 500);