document.addEventListener('scroll', function() {
    let e = document.querySelector('h3');
    console.log(e.textContent);
    e.innerText = "changing quote"
    console.log(e.textContent);
});