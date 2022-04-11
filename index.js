let users = [
    {email: 'rim@mail.ru',
    password: 'qwerty'
    },
    {email: 'rim.31@mail.ru',
    password: 'qwerty'
    },
    {email: 'rim31@mail.ru',
    password: 'qwerty'
    },
    {email: 'rim98@mail.ru',
    password: 'qwerty'
    },
]

const auth = () => {
    const email = document.getElementById('email').value
    const pass = document.getElementById('password'). value
    
    let counter = 0

    users.forEach(element => {
        if (element.email === email && element.password === pass) {
            document.getElementById('email').value = ''
            document.getElementById('password').value = ''
            counter++
        }
    })
    if (counter === 0) {
        alert('Неверные логин и пароль')
    } else {
        alert('Успешная авторизация')
    }
}

const openRegisterForm = () => {
    document.getElementById('entrance').style.display = 'none'
    document.getElementById('registration').style.display = 'inline'
}

const openEntranceForm = () => {
    document.getElementById('registration').style.display = 'none'
    document.getElementById('entrance').style.display = 'inline'
}

const registration = () => {
    const emailRegister = document.getElementById('email-register').value
    const passRegister = document.getElementById('password-register'). value
    
    let newUser = {
        email: emailRegister,
        password: passRegister,
    }
    
    users.push(newUser)

    alert('Вы успешно зарегистрировались')
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    openEntranceForm()
}

document.getElementById('btn').addEventListener('click', () => auth())

document.getElementById('register').addEventListener('click', () => openRegisterForm())

document.getElementById('enter').addEventListener('click', () => openEntranceForm())

document.getElementById('btn-register').addEventListener('click', () => registration())