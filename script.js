function script() {
    $('.button').on('click', () => {
        const name = $('#name').val()
        const email = $('#email').val()
        const subject = $('#subject').val()
        const message = $('#message').val()
        const validate = (exp) => {
            const regex = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i
            return regex.test(exp)
        }
        function MessageObj(name, email, subject, message) {
            this.name = name,
            this.email = email,
            this.subject = subject,
            this.message = message
        }
        if (name.length === 0 || email.length === 0 || subject.length === 0 || message.length === 0) {
            window.alert('You must fill out all fields!')
        } else if (!validate(email)) {
            window.alert('Please enter a valid e-mail adress')
        } else if (message.length > 60) {
            window.alert('Your message has to bee up to 60 characters including spaces')
        } else {
            const theMessage = new MessageObj(name, email, subject, message)
            console.log(JSON.stringify(theMessage)) //lets say it sends message to the server here
        }       
    })
    $('.facebook').on('click', () => {
        window.open('https://www.facebook.com/BiznesPort/')
    })
    $('.dot-item').on('click', function() {
        if ($(this).attr('class') !== 'dot-item dot-active') {
            $(this).toggleClass('dot-active')
        }
        $(this).siblings().removeClass('dot-active')
        if ($(this).attr('id') === 'dot1') {
            $('#slide1').attr('class', 'slide-active')
            $('#slide1').siblings().attr('class', 'slide-inactive')
        } else if ($(this).attr('id') === 'dot2') {
            $('#slide2').attr('class', 'slide-active')
            $('#slide2').siblings().attr('class', 'slide-inactive')
        } else if ($(this).attr('id') === 'dot3') {
            $('#slide3').attr('class', 'slide-active')
            $('#slide3').siblings().attr('class', 'slide-inactive')
        }
    })
}