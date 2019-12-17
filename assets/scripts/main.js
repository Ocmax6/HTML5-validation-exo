
$('document').ready(function () {
    let myNames = [$('Max', 'John', 'Duplex', 'Andrea', 'Booba', 'Paul')];
    let myPass = [$('0123', '4567', '8910')]
    let name = $('nameform').val();
    let password = $('password').val();
    $('.submit').click(function () {
        if ($('nameform').val() == '' || $('password').val() == '') {
            alert('Complete all the informations');
        } else if ($('nameform').val() != $('myNames') || $('password').val() == $('myPass')) {
            alert('All informations no matches!');
        } else {
            $('.nameform').html(myNames);
            $('.password').html(myPass);
            alert('sending request to the server');
        }
    })

})
