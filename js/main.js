document.addEventListener('DOMContentLoaded', function() {
    
    var form = document.querySelector('.form');
    var submitButton = document.querySelector('.create-account-btn');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (checkForm()) {
            alert('Account created successfully!');
            console.log('Form is valid and submitted');
        }
    });
    
    function checkForm() {
        var isFormValid = true;
        
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var countryCode = document.getElementById('countryCode').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var agreeTerms = document.getElementById('terms').checked;
        
        clearErrors();
        
        if (firstName == '' || firstName == null) {
            showErrorMessage('firstName', 'Please enter your first name');
            isFormValid = false;
        }
        
        if (lastName == '' || lastName == null) {
            showErrorMessage('lastName', 'Please enter your last name');
            isFormValid = false;
        }
        
        if (email == '' || email == null) {
            showErrorMessage('email', 'Please enter your email');
            isFormValid = false;
        } else if (!isValidEmail(email)) {
            showErrorMessage('email', 'Please enter a valid email address');
            isFormValid = false;
        }
        
        if (password == '' || password == null) {
            showErrorMessage('password', 'Please enter a password');
            isFormValid = false;
        } else if (password.length < 6) {
            showErrorMessage('password', 'Password must be at least 6 characters');
            isFormValid = false;
        }
        
        if (countryCode == '' || countryCode == null) {
            showErrorMessage('countryCode', 'Please enter country code');
            isFormValid = false;
        }
        
        if (phoneNumber == '' || phoneNumber == null) {
            showErrorMessage('phoneNumber', 'Please enter your phone number');
            isFormValid = false;
        } else if (!isValidPhone(phoneNumber)) {
            showErrorMessage('phoneNumber', 'Please enter a valid phone number');
            isFormValid = false;
        }
        
        if (!agreeTerms) {
            alert('Please agree to the terms and conditions');
            isFormValid = false;
        }
        
        return isFormValid;
    }
    
    function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
    
    function isValidPhone(phone) {
        var numbersOnly = phone.replace(/[^0-9]/g, '');
        return numbersOnly.length >= 10;
    }
    
    function showErrorMessage(fieldId, message) {
        var field = document.getElementById(fieldId);
        field.style.borderColor = 'red';
        
        var errorText = document.createElement('div');
        errorText.innerHTML = message;
        errorText.style.color = 'red';
        errorText.style.fontSize = '12px';
        errorText.style.marginTop = '5px';
        errorText.className = 'error-msg';
        
        field.parentNode.appendChild(errorText);
    }
    
    function clearErrors() {
        var errorMessages = document.querySelectorAll('.error-msg');
        for (var i = 0; i < errorMessages.length; i++) {
            errorMessages[i].remove();
        }
        
        var inputs = document.querySelectorAll('input');
        for (var j = 0; j < inputs.length; j++) {
            inputs[j].style.borderColor = '#E1E5E9';
        }
    }
    
    submitButton.addEventListener('click', function() {
        this.style.transform = 'translateY(1px)';
        setTimeout(function() {
            submitButton.style.transform = '';
        }, 100);
    });
    
});
