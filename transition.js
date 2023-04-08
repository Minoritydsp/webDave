const button = document.querySelector('button');

button.addEventListener('click', function() {
    if (document.body.style.backgroundColor === '#1d1f27') {
        document.body.style.backgroundColor = '#282a36';
        button.style.backgroundColor = '#282a36';
    } else {
        document.body.style.backgroundColor = '#1d1f27';
        button.style.backgroundColor = '#05aff5';
    }
});
