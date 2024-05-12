document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.property-item button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const propertyDetails = this.parentNode;
            showModal(propertyDetails);
        });
    });
});

function showModal(details) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '5px';
    modalContent.style.minWidth = '300px';
    modalContent.innerHTML = `
        <h2>${details.querySelector('h3').textContent}</h2>
        <p>${details.querySelector('.price').textContent}</p>
        <p>${details.querySelector('.location').textContent}</p>
        <p>${details.querySelector('p:last-child').textContent}</p>
        <button onclick="closeModal(this)">Close</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

function closeModal(button) {
    const modal = button.parentNode.parentNode;
    document.body.removeChild(modal);
}
