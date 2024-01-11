// Запитую у користувача ім'я
let firstname = prompt("Please insert your First Name:");
// Чищу від зайвих пробілів на початку та в кінці рядку
firstname = firstname.trim();

// Запитую у користувача прізвище
let surname = prompt("Please insert your Last Name:");
// Чищу від зайвих пробілів на початку та в кінці рядку
surname = surname.trim();

// Запитую у користувача його email
let email = prompt("Please insert your Email:");
// Чищу від зайвих пробілів на початку та в кінці рядку
email = email.replace(/\s/g, '');
// Приводжу до нижньго регістру
email = email.toLowerCase();

// Перевірки для email
if (!email.includes('@')) {
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (email.indexOf('@') === 0) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.lastIndexOf('@') === email.length - 1) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
}

// Запитую у користувача рік народження
let birthYear = prompt("Please insert your Year of Birth:");
// Чищу від всіх зайвих пробілів 
birthYear = birthYear.replace(/\s/g, '');

// У перемінній (або змінній) age вираховую актуальниій вік користувача
const currentYear = new Date().getFullYear();
const age = currentYear - parseInt(birthYear, 10);

// Показую дані користувача у вигляді списка, який промаркерований
document.body.innerHTML = `
    <h2>User Information:</h2>
    <ul>
        <li><b>First Name:</b> ${firstname}</li>
        <li><b>Last Name:</b> ${surname}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Age:</b> ${age}</li>
    </ul>
`;