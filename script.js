// JavaScript

document.querySelector('.article button').addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.article').classList.add('blur');
    document.querySelector('span').classList.add('on');
})

document.querySelector('span.hide').addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blur');
    document.querySelector('span').classList.remove('on');
})




//    // jQuery part 1

//     // 'buy now!' click
// $('.article button').on('click', function () {
//     $('.modal-wrap').addClass('active');
//     $('.article').addClass('blur');
//     $('span').addClass('on');
// })

//     // 'X' click
// $('span.hide').on('click', function () {
//     $('.modal-wrap').removeClass('active');
//     $('.article').removeClass('blur');
//     $('span').removeClass('on');
// })




//     // jQuery part 2
// $('.article button, span.hide').on('click', function () {
//     $('.modal-wrap').toggleClass('active');
//     $('.article').toggleClass('blur');
//     $('span').toggleClass('on')
// })