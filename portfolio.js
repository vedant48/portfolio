document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.gallery ul li a').forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            var itemID = this.getAttribute('href');
            document.querySelector('.gallery ul').classList.add('item_open');
            document.querySelector(itemID).classList.add('item_open');
        });
    });

    document.querySelector('.close').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.port, .gallery ul').classList.remove('item_open');
    });

    document.querySelectorAll('.gallery ul li a').forEach(function (element) {
        element.addEventListener('click', function () {
            document.querySelector('html, body').animate({
                scrollTop: parseInt(document.querySelector("#top").offsetTop)
            }, 400);
        });
    });
});

$(document).ready(function () {
    // Open item on click
    $('.gallery ul li a').click(function () {
        var itemID = $(this).attr('href');
        $(itemID).addClass('item_open');
        $('.gallery ul').addClass('item_open');
        $('header').addClass('item_open'); // Add this line to hide the header

        // Scroll to the top of the .item2 element
        $('.item2').scrollTop(0);

        return false;
    });

    // Close item on clicking close button
    $('.close').click(function () {
        $('.port, .gallery ul').removeClass('item_open');
        $('header').removeClass('item_open'); // Add this line to show the header
        return false;
    });

    // Scroll to top on item click
    $(".gallery ul li a").click(function () {
        $('html, body').animate({
            scrollTop: parseInt($("#top").offset().top)
        }, 400);
    });

    // Toggle close icon and header visibility based on item open
    function toggleVisibility() {
        var isItemOpen = $('.port').hasClass('item_open');
        $('.close').toggle(isItemOpen);
        $('header').toggle(!isItemOpen);
    }

    // Initial check and update on page load
    toggleVisibility();

    // Update close icon and header visibility on item open/close
    $('.gallery ul li a, .close').click(function () {
        toggleVisibility();
    });
});




