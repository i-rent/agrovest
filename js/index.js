
function showMore() {
    var listItems = document.querySelectorAll('.elementor-image-box-description li');


    listItems.forEach(function (item, index) {
        if (item.style.display === 'none') {
            item.style.display = 'inline';
        }
    });
    document.querySelector('button').style.display = 'none';
}


window.onload = function () {
    document.getElementById('readmore').addEventListener('click', showMore);
};

