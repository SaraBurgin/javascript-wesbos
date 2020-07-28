function Gallery(gallery) {
        if (!Gallery) {
                throw new Error('No Gallery Found!');
        }
        // Select the elements we need
        const images = Array.from(gallery.querySelectorAll('img'));
        const modal = document.querySelector('.modal');
        const prevButton = modal.querySelector('.prev');
        const nextButton = modal.querySelector('.next');
        let currentImage;
        // When someone clicks on the modal we have to update the modal with the associated image and pop-it up
        function openModal() {
                console.info('Opening Modal...');
                // Check if the modal is already open
                if (modal.matches('.open')) {
                        console.info('Modal already open');
                        // stop the function from running
                }
                modal.classList.add('open');
                // Event listeners to be bound when we open the modal
                window.addEventListener('keyup', handleKeyUp);
                nextButton.addEventListener('click', showNextImage);
                prevButton.addEventListener('click', showPrevImage);
        }

        function closeModal() {
                modal.classList.remove('open');
                // Here we remove the event listeners for clicks and keyboard to clean up after ourselves when the modal is closed
                window.removeEventListener('keyup', handleKeyUp);
                nextButton.removeEventListener('click', showNextImage);
                prevButton.removeEventListener('click', showPrevImage);
        }

        function handleClickOutside(e) {
                console.log(e.target);
                console.log(e.currentTarget);
                if (e.target === e.currentTarget) {
                        closeModal();
                }
        }

        function handleKeyUp(e) {
                if (e.key === 'Escape') return closeModal();
                if (e.key === 'ArrowRight') return showNextImage();
                if (e.key === 'ArrowLeft') return showPrevImage();
        }

        function showNextImage() {
                showImage(currentImage.nextElementSibling || gallery.firstElementChild);
        }

        function showPrevImage() {
                showImage(currentImage.previousElementSibling || gallery.lastElementChild);
        }

        function showImage(el) {
                if (!el) {
                        console.info('no image to show');
                        return;
                }
                // update the modal with this info
                console.log(el);
                modal.querySelector('img').src = el.src;
                modal.querySelector('h2').textContent = el.title;
                modal.querySelector('figure p').textContent = el.dataset.description;
                currentImage = el;
                openModal();
        }

        function handleImageClick(e) {
                showImage(e.currentTarget);
        }

        // These are our event listeners
        images.forEach(image => image.addEventListener('click', handleImageClick));
        modal.addEventListener('click', handleClickOutside);
        // Loop over each image and attach an event listener for each image, when that is keyup'd, check if it was enter, if so show that image
        images.forEach(image => image.addEventListener('keyup', e => if(e.key === 'Enter') {
          showImage(e.currentTarget)
        }))
}

// Use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
