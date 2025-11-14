const shareBtn = document.getElementById('share-button');
const shareOptions = document.getElementById('share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
    shareBtn.classList.toggle('active');
});