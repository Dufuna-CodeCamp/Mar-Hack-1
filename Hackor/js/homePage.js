let btns = document.querySelectorAll('.track-list-items');
console.log(btns);

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location.href = './career_page.html';
    });
});