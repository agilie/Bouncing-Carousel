carousel = (function () {

    // Read necessary elements from the DOM once
    var box = document.querySelector('.bounce-carousel');
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');

    // Define the global counter, the items and the
    // current item
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
            if (item != current && direction) {
                if (direction >= 0) {
                    item.classList.remove('left');
                    item.classList.add('right');
                } else {
                    item.classList.remove('right');
                    item.classList.add('left');
                }
            }
        });

        // calculate th new position
        counter = counter + direction;

        // if the previous one was chosen
        // and the counter is less than 0
        // make the counter the last element,
        // thus looping the carousel
        if (direction === -1 &&
            counter < 0) {
            counter = amount - 1;
        }

        // if the next button was clicked and there
        // is no items element, set the counter
        // to 0
        if (direction === 1 && !items[counter]) {
            counter = 0;
        }

        // set new current element
        // and add CSS class
        current = items[counter];
        current.classList.add('current');

        document.querySelector('.hidden-on-small').innerHTML = items_content[counter].title;
        document.querySelector('.visible-on-small').textContent = items_content[counter].title + ' - ' + items_content[counter].price;
        document.querySelector('.img-description').innerHTML = items_content[counter].property;
        document.querySelector('.item-price').innerHTML = items_content[counter].price;
    }

    // add event handlers to buttons
    next.addEventListener('click', function (ev) {
        navigate(1);
    });
    prev.addEventListener('click', function (ev) {
        navigate(-1);
    });

    // show the first element
    // (when direction is 0 counter doesn't change)
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


