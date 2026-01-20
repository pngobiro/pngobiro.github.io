
/**
 * ECG Monitor Simulator v1.1
 * Features: Visual Canvas + Web Audio API (Synthetic Sound)
 */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = true; // Default to muted to comply with browser autoplay policies
        this.oscillator = null;
        this.gainNode = null;
    }

    init() {
        if (!this.ctx) {
            // Initialize Audio Context on first user interaction
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        
        // If unmuting, ensure context is running (browsers suspend it by default)
        if (!this.isMuted && this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        
        // If muting during an active alarm (asystole), stop it
        if(this.isMuted) {
            this.stopAlarm();
        }
        
        return this.isMuted;
    }

    playBeep() {
        if (this.isMuted || !this.ctx) return;

        // Create oscillator (the sound generator)
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Connect: Oscillator -> Volume -> Speakers
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        // Sound settings (High pitch beep)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime); // 880Hz (A5)
        
        // Envelope (Fade in/out to avoid clicking)
        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

        // Play
        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + 0.15);
    }

    startAlarm() {
        if (this.isMuted || !this.ctx || this.oscillator) return;

        this.oscillator = this.ctx.createOscillator();
        this.gainNode = this.ctx.createGain();

        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.ctx.destination);

        // Alarm settings (Lower pitch, constant)
        this.oscillator.type = 'square'; // Harsh sound
        this.oscillator.frequency.setValueAtTime(400, this.ctx.currentTime);
        this.gainNode.gain.value = 0.2;

        this.oscillator.start();
    }

    stopAlarm() {
        if (this.oscillator) {
            try {
                this.oscillator.stop();
                this.oscillator.disconnect();
            } catch(e) {}
            this.oscillator = null;
            this.gainNode = null;
        }
    }
}

class ECGMonitor {
    constructor(canvasId, rateId, labelId, muteBtnId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.rateDisplay = document.getElementById(rateId);
        this.labelDisplay = document.getElementById(labelId);
        this.muteBtn = document.getElementById(muteBtnId);
        
        this.sound = new SoundEngine();
        
        // Configuration
        this.speed = 2; 
        this.x = 0;
        this.baseline = this.canvas.height / 2;
        
        // Patterns (Y-offsets)
        // Note: The specific index that represents the "R-wave" (peak) is marked for sound triggering
        this.patterns = {
            nsr: { data: [0,0,0, -2, -5, -2, 0, 0, 0, 0, 2, 5, 20, -50, 10, 0, 0, 2, 4, 6, 4, 2, 0, 0, 0, 0], peakIndex: 12 },
            vtach: { data: [10, 20, 30, 40, 20, -20, -40, -30, -10], peakIndex: 3 },
            afib: { data: [1, -1, 2, -1, 1, 0, 2, 5, 20, -50, 10, 0, 1, -1, 1], peakIndex: 8 },
            flutter: { data: [-10, -5, 0, -10, -5, 0, -10, -5, 0, 2, 5, 20, -50, 10, 0], peakIndex: 12 },
            asystole: { data: [0, 1, 0, -1, 0], peakIndex: -1 } // -1 means no beep
        };

        this.currentRhythm = 'nsr';
        this.beatIndex = 0;
        this.waitCount = 0;
        this.lastY = this.baseline;

        // Listeners
        window.addEventListener('resize', () => this.resize());
        
        // Setup Mute Button
        if(this.muteBtn) {
            this.muteBtn.addEventListener('click', () => {
                this.sound.init(); // Initialize context on first click
                const isMuted = this.sound.toggleMute();
                this.muteBtn.textContent = isMuted ? "🔇 Unmute" : "🔊 Mute";
                this.muteBtn.classList.toggle('active', !isMuted);
                
                // If unmuting while in asystole, restart alarm
                if(!isMuted && this.currentRhythm === 'asystole') {
                    this.sound.startAlarm();
                }
            });
        }
        
        this.resize();
        this.animate();
    }

    resize() {
        const parent = this.canvas.parentElement;
        this.canvas.width = parent.clientWidth;
        this.canvas.height = parent.clientHeight;
        this.baseline = this.canvas.height / 2;
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawGrid();
    }

    setRhythm(type) {
        this.currentRhythm = type;
        this.beatIndex = 0;
        this.waitCount = 0;
        
        // Handle Alarms
        if(type === 'asystole') {
            this.sound.startAlarm();
        } else {
            this.sound.stopAlarm();
        }

        // Update Displays
        let label = "NORMAL SINUS RHYTHM";
        let rate = "72";
        let color = '#10b981'; // Green
        
        switch(type) {
            case 'nsr': label = "NORMAL SINUS RHYTHM"; rate = "72"; break;
            case 'brady': label = "SINUS BRADYCARDIA"; rate = "45"; break;
            case 'tachy': label = "SINUS TACHYCARDIA"; rate = "110"; break;
            case 'vtach': label = "VENTRICULAR TACHYCARDIA"; rate = "160"; color = '#ef4444'; break;
            case 'afib': label = "ATRIAL FIBRILLATION"; rate = "130"; break;
            case 'flutter': label = "ATRIAL FLUTTER"; rate = "150"; break;
            case 'asystole': label = "** ASYSTOLE **"; rate = "0"; color = '#ef4444'; break;
        }
        
        this.labelDisplay.textContent = label;
        this.rateDisplay.textContent = rate;
        this.rateDisplay.style.color = color;
        this.labelDisplay.style.color = (color === '#ef4444') ? '#ef4444' : '#0f0';
    }

    getPattern() {
        if(this.currentRhythm === 'brady' || this.currentRhythm === 'tachy') return this.patterns.nsr;
        return this.patterns[this.currentRhythm];
    }

    getNextY() {
        let y = 0;
        const currentPatternObj = this.getPattern();
        const data = currentPatternObj.data;

        // Timing logic
        let waitTime = 20;
        if(this.currentRhythm === 'brady') waitTime = 60;
        if(this.currentRhythm === 'tachy') waitTime = 5;
        if(this.currentRhythm === 'vtach') waitTime = 5;
        if(this.currentRhythm === 'afib') waitTime = Math.random() * 20; 
        if(this.currentRhythm === 'asystole') waitTime = 0;

        if (this.beatIndex < data.length) {
            // Check for sound trigger
            if(this.beatIndex === currentPatternObj.peakIndex) {
                this.sound.playBeep();
            }

            y = data[this.beatIndex] * (this.currentRhythm === 'vtach' ? 2.5 : 1.5);
            this.beatIndex++;
        } else {
            if (this.waitCount < waitTime) {
                this.waitCount++;
                y = (Math.random() - 0.5) * 2; // Noise
                if(this.currentRhythm === 'flutter') {
                     y = (this.waitCount % 10 < 5) ? -5 : 0;
                }
            } else {
                this.beatIndex = 0;
                this.waitCount = 0;
            }
        }
        return this.baseline + y;
    }

    drawGrid() {
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        for(let x=0; x<this.canvas.width; x+=20) { this.ctx.moveTo(x,0); this.ctx.lineTo(x,this.canvas.height); }
        for(let y=0; y<this.canvas.height; y+=20) { this.ctx.moveTo(0,y); this.ctx.lineTo(this.canvas.width,y); }
        this.ctx.stroke();
    }

    animate() {
        this.ctx.fillStyle = 'rgba(0,0,0,1)';
        this.ctx.fillRect(this.x, 0, 10, this.canvas.height);

        const newY = this.getNextY();
        
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#0f0';
        this.ctx.lineWidth = 2;
        this.ctx.shadowBlur = 5;
        this.ctx.shadowColor = '#0f0';
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        this.ctx.moveTo(this.x, this.lastY);
        this.x += this.speed;
        this.ctx.lineTo(this.x, newY);
        this.ctx.stroke();
        
        this.lastY = newY;
        
        if (this.x > this.canvas.width) {
            this.x = 0;
            this.lastY = newY;
        }

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('ecgCanvas')) {
        // Pass the new mute button ID 'muteBtn'
        const monitor = new ECGMonitor('ecgCanvas', 'heartRateValue', 'rhythmLabel', 'muteBtn');
        
        const buttons = document.querySelectorAll('.rhythm-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                buttons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                monitor.setRhythm(e.target.dataset.rhythm);
            });
        });
    }
});