$(document).ready(function(){
    $('#images img').on('click', function(){
        var currentimg = $(this).attr('src');
        var newimg=currentimg.replace('b.jpg','a.jpg');
        $(this).attr('src',newimg);
    })
})