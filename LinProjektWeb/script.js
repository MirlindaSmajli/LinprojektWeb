// Handle scrolling to fix the header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const heroHeight = document.querySelector('#hero').offsetHeight;

    if (window.scrollY > heroHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

// Toggle the menu
const menuButton = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});

// Close the menu when clicking outside
document.addEventListener('click', function (event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickInsideButton = menuButton.contains(event.target);

    // If the click is outside the menu and the button, close the menu
    if (!isClickInsideMenu && !isClickInsideButton) {
        navMenu.classList.remove('show');
    }
});

// Open the modal when an image is clicked
function openModal(img) {
    event.preventDefault(); // Prevent default behavior

    // Create the modal structure
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    // Create a container for modal content
    const contentContainer = document.createElement('div');
    contentContainer.className = 'modal-content-container';
    
    // Create the close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };
    
    // Create the image element for the modal
    const modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modalImg.src = img.src;
    
    // Create the caption
    const caption = document.createElement('div');
    caption.id = 'caption';
    caption.innerHTML = img.alt;
    
    // Append elements to the content container
    contentContainer.appendChild(modalImg);
    contentContainer.appendChild(caption);
    
    // Append elements to the modal
    modal.appendChild(closeButton);
    modal.appendChild(contentContainer);
    document.body.appendChild(modal);
    
    // Display the modal
    modal.style.display = 'flex'; // Use flex to center the content

    // Add event to close modal when clicking outside of the image
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}
