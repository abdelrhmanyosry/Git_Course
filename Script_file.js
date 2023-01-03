
$(document).ready(function () {

    let TheValue = 0
    $('body').on('keyup', function () {
        SlideUp();
        SlideDown();
        function Incremeant(counter_value) {

            if (event.keyCode === 38) {
                counter_value += 1
                TheValue = counter_value
                return counter_value, TheValue;
            }
        }
        function Decrement(counter_value) {
            if (event.keyCode === 40) {

                counter_value -= 1;
                TheValue = counter_value
                return counter_value, TheValue;
            }
        }

        function SlideUp() {
            if (event.keyCode === 38) {
                console.log('KeyUp')
                let count = Incremeant(TheValue);
                if (count == 1) {
                    $('main').css({
                        transform: 'translate(-100%, 0)',
                        transition: 'transform 1.5s ease-in-out'
                    });
                }

                if (count == 2) {
                    $('.sec-1').css({
                        transform: 'translate(0, -100%)',
                        transition: 'transform 1s ease-in-out'
                    });
                }

                if (count == 3) {
                    $('.sec-2').css({
                        transform: 'translate(100%, 0)',
                        transition: 'transform 1.5s ease-in-out'
                    });
                }
                if (count == 4) {
                    $('.sec-3').css({
                        transform: 'translate(100%, 0)',
                        transition: 'transform 1.5s ease-in-out'
                    });
                }
            }
        }
        function SlideDown() {
            if (event.keyCode === 40) {
                console.log('KeyDown')
                let count = Decrement(TheValue);
                if (count == 0) {
                    $('main').css({
                        transform: 'translate(0, 0)',
                        transition: 'transform 1s ease-in-out'
                    });
                }

                if (count == 1) {
                    $('.sec-1').css({
                        transform: 'translate(0, 0)',
                        transition: 'transform 1s ease-in-out'
                    });
                }

                if (count == 2) {
                    $('.sec-2').css({
                        transform: 'translate(0, 0)',
                        transition: 'transform 1s ease-in-out'
                    });
                }

                if (count == 3) {
                    $('.sec-3').css({
                        transform: 'translate(0, 0)',
                        transition: 'transform 1s ease-in-out'
                    });
                }
            }
        }
    });
});


$('body').keydown(function (e) {
    console.log(event.key)

});
//Important Thing that i learn

// event.keyCode it select the keyboard code and make the event according it