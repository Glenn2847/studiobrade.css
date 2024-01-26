// script.js

// Standaard scrollen uitschakelen
$(document).on('mousewheel DOMMouseScroll touchmove', function(e) {
    e.preventDefault();
});

// Scrollify functie
$(function() {
    if(window.innerWidth >= 992) {
        $.scrollify({
            section : ".panel",
        });
    }

    // Voeg hier de rest van je bestaande code toe
    var hoverColor = '#74ce77';
    var scrollPosition = 0;

    $('a').hover(function() {
        $(this).css('color', hoverColor);
    }, function() {
        $(this).css('color', '');
    });

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

        if (scrollPos < vh * 0.93) {
            $('.menu-button.w-nav-button .menu-icon svg').css('color', '#74ce77');
            hoverColor = '#74ce77';
        } else if (scrollPos >= vh * 0.93 && scrollPos < vh * 1.93) {
            $('.menu-button.w-nav-button .menu-icon svg').css('color', '#d78e00');
            hoverColor = '#d78e00';
        } else if (scrollPos >= vh * 1.93 && scrollPos < vh * 2.93) {
            $('.menu-button.w-nav-button .menu-icon svg').css('color', '#afff00');
            hoverColor = '#afff00';
        } else if (scrollPos >= vh * 2.93) {
            $('.menu-button.w-nav-button .menu-icon svg').css('color', '#ed1111');
            hoverColor = '#ed1111';
        } else {
            $('.menu-button.w-nav-button .menu-icon svg').css('color', '#74ce77');
            hoverColor = '#74ce77';
        }
    });

    $('.menu-button.w-nav-button').on('click', function() {
        if ($('body').hasClass('no-scroll')) {
            $('body').removeClass('no-scroll').css('overflow', '');
            $(window).scrollTop(scrollPosition);
            $('body').css('top', '');
        } else {
            scrollPosition = $(window).scrollTop();
            $('body').addClass('no-scroll').css('overflow', 'hidden');
            $('body').css('top', -scrollPosition + 'px');
        }
    });

    function updateColors() {
        var links = document.querySelectorAll('.projecten-link');
        var borders = document.querySelectorAll('.projecten-link-border');
        var embeds = document.querySelectorAll('.html-embed-3');
        var vh = window.innerHeight;
        var scrollPosition = window.scrollY;

        var colorClass, borderColorClass;

        if (scrollPosition < 0.93 * vh) {
            colorClass = 'color1';
            borderColorClass = 'border-color1';
        } else if (scrollPosition < 1.93 * vh) {
            colorClass = 'color2';
            borderColorClass = 'border-color2';
        } else if (scrollPosition < 2.93 * vh) {
            colorClass = 'color3';
            borderColorClass = 'border-color3';
        } else {
            colorClass = 'color4';
            borderColorClass = 'border-color4';
        }

        links.forEach(function(link) {
            link.classList.remove('color1', 'color2', 'color3', 'color4');
            link.classList.add(colorClass);
        });

        borders.forEach(function(border) {
            border.classList.remove('border-color1', 'border-color2', 'border-color3', 'border-color4', 'color1', 'color2', 'color3', 'color4');
            border.classList.add(borderColorClass, colorClass);
        });

        embeds.forEach(function(embed) {
            embed.classList.remove('color1', 'color2', 'color3', 'color4');
            embed.classList.add(colorClass);
        });
    }

    window.addEventListener('load', updateColors);
    window.addEventListener('scroll', updateColors);
});
