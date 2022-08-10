// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
    var paginationItem = document.createElement('li');

  // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);

  // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
    paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);


// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Loop Through All Bullets Items
for (var i = 0; i < paginationCreatedUl.children.length; i++) {
    paginationCreatedUl.children[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        // Do Nothing
        return false;
    } 
    else {
        // Increment Current Slide
        currentSlide++;
        // Trigger The Checker Function
        theChecker();
    }

}

// Prev Slide Function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        // Do Nothing
        return false;
    } 
    else {
        // Decrement Current Slide
        currentSlide--;
        // Trigger The Checker Function
        theChecker();
    }

}

// Create The Checker Function
function theChecker() {
    // Get The Current Slide
    slideNumberElement.textContent = "Slide # " + (currentSlide) + " of " + (slidesCount);

    // Remove All Active Classes From Images and Pagination Bullets
    removeAllActive();
    
    // If Current Slide Is The Last Slide
    if (currentSlide === slidesCount) {
        // Set The Next Button To The Disabled Class
        nextButton.classList.add('disabled');
    }
    // If Current Slide Is Not The Last Slide
    else {
        // Remove The Disabled Class From The Next Button
        nextButton.classList.remove('disabled');
    }

    // If Current Slide Is The First Slide
    if (currentSlide === 1) {
        // Set The Prev Button To The Disabled Class
        prevButton.classList.add('disabled');
    }
    // If Current Slide Is Not The First Slide
    else {
        // Remove The Disabled Class From The Prev Button
        prevButton.classList.remove('disabled');
    }

    //  Set The Current Slide To The Active Class
    sliderImages[currentSlide-1].classList.add('active');
    paginationCreatedUl.children[currentSlide -1 ].classList.add('active');
}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

    // Remove The Active Class From All Other Items
    for (var i = 0; i < slidesCount; i++) {
            sliderImages[i].classList.remove('active');
            paginationCreatedUl.children[i].classList.remove('active');
    }

}
