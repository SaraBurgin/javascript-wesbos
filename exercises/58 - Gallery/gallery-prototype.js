function Gallery(gallery) {
        // Checking of the gallery
        if (!gallery) {
                throw new Error('No Gallery Found!');
        }
        // this.gallery = the gallery that was passed in.
        this.gallery = gallery;
        // Select the elements we need
        this.images = Array.from(gallery.querySelectorAll('img'));
        this.modal = document.querySelector('.modal');
        this.prevButton = this.modal.querySelector('.prev');
        this.nextButton = this.modal.querySelector('.next');

        // Bind out methods to the instance when we need them
        // We are creating an instance property of the same prototype(this.showNextImage) function but bound with this. Bind allows us to explicitly supply what this will be equal to.
        this.showNextImage = this.showNextImage.bind(this);
        this.showPrevImage = this.showPrevImage.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        // These are our event listeners!
        this.images.forEach(image => image.addEventListener('click', e => this.showImage(e.currentTarget)));
        this.modal.addEventListener('click', this.handleClickOutside);
        // Loop over each image and attach an event listener for each image, when that is keyup'd, check if it was enter, if so show that image
        this.images.forEach(image =>
                image.addEventListener('keyup', e => {
                        if (e.key === 'Enter') {
                                this.showImage(e.currentTarget);
                        }
                })
        );
}

// MY FUNCTIONS START HERE

// When someone clicks on the modal we have to update the modal with the associated image and pop-it up
Gallery.prototype.openModal = function() {
        console.info('Opening Modal...');
        // Check if the modal is already open
        if (this.modal.matches('.open')) {
                console.info('Modal already open');
                // stop the function from running
        }
        this.modal.classList.add('open');
        // Event listeners to be bound when we open the modal
        window.addEventListener('keyup', this.handleKeyUp);
        this.nextButton.addEventListener('click', this.showNextImage);
        this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function() {
        this.modal.classList.remove('open');
        // Here we remove the event listeners for clicks and keyboard to clean up after ourselves when the modal is closed
        window.removeEventListener('keyup', this.handleKeyUp);
        this.nextButton.removeEventListener('click', () => this.showNextImage());
        this.prevButton.removeEventListener('click', this.showPrevImage);
};

Gallery.prototype.handleClickOutside = function(e) {
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
                this.closeModal();
        }
};

Gallery.prototype.handleKeyUp = function(e) {
        if (e.key === 'Escape') return this.closeModal();
        if (e.key === 'ArrowRight') return this.showNextImage();
        if (e.key === 'ArrowLeft') return this.showPrevImage();
};

Gallery.prototype.showNextImage = function() {
        console.log(this);
        this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
};

Gallery.prototype.showPrevImage = function() {
        this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
};

Gallery.prototype.showImage = function(el) {
        if (!el) {
                console.info('no image to show');
                return;
        }
        // update the modal with this info
        console.log(el);
        this.modal.querySelector('img').src = el.src;
        this.modal.querySelector('h2').textContent = el.title;
        this.modal.querySelector('figure p').textContent = el.dataset.description;
        this.currentImage = el;
        this.openModal();
};

// Use it on the page
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
