$('#errorMsg').hide();
$('#amountError').hide();
$('#bankError').hide();
$('#account-name-error').hide();
$('#iban-error').hide();
$('#swift-code-error').hide();
$('#datacard-2').hide();
$('#datacard-3').hide();

$('#button').click(function (e) {
    if ($('.amount').val() === '') {
        $('#amountError').show().delay(3000).fadeOut();
        $('#button').html('Continue');
    }

    if ($('#country').find(":selected").text() === '--Select Country--') {
        $('#button').html('Continue');
        $('#errorMsg').show().delay(3000).fadeOut();
    }

    if ($('#bank').find(":selected").text() === '--Select Bank--') {
        $('#button').html('Continue');
        $('#bankError').show().delay(3000).fadeOut();
    }

    if ($('.amount').val() !== '' && $('#country').find(":selected").text() !== '--Select Country--' && $('#bank').find(":selected").text() !== '--Select Bank--') {
        $('#button').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            $('#datacard-1').hide();
            $('#datacard-2').show();
        }, 1000)
    }
})

$('#btn').click(function (e) {
    if ($('.field-input-1').val() === '') {
        $('#account-name-error').show().delay(3000).fadeOut();
        $('#btn').html('Continue');
    }

    if ($('.field-input-2').val() === '') {
        $('#iban-error').show().delay(3000).fadeOut();
        $('#btn').html('Continue');
    }

    if ($('.field-input-3').val() === '') {
        $('#swift-code-error').show().delay(3000).fadeOut();
        $('#btn').html('Continue');
    }

    if ($('.field-input-1').val() !== '' && $('.field-input-2').val() !== '' && $('.field-input-3').val() !== '') {
        $('#btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            $('#datacard-2').hide();
            $('#datacard-3').show();
        }, 1000)
    }
})