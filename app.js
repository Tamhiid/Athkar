var counter = document.querySelector('.counter');
var athkar_counter = document.getElementById('athkar_counter')
var reset = document.querySelector('.reset')

var count = 1


// athkar_counter = 2
counter.addEventListener('click', function(){
    athkar_counter.textContent = count++
})


reset.addEventListener('click', function(){
    athkar_counter.textContent = 0;
    count = 1
})


