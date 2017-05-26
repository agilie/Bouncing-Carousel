carousel = (function () {

    var box = document.querySelector('.bounce-carousel');
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');

    var counter = 0;
    var items = box.querySelectorAll('.content .bounce-carousel-item');
    var items_content = [
        {title: 'Fljazhka', property: 'Green color', price: '$90'},
        {title: 'Knife', property: 'Wood', price: '$10'},
        {title: 'Watch', property: 'Steel', price: '$990'}
    ];
    var amount = items.length;
    var current = items[0];
    items[1].classList.add('right');
    items[amount - 1].classList.add('left');

    box.classList.add('active');

    // navigate through the carousel

    function navigate(direction) {

        // hide the old current list item
        current.classList.remove('current');
        if (direction > 0) {
            current.classList.remove('right');
            current.classList.add('left');
        } else {
            current.classList.remove('left');
            current.classList.add('right');
        }

        items.forEach(function (item) {
            if (item !== current && direction) {
                if (direction >= 0) {
                    item.classList.remove('left');
                    item.classList.add('right');
                } else {
                    item.classList.remove('right');
                    item.classList.add('left');
                }
            }
        });

        counter = counter + direction;

        if (direction === -1 &&
            counter < 0) {
            counter = amount - 1;
        }

        if (direction === 1 && !items[counter]) {
            counter = 0;
        }

        current = items[counter];
        current.classList.add('current');

        document.querySelector('.hidden-on-small').innerHTML = items_content[counter].title;
        document.querySelector('.visible-on-small').textContent = items_content[counter].title + ' - ' + items_content[counter].price;
        document.querySelector('.img-description').innerHTML = items_content[counter].property;
        document.querySelector('.item-price').innerHTML = items_content[counter].price;
    }

    next.addEventListener('click', function () {
        navigate(1);
    });
    prev.addEventListener('click', function () {
        navigate(-1);
    });

    navigate(0);
})();

function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
var bounce = document.getElementById('bounce');
var pics = document.querySelectorAll('.pic');

function clicking() {
    eventFire(bounce, 'click');
}
pics.forEach(function (pic) {
    pic.addEventListener("mouseover", clicking, false);
    pic.addEventListener("mouseleave", clicking, false);
});
