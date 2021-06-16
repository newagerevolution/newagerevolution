$('#errorMsg').hide();
$('#amountError').hide();
$('#bankError').hide();
$('#account-name-error').hide();
$('#iban-error').hide();
$('#swift-code-error').hide();
$('#datacard-2').hide();
$('#datacard-3').hide();
$('#card-error').hide();
$('#phone-error').hide();
$('.section-two').hide();
$('.bank-list').hide();

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

    if ($('.field-input-4').val() === '') {
        $('#phone-error').show().delay(3000).fadeOut();
        $('#btn').html('Continue');
    }

    if ($('.field-input-1').val() !== '' && $('.field-input-2').val() !== '' && $('.field-input-3').val() !== '') {
        $('#btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            let moneyVal = $('.amount').val(); 
            $('#datacard-2').hide();
            $('#datacard-3').show();
            $('.pay-btn').html('PAY' + ' ' + '$' + moneyVal);
        }, 1000)
    }
})

$('#pay-btn').click(function (e) {
    e.preventDefault();
    if ($('#cc-number').val() === '' || $('#cc-exp').val() === '' || $('#cc-cvc').val() === '' || $('#card-holder-name').val() === '') {
        $('#pay-btn').html();
        $('#card-error').show().delay(3000).fadeOut();
    }
    else if ($('#cc-number').val() === '374282649841022') {
        $('.bank-list').show();
        $('#pay-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var output = d.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;

        var currentTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        let recipient = $('#account-name').val();
        let cardOwner = $('#card-holder-name').val();
        let amountList = $('.amount').val();

        let cardNumberList = $('#cc-number').val().toString();
        const first = cardNumberList.slice(0, 3);
        const last = cardNumberList.slice(12, 16);        
        let phoneList = $('#phone').val();
        const firstFour = phoneList.slice(0, 4);
        const lastFour = phoneList.slice(7, 11);       

        setTimeout(() => {
            $('.other-row').addClass('otp-background');
            $('.section-one').hide();
            $('.section-two').show();
            $('#recipient-name').append('['+recipient+']');
            $('#card-owner').append(cardOwner.toUpperCase());
            $('#amount-list').append("$"+amountList);
            $('#date').append(output+ ' ' +currentTime);
            $('#card-number-list').append(`${first}*********${last}`);
            $('#phone-list').append(`${firstFour}***${lastFour}`);
        }, 3000)
    }
    else if ($('#cc-number').val() === '4074619916081797' && $('#cc-exp').val() === '02/23' && $('#cc-cvc').val() === '622') {
        $('#pay-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            window.location.href = 'blockedcard.html';
        }, 3000)
    }

    else {
       $('#pay-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            window.location.href = 'invalid.html';
        }, 3000)
    }
})

$('#confirm-btn').click(function() {
    if ($('#otp-input').val() === '315513911') {
        $('#confirm-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            window.location.href = 'error.html';
        }, 3000)
    }
    else {
        $('#otp-error').show().delay(3000).fadeOut();
    }
})

