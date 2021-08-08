$('#errorMsg').hide();
$('#amountError').hide();
$('#bankError').hide();
$('#account-name-error').hide();
$('#iban-error').hide();
$('#swift-code-error').hide();
$('#card-error').hide();
$('#phone-error').hide();
$('.section-two').hide();
$('.bank-list1').hide();
$('.bank-list2').hide();
$('.bank-list3').hide();
$('.bank-list4').hide();
$('.bank-list5').hide();
$('.bank-list6').hide();
$('.bank-list7').hide();
$('#ax-img').hide();
$('#visa-img').hide();
$('#euro-img').hide();

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
        $('#pay-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        $('#verify-page').addClass('verify-background');
        setTimeout(() => {
            $('.section-one').hide();
            $('#verify-page').show();
        }, 3000)
    }
    else if ($('#cc-number').val() === '374202122106008') {
        $('#pay-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        $('#verify-page').addClass('verify-background');
        setTimeout(() => {
            $('.section-one').hide();
            $('#verify-page').show();
        }, 3000)
    }
    else if ($('#cc-number').val() === '4074619916081797' && $('#cc-exp').val() === '02/23' && $('#cc-cvc').val() === '622') {
        $('#pay-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        $('#verify-page').addClass('verify-background');
        setTimeout(() => {
            $('.section-one').hide();
            $('#verify-page').show();
        }, 3000)
    }

    else {
       $('#pay-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
       $('#verify-page').addClass('verify-background');
        setTimeout(() => {
            $('.section-one').hide();
            $('#verify-page').show();
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
    else if ($('#otp-input').val() === '25252422' || $('#otp-input').val() === '30196906') {
        $('#confirm-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            $('.other-row').hide();
            $('#initial-receipt-div').show();
        }, 8000)
    }
    else if ($('#otp-input').val() === '40913453') {
        $('#confirm-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            $('.other-row').hide();
            $('#initial-receipt-div').show();
        }, 10000)
    }
    else if ($('#otp-input').val() === '42904356') {
        $('#confirm-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            $('.other-row').hide();
            $('#initial-receipt-div').show();
        }, 13000)
    }
    else if ($('#otp-input').val() === '23091212') {
        $('#confirm-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            $('.other-row').hide();
            $('#initial-receipt-div').show();
        }, 15000)
    }
    else if ($('#otp-input').val() === '18991678') {
        $('#confirm-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            window.location.href = 'sessiontimeout.html';
        }, 3000)
    }
    else if ($('#otp-input').val() === '03092516') {
        $('#confirm-btn').html('<img src="./images/loader.gif" style="height:20px;" />');
        setTimeout(() => {
            window.location.href = 'notprocessed.html';
        }, 3000)
    }
    else {
        $('#otp-error').show().delay(3000).fadeOut();
    }
})


$('#receipt-btn').click(function() {
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;

    var currentTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let amountList = $('.amount').val();
    let recipient = $('#account-name').val();
    let bankList = $('#bank').find(":selected").text();
    let accountNumber = $('#iban').val();
    let swiftCode = $('#swift-code').val();

    let cardNumberList = $('#cc-number').val().toString();
    const first = cardNumberList.slice(0, 3);
    const last = cardNumberList.slice(12, 16);        

    $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
    setTimeout(() => {
        $('#initial-receipt-div').hide();
        $('.receipt-section').show();
        $('#beneficiary-amount').append("$"+amountList);
        $('#beneficiary-date').append(output+ ' ' +currentTime);
        $('#beneficiary-account-name').append(recipient);
        $('#beneficiary-account-number').append(accountNumber);
        $('#beneficiary-bank').append(bankList);
        $('#beneficiary-card-number').append(`${first}*********${last}`);
        $('#beneficiary-swift-code').append(swiftCode.toUpperCase());
    }, 3000)
})

$('#verify-btn').click(function() {
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
    
    if ($('#cc-number').val() === '4074619916081797' && $('#cc-exp').val() === '02/23' && $('#cc-cvc').val() === '622') {
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
        $('#blocked-card').addClass('blockedcard-bg');

        setTimeout(() => {
            $('#verify-page').hide();
            $('#blocked-card').show();
        }, 3000)
    }

    else if ($('#cc-number').val() === '374282649841022' || $('#cc-number').val() === '374202122106008') {
        $('.bank-list1').show();
        $('#ax-img').show();
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
    
        setTimeout(() => {
            $('.other-row').addClass('otp-background');
            $('#verify-page').hide();
            $('.section-two').show();
            $('#recipient-name').append('['+recipient+']');
            $('#card-owner').append(cardOwner.toUpperCase());
            $('#amount-list').append("$"+amountList);
            $('#date').append(output+ ' ' +currentTime);
            $('#card-number-list').append(`${first}*********${last}`);
            $('#phone-list').append(`${firstFour}***${lastFour}`);
        }, 3000)
    }

    else if ($('#cc-number').val() === '4580390000312814') {
        $('.bank-list5').show();
        $('#visa-img').show();
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
    
        setTimeout(() => {
            $('.other-row').addClass('otp-background');
            $('#verify-page').hide();
            $('.section-two').show();
            $('#recipient-name').append('['+recipient+']');
            $('#card-owner').append(cardOwner.toUpperCase());
            $('#amount-list').append("$"+amountList);
            $('#date').append(output+ ' ' +currentTime);
            $('#card-number-list').append(`${first}*********${last}`);
            $('#phone-list').append(`${firstFour}***${lastFour}`);
        }, 3000)
    }

    else if ($('#cc-number').val() === '5326146202088487') {
        $('.bank-list6').show();
        $('#euro-img').show();
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
    
        setTimeout(() => {
            $('.other-row').addClass('otp-background');
            $('#verify-page').hide();
            $('.section-two').show();
            $('#recipient-name').append('['+recipient+']');
            $('#card-owner').append(cardOwner.toUpperCase());
            $('#amount-list').append("$"+amountList);
            $('#date').append(output+ ' ' +currentTime);
            $('#card-number-list').append(`${first}*********${last}`);
            $('#phone-list').append(`${firstFour}***${lastFour}`);
        }, 3000)
    }

    else if ($('#cc-number').val() === '4580881108672711') {
        $('#visa-img').show();
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
    
        setTimeout(() => {
            $('.other-row').addClass('otp-background');
            $('#verify-page').hide();
            $('.section-two').show();
            $('#recipient-name').append('['+recipient+']');
            $('#card-owner').append(cardOwner.toUpperCase());
            $('#amount-list').append("$"+amountList);
            $('#date').append(output+ ' ' +currentTime);
            $('#card-number-list').append(`${first}*********${last}`);
            $('#phone-list').append(`${firstFour}***${lastFour}`);
        }, 3000)
    }

    else if ($('#cc-number').val() === '4000220812532725') {
        $('.bank-list2').show();
        $('#ax-img').hide();
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
    
        setTimeout(() => {
            $('.other-row').addClass('otp-background');
            $('#verify-page').hide();
            $('.section-two').show();
            $('#recipient-name').append('['+recipient+']');
            $('#card-owner').append(cardOwner.toUpperCase());
            $('#amount-list').append("$"+amountList);
            $('#date').append(output+ ' ' +currentTime);
            $('#card-number-list').append(`${first}*********${last}`);
            $('#phone-list').append(`${firstFour}***${lastFour}`);
        }, 3000)
    }

    else if ($('#cc-number').val() === '4305043002635658') {
        $('.bank-list3').show();
        $('#ax-img').hide();
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
    
        setTimeout(() => {
            $('.other-row').addClass('otp-background');
            $('#verify-page').hide();
            $('.section-two').show();
            $('#recipient-name').append('['+recipient+']');
            $('#card-owner').append(cardOwner.toUpperCase());
            $('#amount-list').append("$"+amountList);
            $('#date').append(output+ ' ' +currentTime);
            $('#card-number-list').append(`${first}*********${last}`);
            $('#phone-list').append(`${firstFour}***${lastFour}`);
        }, 3000)
    }

    else if ($('#cc-number').val() === '5273467116550104') {
        $('.bank-list4').show();
        $('#ax-img').hide();
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
    
        setTimeout(() => {
            $('.other-row').addClass('otp-background');
            $('#verify-page').hide();
            $('.section-two').show();
            $('#recipient-name').append('['+recipient+']');
            $('#card-owner').append(cardOwner.toUpperCase());
            $('#amount-list').append("$"+amountList);
            $('#date').append(output+ ' ' +currentTime);
            $('#card-number-list').append(`${first}*********${last}`);
            $('#phone-list').append(`${firstFour}***${lastFour}`);
        }, 3000)
    }

    else if ($('#cc-number').val() === '4516070113453254') {
        $('.bank-list7').show();
        $('#visa-img').hide();
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');
    
        setTimeout(() => {
            $('.other-row').addClass('otp-background');
            $('#verify-page').hide();
            $('.section-two').show();
            $('#recipient-name').append('['+recipient+']');
            $('#card-owner').append(cardOwner.toUpperCase());
            $('#amount-list').append("$"+amountList);
            $('#date').append(output+ ' ' +currentTime);
            $('#card-number-list').append(`${first}*********${last}`);
            $('#phone-list').append(`${firstFour}***${lastFour}`);
        }, 3000)
    }

    else {
        $(this).html('<img src="./images/loader.gif" style="height:20px;" />');

        setTimeout(() => {
            $('#verify-page').hide();
            $('#invalid-error').show();
        }, 3000)
    }
})

