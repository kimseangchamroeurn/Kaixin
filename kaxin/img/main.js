function openPopup() {
    const popup = document.getElementById('popupContainer');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popupContainer');
    popup.style.display = 'none';
}

// Close popup when clicking outside
document.getElementById('popupContainer').addEventListener('click', function(event) {
    if (event.target === this) {
        closePopup();
    }
});

function handleSearch(event) {
    event.preventDefault();
    const searchTerm = event.target.querySelector('input').value;
    console.log('Searching for:', searchTerm);
    // Add your search logic here
}

function clearSearch(button) {
    const input = button.parentElement.querySelector('input');
    input.value = '';
    input.focus();
}

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const recipeSections = document.querySelectorAll('.recipe-section');

    // Show malatang-diy section by default
    document.getElementById('malatang-diy-section').classList.add('active');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');

            const selectedCategory = this.dataset.category;

            // Hide all sections first
            recipeSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the selected section
            if (selectedCategory === 'malatang-diy') {
                document.getElementById('malatang-diy-section').classList.add('active');
            } else if (selectedCategory === 'signature') {
                document.getElementById('signature-section').classList.add('active');
            } else if (selectedCategory === 'noodles') {
                document.getElementById('noodles-section').classList.add('active');
            } else if (selectedCategory === 'desserts') {
                document.getElementById('desserts-section').classList.add('active');
            } else if (selectedCategory === 'set'){
                document.getElementById('set-section').classList.add('active');
            }else if (selectedCategory === 'combo'){
                document.getElementById('combo-section').classList.add('active');
            }else if (selectedCategory === 'side-dishes'){
                document.getElementById('sideDishes-section').classList.add('active');
            }else if (selectedCategory === 'soft-drink'){
                document.getElementById('softDrink-section').classList.add('active');
            }
            

            // Handle ingredient filters
            
        });
    });
});