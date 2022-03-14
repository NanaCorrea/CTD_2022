function alteraTema() {
    let body = document.querySelector('body')
    body.classList.toggle('bodyDark')
    let h1 = document.querySelector('h1')
    h1.classList.toggle('darkTitle')

    let itemsList = document.querySelectorAll('.item')
    itemsList.forEach(item => {
        item.classList.toggle('darkItem');
        item.classList.toggle('darkH2');
    });
}