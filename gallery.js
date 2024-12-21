// Array to store all image IDs
let imageLinks = [
    "1ZzmL6Ozurft_OpLKQMvCHJwd-ikbQkqM", "1LI_uYJ8pu4IDMAVGGBg4mXL2bRVEgahv", "1aOU7yKxIFuWqmQXBgFSFB6gNvUlQAUWG", "1pmOmpDLoR0F8WVvE7bQrYVFpFgE2XFHh", "1qR2LWNTKk7O5zoFdyUcNfYclHSRU5nRI", "1yuF9BbBrfuNU8zd7QMLeReFTau3U9Iy2", "1oY_0YEsMcmaKw3-eGfdH1s0Lj59DdF_d", 
    "1ForNkeGUBCnnIPByAKh5hIaXOJjC_KcU", "1cZZSCXCl3EJItKxV9iJ1EdeTp7WvoPr7", "1TLxXWoZQk3UYqFYT5gEvoMQhbFp9KBhG", "1V7QgapoO6UISbHlCTBBwrAxxexg3I4gB", "1nBtQr3NLjAkNE2sIVIvQjcIUyVqoG74f", "1ruugKdv0SD_6NhbH1r0g9YwKPJ0bfBWV", "19XDwcsbwfsqKUbkZFh7uyOVQOTeQI95P", 
    "1YMD5TFgtrtwb4csbwS0vVkxvzkfZr8eS", "18uUb5HSAHri8TeTrGxBmK_ew0MAIW4n6", "13dzfxxy_5nI4W5Scl5k6aF0nXkKQltSP", "11aUGqAALVRx51RKIKvPwcYiPNfIsszED", "15IGT_wWZIzVV1zZtaXy8ChMkCmzB6hW1", "1q_un6As7n2jonGjYBuxB7VX7EgswZd2Z", "1JdAUPLd0PM9KFvlQiAXivqtJptmMwXej", 
    "1boja7qIox58CYgzVPnPnqEtNXVwo82_2", "1-rdui1uubrR7L9VTlNVdFozeOL6iunWc", "1ziKVK7WRdUKir3ksCImTJf_8OCHwWLpR", "1D1i4pnUEy8SutFDL67JUSSMuRryQQwua", "1hyv9VtnmaGsaEYsDu-RTi-Jn47CIivjD", "1UGRI7Bik1IObq62ZHKKhOuzsTBDitb7I", "1s-ROHYU-LbRb-Dmb4hUxMudlnAXqtUw6", 
    "1Y5KkGamQGLzE6Ov8q-K9dB98zfnwviBL", "1J7PBghSchY5zyFj776ZUtaHzHo7PDxPO", "1NakJwOYz8uN5FLegTyhYyYSsHprCRmvv", "1eu88An_yPZteY4T3QBovsZOF_C6iY7it", "1lIZ8GSHz9A0kW3VaC_Jhg9ipSLjy7CwM", "1DTOkXUtNHa9UrANSi-O9tvtasK4cXxfc", "1C7blsW6aYPCv_jedXIEJ8p_3Gq6gcPue", 
    "1IhSGqJG-xDsXPtzsiq8KLv6svb1VhHcH", "1JdDcFMTGmJVS6yuW_a1Dhu3xsWJbN5_r", "1Jq0d694oBvZAMjM2kO3ZwmMsrOIOYYyq", "12kKT9gnAActSc8Ct1MYgnKYwa6joNnAZ", "1U-CC0efuw4yxW_UayWEwd4Dpbo7pXJmX", "1jj1tERgyMA-ZqUj4535G2xrkLsBoD53Z", "1YeNWPYsI9cLEhW-jTrgMOzSAJfEbjld6", 
    "1zmWGOATnyVcGc2tJN2IFypwsSpIRHQ68", "1xBhGhqSUp-_jFT0VQMTK7-JmVWS8MRMd", "1S7Hl_h1x4PPx-yDZeYZgQx6elV5KXg54", "1BpiyMLHIK-1U3t0_JrjZP3kz56hM3nGW", "1eZevRbeQC8rmq3IvR3LVB6f5eSZJOtsl", "1DZ2xaVZQSbfcC3XTenV7Qc0AGYV110JZ", "1GtV71zLis-KPzgbUx1pQaV-pDcLqZ2CV", 
    "1VrQKynmnRgGJdS35d7__astp1dCrzTZN", "1iEq1FQUNQPAARJfYIOxY3HxarYZAkJfj", "11Btuc7FhUw3yfHXk7NrSn6yr35xMx1q_", "1KEYXJei4XG3L26-CGoBCAAMzD3W1-C1I", "187Um7NrbWamzP91R4HMK3oVMwnH7gUPi", "1cVUGJT73NdzAMLDmHIy05m6ib_5fYFQD", "1lrWgUwDEHej1dY00C8CKXClp-z8FPqqC", 
    "1YsQRyePVZHH-07QlaTLD1f1lC3n2UNgB", "1VzRoVqT4kCla8D4IZ_5nbnTF2slFTf7P", "1j3FLunQwOqu9ChoJ6EC0t6fBJBWVZmYE", "11H7fDfCKbJgrmd_5Wm_5cswJlOO6nNIP", "128ZhrVrhT2cdxmoycKGvISAsFp25PPB2", "1s4was23sgAH75DvkBPL1QHNXGBdiPv4K", "1mqO1LbU8dSK9It9XlE-Z-eNDLwLhsIZ0", 
    "108DVrtoFIr_OhLEkQBYM1Gnb_mIIwHaB", "1jr0MyU5adDq-OB-S5anePNrX-afuEm3S", "1Q9jZp4psFMUfr_BwiL_z8zJFKcCHw2z6", "1RjXQp9QH4dMX6SgkrqyWDWLBwUnnurbN", "1jD9j3Kn8zLlj3gZM2FuWg_oYtK8dOoCO", "1GNgY38kJ9hqQProwM21ttwOWf34afr4d", "1ow-Cc02HYnQxD0Zmr4ICfSZrd0STExAQ", 
    "1sYZlCSVtXD4cdXKpryFBS4V8AiXTN-Q9", "1RrxiHId1_7V_GYWfKnMndrKsMFfAxnvd", "1ziLY-CayH4kmVWRqfAbbxu-aLCArLzKy", "1TmNHvjRsoK8SApTSIegGAGeIzUtHGFpP", "16QY89auG6NrcHe6odfgNl2y_A3dePXiQ", "1hyhI9ZWNyeSXFUJPFkCiKt5RIfWr9fT5", "1yWdCB9cgrrs0oQi-WpidO-bjsG4IH8IW", 
    "1MfnZsWKGppyihTaa5l6ANOqGLprqh5oV", "18gAOhlkcBxIkGbqtmmoL44bPOGFusR5E", "1-kVwzsyWl0VLRfN5ufVra0Kw10WNGUyn", "1sgDFp-UVQuytiLNFJED8RY10yI-QwP4I", "16RXxu0aD09an6C3yxIHwdALLXOocHjvV", "1DoN1vYMU0XYC_WZ-X4ntAavqV019eAdE", "1-wZTUGoZVVX0_qVd35vtb2EQkLTFCncQ", 
    "1-BLcRt1xx04MF6_ljDkgrlsBpqOxyR-e", "1BpyO5FWMNOHfn7w5Z6A7mAp1mCUkS0nX", "133L_wfZ8nJfW-vAZianWIhCAws-mjwAO", "1mwoeWpiO85yBxCytrEcCYLCllqSjFN0x", "1Ke1u8i6hApO3P_9V4B4ANQYK35UDhQL9", "1o550_RAFbrfV-oC9jU7VK0q6T5UO6iCl", "1KsM3wZs35d6w-qd-2FiVY2Hdftwu74Ro"
];

// State variables
let usedImages = new Set();
let availableImages = [...imageLinks];
let isLoading = false;
let allImagesRendered = false;
const imagesPerLoad = 10;
const checkInterval = 60000; // Check for new images every minute

// Function to extract image ID from Google Drive link
function extractImageId(url) {
    const match = url.match(/\/d\/([^/]+)/);
    return match ? match[1] : null;
}

// Function to check image.txt for new images
async function checkForNewImages() {
    // Skip checking for new images if running locally (file:// protocol)
    if (window.location.protocol === 'file:') {
        console.log('Running locally - skipping image.txt check');
        return;
    }

    try {
        const response = await fetch('image.txt');
        const text = await response.text();
        const lines = text.split('\n').filter(line => line.trim() !== '');
        
        const newIds = lines
            .map(line => extractImageId(line))
            .filter(id => id && !imageLinks.includes(id));

        if (newIds.length > 0) {
            console.log(`Found ${newIds.length} new images`);
            
            // Add new IDs to imageLinks and availableImages
            imageLinks = [...imageLinks, ...newIds];
            
            // Only add to availableImages if we haven't shown all images yet
            if (!allImagesRendered) {
                availableImages = [...availableImages, ...newIds];
            } else {
                // If we've shown all images, reset the gallery with the new complete set
                availableImages = [...imageLinks];
                allImagesRendered = false;
                usedImages.clear();
                
                // Remove end message if it exists
                const endMessage = document.querySelector('.end-message');
                if (endMessage) {
                    endMessage.remove();
                }
            }
        }
    } catch (error) {
        console.log('Skipping image.txt check:', error.message);
    }
}

// Get a random image ID that hasn't been used
function getRandomImage() {
    if (availableImages.length === 0) {
        allImagesRendered = true;
        return null;
    }

    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const imageId = availableImages.splice(randomIndex, 1)[0];
    usedImages.add(imageId);
    return imageId;
}

// Create a gallery item element
function createImageElement(imageId) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.setAttribute('data-image-id', imageId);
    div.onclick = () => openLightbox(div);

    const img = document.createElement('img');
    img.src = `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
    img.alt = 'Gallery Image';
    img.loading = 'lazy';

    div.appendChild(img);
    return div;
}

// Load more images into the gallery
function loadMoreImages() {
    if (isLoading || allImagesRendered) return;
    isLoading = true;

    const container = document.getElementById('gallery-container');
    let loadedCount = 0;
    let attemptsCount = 0;
    const maxAttempts = imagesPerLoad * 2; // To handle cases where some images might be duplicates

    while (loadedCount < imagesPerLoad && attemptsCount < maxAttempts) {
        const imageId = getRandomImage();
        attemptsCount++;

        if (imageId === null) {
            if (loadedCount === 0) {
                const endMessage = document.createElement('div');
                endMessage.className = 'end-message';
                endMessage.textContent = 'End of Gallery';
                container.appendChild(endMessage);
            }
            allImagesRendered = true;
            break;
        }

        // Check if this image is already displayed
        if (!document.querySelector(`[data-image-id="${imageId}"]`)) {
            const imageElement = createImageElement(imageId);
            container.appendChild(imageElement);
            loadedCount++;
        }
    }

    isLoading = false;

    // If we didn't load any images but haven't shown all images yet,
    // it means we hit duplicates - try loading again
    if (loadedCount === 0 && !allImagesRendered) {
        loadMoreImages();
    }
}

// Lightbox functionality
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const originalImg = document.querySelector(`[data-image-id="${currentImageId}"] img`);

    if (originalImg) {
        // Get the original image's position and size
        const rect = originalImg.getBoundingClientRect();

        // Animate back to thumbnail position
        lightboxImg.style.width = rect.width + 'px';
        lightboxImg.style.height = rect.height + 'px';
        lightboxImg.style.top = rect.top + 'px';
        lightboxImg.style.left = rect.left + 'px';
    }

    // Remove show class
    lightbox.classList.remove('show');

    // Wait for animation to complete
    setTimeout(() => {
        lightbox.style.display = 'none';
        // Reset styles
        lightboxImg.style.width = '';
        lightboxImg.style.height = '';
        lightboxImg.style.top = '';
        lightboxImg.style.left = '';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Track current image ID for closing animation
let currentImageId = null;

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const downloadLink = document.getElementById('download-link');
    const img = element.querySelector('img');

    // Store current image ID
    currentImageId = element.getAttribute('data-image-id');

    // Get the clicked image's position and size
    const rect = img.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate target size while maintaining aspect ratio
    const imgAspectRatio = img.naturalWidth / img.naturalHeight;
    let targetWidth = Math.min(viewportWidth * 0.9, img.naturalWidth);
    let targetHeight = targetWidth / imgAspectRatio;

    if (targetHeight > viewportHeight * 0.9) {
        targetHeight = viewportHeight * 0.9;
        targetWidth = targetHeight * imgAspectRatio;
    }

    // Set initial position and size
    lightboxImg.style.width = rect.width + 'px';
    lightboxImg.style.height = rect.height + 'px';
    lightboxImg.style.top = rect.top + 'px';
    lightboxImg.style.left = rect.left + 'px';

    // Show initial image
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;

    // Update download link
    downloadLink.href = `https://drive.google.com/uc?export=download&id=${currentImageId}`;

    // Force reflow
    lightboxImg.offsetHeight;

    // Add show class and set final position
    lightbox.classList.add('show');
    lightboxImg.style.width = targetWidth + 'px';
    lightboxImg.style.height = targetHeight + 'px';
    lightboxImg.style.top = ((viewportHeight - targetHeight) / 2) + 'px';
    lightboxImg.style.left = ((viewportWidth - targetWidth) / 2) + 'px';

    document.body.style.overflow = 'hidden';

    // Asynchronously load higher resolution image
    const highResImg = new Image();
    highResImg.onload = () => {
        lightboxImg.src = highResImg.src;
    };
    highResImg.src = `https://drive.google.com/thumbnail?id=${currentImageId}&sz=w2500`;
}

// Modified initialize function to include periodic checks
function initializeGallery() {
    // Add styles for end message
    const style = document.createElement('style');
    style.textContent = `
        .end-message {
            text-align: center;
            padding: 20px;
            font-size: 1.2em;
            color: #666;
            grid-column: 1 / -1;
            margin-top: 20px;
        }
        
        body.dark-theme .end-message {
            color: #ccc;
        }
    `;
    document.head.appendChild(style);

    // Load initial images
    loadMoreImages();

    // Set up infinite scroll with debounce
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
            if (!allImagesRendered && !isLoading &&
                (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 1000) {
                loadMoreImages();
            }
        }, 100); // Debounce scroll events
    });

    // Set up periodic checks for new images
    setInterval(checkForNewImages, checkInterval);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    initializeGallery();
}); 