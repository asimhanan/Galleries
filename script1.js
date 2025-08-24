// Ring Sizer JavaScript
class RingSizer {
    constructor() {
        this.currentSize = 7; // Default US ring size
        this.currentCategory = 'medium';
        this.pixelsPerMM = this.calculatePixelsPerMM();
        
        // Ring size data with US size, diameter in mm, and international conversions
        this.ringSizeData = {
            3: { usSize: 3, diameterMM: 14.1, ukSize: 'F', euSize: '44', jpSize: '4' },
            3.25: { usSize: 3.25, diameterMM: 14.3, ukSize: 'F½', euSize: '45', jpSize: '5' },
            3.5: { usSize: 3.5, diameterMM: 14.5, ukSize: 'G', euSize: '45', jpSize: '5' },
            3.75: { usSize: 3.75, diameterMM: 14.7, ukSize: 'G½', euSize: '46', jpSize: '6' },
            4: { usSize: 4, diameterMM: 14.9, ukSize: 'H', euSize: '47', jpSize: '7' },
            4.25: { usSize: 4.25, diameterMM: 15.1, ukSize: 'H½', euSize: '47', jpSize: '7' },
            4.5: { usSize: 4.5, diameterMM: 15.3, ukSize: 'I', euSize: '48', jpSize: '8' },
            4.75: { usSize: 4.75, diameterMM: 15.5, ukSize: 'I½', euSize: '49', jpSize: '8' },
            5: { usSize: 5, diameterMM: 15.7, ukSize: 'J', euSize: '49', jpSize: '9' },
            5.25: { usSize: 5.25, diameterMM: 15.9, ukSize: 'J½', euSize: '50', jpSize: '10' },
            5.5: { usSize: 5.5, diameterMM: 16.1, ukSize: 'K', euSize: '51', jpSize: '10' },
            5.75: { usSize: 5.75, diameterMM: 16.3, ukSize: 'K½', euSize: '51', jpSize: '11' },
            6: { usSize: 6, diameterMM: 16.5, ukSize: 'L', euSize: '52', jpSize: '12' },
            6.25: { usSize: 6.25, diameterMM: 16.7, ukSize: 'L½', euSize: '53', jpSize: '12' },
            6.5: { usSize: 6.5, diameterMM: 16.9, ukSize: 'M', euSize: '53', jpSize: '13' },
            6.75: { usSize: 6.75, diameterMM: 17.1, ukSize: 'M½', euSize: '54', jpSize: '13' },
            7: { usSize: 7, diameterMM: 17.3, ukSize: 'N', euSize: '54', jpSize: '14' },
            7.25: { usSize: 7.25, diameterMM: 17.5, ukSize: 'N½', euSize: '55', jpSize: '15' },
            7.5: { usSize: 7.5, diameterMM: 17.7, ukSize: 'O', euSize: '56', jpSize: '15' },
            7.75: { usSize: 7.75, diameterMM: 17.9, ukSize: 'O½', euSize: '56', jpSize: '16' },
            8: { usSize: 8, diameterMM: 18.1, ukSize: 'P', euSize: '57', jpSize: '16' },
            8.25: { usSize: 8.25, diameterMM: 18.3, ukSize: 'P½', euSize: '58', jpSize: '17' },
            8.5: { usSize: 8.5, diameterMM: 18.5, ukSize: 'Q', euSize: '58', jpSize: '17' },
            8.75: { usSize: 8.75, diameterMM: 18.7, ukSize: 'Q½', euSize: '59', jpSize: '18' },
            9: { usSize: 9, diameterMM: 19.0, ukSize: 'R', euSize: '59', jpSize: '18' },
            9.25: { usSize: 9.25, diameterMM: 19.2, ukSize: 'R½', euSize: '60', jpSize: '19' },
            9.5: { usSize: 9.5, diameterMM: 19.4, ukSize: 'S', euSize: '61', jpSize: '19' },
            9.75: { usSize: 9.75, diameterMM: 19.6, ukSize: 'S½', euSize: '61', jpSize: '20' },
            10: { usSize: 10, diameterMM: 19.8, ukSize: 'T', euSize: '62', jpSize: '20' },
            10.25: { usSize: 10.25, diameterMM: 20.0, ukSize: 'T½', euSize: '63', jpSize: '21' },
            10.5: { usSize: 10.5, diameterMM: 20.2, ukSize: 'U', euSize: '63', jpSize: '21' },
            10.75: { usSize: 10.75, diameterMM: 20.4, ukSize: 'U½', euSize: '64', jpSize: '22' },
            11: { usSize: 11, diameterMM: 20.6, ukSize: 'V', euSize: '64', jpSize: '23' },
            11.25: { usSize: 11.25, diameterMM: 20.8, ukSize: 'V½', euSize: '65', jpSize: '23' },
            11.5: { usSize: 11.5, diameterMM: 21.0, ukSize: 'W', euSize: '66', jpSize: '24' },
            11.75: { usSize: 11.75, diameterMM: 21.2, ukSize: 'W½', euSize: '66', jpSize: '24' },
            12: { usSize: 12, diameterMM: 21.4, ukSize: 'X', euSize: '67', jpSize: '25' },
            12.25: { usSize: 12.25, diameterMM: 21.6, ukSize: 'X½', euSize: '68', jpSize: '25' },
            12.5: { usSize: 12.5, diameterMM: 21.8, ukSize: 'Y', euSize: '68', jpSize: '26' },
            12.75: { usSize: 12.75, diameterMM: 22.0, ukSize: 'Y½', euSize: '69', jpSize: '26' },
            13: { usSize: 13, diameterMM: 22.2, ukSize: 'Z', euSize: '69', jpSize: '27' },
            13.25: { usSize: 13.25, diameterMM: 22.4, ukSize: 'a½', euSize: '70', jpSize: '27' },
            13.5: { usSize: 13.50, diameterMM: 22.6, ukSize: 'b', euSize: '71', jpSize: '28' },
            13.75: { usSize: 13.75, diameterMM: 22.8, ukSize: 'b½', euSize: '71', jpSize: '28' },
            14: { usSize: 14, diameterMM: 23.0, ukSize: 'c', euSize: '72', jpSize: '29' },
            14.25: { usSize: 14.25, diameterMM: 23.2, ukSize: 'c½', euSize: '72', jpSize: '29' },
            14.5: { usSize: 14.50, diameterMM: 23.4, ukSize: 'd', euSize: '73', jpSize: '30' },
            14.75: { usSize: 14.75, diameterMM: 23.6, ukSize: 'd½', euSize: '74', jpSize: '30' },
            15: { usSize: 15, diameterMM: 23.8, ukSize: 'e', euSize: '74', jpSize: '31' },
            15.25: { usSize: 15.25, diameterMM: 24.0, ukSize: 'e½', euSize: '75', jpSize: '31' },
            15.5: { usSize: 15.50, diameterMM: 24.2, ukSize: 'f', euSize: '75', jpSize: '32' },
            15.75: { usSize: 15.75, diameterMM: 24.4, ukSize: 'f½', euSize: '76', jpSize: '32' },
            16: { usSize: 16, diameterMM: 24.6, ukSize: 'g', euSize: '77', jpSize: '33' },
            16.25: { usSize: 16.25, diameterMM: 24.8, ukSize: 'g½', euSize: '77', jpSize: '33' },
            16.5: { usSize: 16.50, diameterMM: 25.0, ukSize: 'h', euSize: '78', jpSize: '34' },
            16.75: { usSize: 16.75, diameterMM: 25.2, ukSize: 'h½', euSize: '78', jpSize: '35' },
            17: { usSize: 17, diameterMM: 25.4, ukSize: 'i', euSize: '79', jpSize: '35' }
        };
        
        this.initializeElements();
        this.setupEventListeners();
        this.updateDisplay();
    }
    
    // Calculate pixels per millimeter based on screen DPI
    calculatePixelsPerMM() {
        // Create a temporary element to measure DPI
        const testElement = document.createElement('div');
        testElement.style.width = '1in';
        testElement.style.height = '1in';
        testElement.style.position = 'absolute';
        testElement.style.left = '-100%';
        testElement.style.top = '-100%';
        document.body.appendChild(testElement);
        
        const dpi = testElement.offsetWidth;
        document.body.removeChild(testElement);
        
        // Convert DPI to pixels per millimeter (1 inch = 25.4 mm)
        return dpi / 25.4;
    }
    
    initializeElements() {
        // Get DOM elements
        this.elements = {
            categoryButtons: document.querySelectorAll('.category-btn'),
            ringCircle: document.getElementById('ringCircle'),
            sizeLabel: document.getElementById('sizeLabel'),
            currentSize: document.getElementById('currentSize'),
            decreaseBtn: document.getElementById('decreaseBtn'),
            increaseBtn: document.getElementById('increaseBtn'),
            sizeSlider: document.getElementById('sizeSlider'),
            measureBtn: document.getElementById('measureBtn'),
            resultsSection: document.getElementById('resultsSection'),
            resultUSSize: document.getElementById('resultUSSize'),
            resultDiameter: document.getElementById('resultDiameter'),
            resultUKSize: document.getElementById('resultUKSize'),
            resultEUSize: document.getElementById('resultEUSize'),
            resultJPSize: document.getElementById('resultJPSize'),
            chartUS: document.getElementById('chartUS'),
            chartDiameter: document.getElementById('chartDiameter'),
            chartUK: document.getElementById('chartUK'),
            chartEU: document.getElementById('chartEU'),
            resetBtn: document.getElementById('resetBtn'),
            saveBtn: document.getElementById('saveBtn'),
            rulerLine: document.getElementById('rulerLine')
        };
        
        // Set up the reference ruler (2.5cm)
        const rulerWidthPx = 25 * this.pixelsPerMM; // 25mm = 2.5cm
        this.elements.rulerLine.style.width = `${rulerWidthPx}px`;
    }
    
    setupEventListeners() {
        // Category button listeners
        this.elements.categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setCategory(e.target.dataset.category);
            });
        });
        
        // Size control listeners
        this.elements.decreaseBtn.addEventListener('click', () => {
            this.adjustSize(-0.25);
        });
        
        this.elements.increaseBtn.addEventListener('click', () => {
            this.adjustSize(0.25);
        });
        
        // Slider listener
        this.elements.sizeSlider.addEventListener('input', (e) => {
            this.currentSize = parseFloat(e.target.value);
            this.updateDisplay();
        });
        
        // Measure button listener
        this.elements.measureBtn.addEventListener('click', () => {
            this.measureRing();
        });
        
        // Reset button listener
        this.elements.resetBtn.addEventListener('click', () => {
            this.resetMeasurement();
        });
        
        // Save button listener
        this.elements.saveBtn.addEventListener('click', () => {
            this.saveResult();
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' || e.key === '+') {
                e.preventDefault();
                this.adjustSize(0.25);
            } else if (e.key === 'ArrowDown' || e.key === '-') {
                e.preventDefault();
                this.adjustSize(-0.25);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (this.elements.resultsSection.style.display === 'none') {
                    this.measureRing();
                } else {
                    this.resetMeasurement();
                }
            }
        });
    }
    
    setCategory(category) {
        this.currentCategory = category;
        
        // Update button states
        this.elements.categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === category) {
                btn.classList.add('active');
            }
        });
        
        // Set default size for category
        switch (category) {
            case 'small':
                this.currentSize = 5;
                break;
            case 'medium':
                this.currentSize = 7;
                break;
            case 'large':
                this.currentSize = 9;
                break;
        }
        
        this.updateDisplay();
    }
    
    adjustSize(delta) {
        const newSize = this.currentSize + delta;
        if (newSize >= 3 && newSize <= 17) {
            this.currentSize = newSize;
            this.updateDisplay();
        }
    }
    
    updateDisplay() {
        const sizeData = this.ringSizeData[this.currentSize];
        if (!sizeData) return;
        
        // Update size displays
        this.elements.currentSize.textContent = `Ring Size: ${sizeData.usSize}`;
        this.elements.sizeLabel.textContent = `Size ${sizeData.usSize} (${sizeData.diameterMM}mm)`;
        
        // Update slider
        this.elements.sizeSlider.value = this.currentSize;
        
        // Update ring circle size
        this.updateRingCircle(sizeData.diameterMM);
    }
    
    updateRingCircle(diameterMM) {
        const diameterPx = diameterMM * this.pixelsPerMM;
        
        // Ensure minimum and maximum sizes for visibility
        const minSize = 30; // minimum 30px
        const maxSize = 200; // maximum 200px
        const finalSize = Math.max(minSize, Math.min(maxSize, diameterPx));
        
        this.elements.ringCircle.style.width = `${finalSize}px`;
        this.elements.ringCircle.style.height = `${finalSize}px`;
        
        // Add pulse animation for visual feedback
        this.elements.ringCircle.classList.remove('pulse');
        setTimeout(() => {
            this.elements.ringCircle.classList.add('pulse');
        }, 10);
    }
    
    measureRing() {
        const sizeData = this.ringSizeData[this.currentSize];
        if (!sizeData) return;
        
        // Update result displays
        this.elements.resultUSSize.textContent = sizeData.usSize.toString();
        this.elements.resultDiameter.textContent = `${sizeData.diameterMM}mm`;
        this.elements.resultUKSize.textContent = sizeData.ukSize;
        this.elements.resultEUSize.textContent = sizeData.euSize;
        this.elements.resultJPSize.textContent = sizeData.jpSize;
        
        // Update chart
        this.elements.chartUS.textContent = sizeData.usSize.toString();
        this.elements.chartDiameter.textContent = `${sizeData.diameterMM}mm`;
        this.elements.chartUK.textContent = sizeData.ukSize;
        this.elements.chartEU.textContent = sizeData.euSize;
        
        // Show results section with animation
        this.elements.resultsSection.style.display = 'block';
        this.elements.resultsSection.classList.add('fade-in');
        
        // Scroll to results
        this.elements.resultsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        
        // Show success message
        this.showNotification('Ring size measured successfully!', 'success');
    }
    
    resetMeasurement() {
        // Hide results section
        this.elements.resultsSection.style.display = 'none';
        this.elements.resultsSection.classList.remove('fade-in');
        
        // Reset to default values
        this.currentSize = 7;
        this.currentCategory = 'medium';
        
        // Update category buttons
        this.elements.categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === 'medium') {
                btn.classList.add('active');
            }
        });
        
        // Update display
        this.updateDisplay();
        
        // Scroll back to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        this.showNotification('Measurement reset', 'info');
    }
    
    saveResult() {
        const sizeData = this.ringSizeData[this.currentSize];
        if (!sizeData) return;
        
        const result = {
            timestamp: new Date().toISOString(),
            usSize: sizeData.usSize,
            diameterMM: sizeData.diameterMM,
            ukSize: sizeData.ukSize,
            euSize: sizeData.euSize,
            jpSize: sizeData.jpSize
        };
        
        // Save to localStorage
        let savedResults = JSON.parse(localStorage.getItem('ringSizerResults') || '[]');
        savedResults.push(result);
        
        // Keep only last 10 results
        if (savedResults.length > 10) {
            savedResults = savedResults.slice(-10);
        }
        
        localStorage.setItem('ringSizerResults', JSON.stringify(savedResults));
        
        this.showNotification('Result saved successfully!', 'success');
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            color: 'white',
            fontWeight: '500',
            zIndex: '1000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px'
        });
        
        // Set background color based on type
        switch (type) {
            case 'success':
                notification.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
                break;
            case 'error':
                notification.style.background = 'linear-gradient(135deg, #f56565, #e53e3e)';
                break;
            default:
                notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        }
        
        // Add to document
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Get saved results
    getSavedResults() {
        return JSON.parse(localStorage.getItem('ringSizerResults') || '[]');
    }
    
    // Clear saved results
    clearSavedResults() {
        localStorage.removeItem('ringSizerResults');
        this.showNotification('Saved results cleared', 'info');
    }
}

// Initialize the Ring Sizer when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const ringSizer = new RingSizer();
    
    // Make it globally accessible for debugging
    window.ringSizer = ringSizer;
    
    // Add some helpful console messages
    console.log('Ring Sizer initialized successfully!');
    console.log('Use arrow keys or +/- to adjust size');
    console.log('Press Enter to measure or reset');
    console.log('Access the ringSizer object via window.ringSizer');
});

// Add CSS for notifications dynamically
const notificationStyles = `
    .notification {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
    }
    
    .notification:hover {
        transform: translateX(0) scale(1.02) !important;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

