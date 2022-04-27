const item1 = document.getElementById('soda');

item1.addEventListener('click', () => {
    item1.classList.toggle('picked');
});

const item2 = document.getElementById('cheese');

item2.addEventListener('click', () => {
    item2.classList.toggle('picked');
});