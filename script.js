//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function () {
            const squares = document.querySelectorAll('.square');

            squares.forEach(square => {
                square.addEventListener('mouseover', function () {
                    square.style.backgroundColor = 'skyblue';
                });

                square.addEventListener('mouseout', function () {
                    setTimeout(() => {
                        square.style.backgroundColor = 'lightgray';
                    }, 1000);
                });
            });
        });
