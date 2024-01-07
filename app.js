let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
const allItem = document.querySelectorAll('.item')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')

    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')

    document.querySelector('.slide').prepend(items[items.length - 1]);
})

allItem.forEach(item => {
    item.addEventListener('click', () => {
        let currItems = document.querySelectorAll('.item')
        let index = Array.from(currItems).indexOf(item);
        if (index <= 1) {
            return
        }

        document.querySelector('.slide').prepend(item)
        document.querySelector('.slide').prepend(currItems[0])
    })
});


