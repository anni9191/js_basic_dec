class User {
    constructor(user) {
        this.name = user.name;
        this.age = user.age;
        this.img = `/Users/annakorenchuk/Desktop/JS/homework_17/images/users`;
        this.role = user.role;
        this.courses = user.courses || [];
    }

    render() {
        const userBlock = document.createElement('div');
        userBlock.classList.add('user-block');

        const imgElement = document.createElement('img');
        imgElement.src = this.img;
        imgElement.alt = this.name;
        userBlock.appendChild(imgElement);

        const infoElement = document.createElement('div');
        infoElement.innerHTML = `
            <p>Name: ${this.name}</p>
            <p>Age: ${this.age}</p>
            <p>Role: ${this.role}</p>
        `;
        userBlock.appendChild(infoElement);

        if (this.courses.length > 0) {
            const coursesElement = document.createElement('ul');
            coursesElement.innerHTML = this.renderCourses();
            userBlock.appendChild(coursesElement);
        }

        document.body.appendChild(userBlock);
    }

    renderCourses() {
        return this.courses.map(course => `<li>${course.title} - ${course.mark || course.score} (${gradation[course.mark || course.score] || ''})</li>`).join('');
    }
}

class Student extends User {
    constructor(user) {
        super(user);
    }
}

class Lector extends User {
    constructor(user) {
        super(user);
    }

    renderCourses() {
        return this.courses.map(course => `<li>${course.title} - ${course.studentsScore}/${course.score} (${gradation[course.studentsScore] || ''})</li>`).join('');
    }
}

class Admin extends User {
    constructor(user) {
        super(user);
    }
}

const usersData = [
    // данные пользователей
];

usersData.forEach(userData => {
    let user;
    switch (userData.role) {
        case "student":
            user = new Student(userData);
            break;
        case "lector":
            user = new Lector(userData);
            break;
        case "admin":
            user = new Admin(userData);
            break;
        default:
            user = new User(userData);
    }
    user.render();
});
