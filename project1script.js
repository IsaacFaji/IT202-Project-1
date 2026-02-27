// ===============================
// GLOBAL DESIGNER ARRAY (10 Designers)
// ===============================
const designers = [
    {first:"John", last:"Smith", password:"@A1bc", id:"123", phone:"123-456-7890 ext123", email:"john@ll.com"},
    {first:"Mary", last:"Jones", password:"#B2cd", id:"234", phone:"222-333-4444 ext234", email:"mary@ll.com"},
    {first:"Alex", last:"Brown", password:"$C3ef", id:"345", phone:"333-444-5555 ext345", email:"alex@ll.com"},
    {first:"Lisa", last:"White", password:"%D4gh", id:"456", phone:"444-555-6666 ext456", email:"lisa@ll.com"},
    {first:"Mark", last:"Taylor", password:"&E5ij", id:"567", phone:"555-666-7777 ext567", email:"mark@ll.com"},
    {first:"Emma", last:"Davis", password:"*F6kl", id:"678", phone:"666-777-8888 ext678", email:"emma@ll.com"},
    {first:"Ryan", last:"Clark", password:"!G7mn", id:"789", phone:"777-888-9999 ext789", email:"ryan@ll.com"},
    {first:"Olivia", last:"Hall", password:"^H8op", id:"890", phone:"888-999-0000 ext890", email:"olivia@ll.com"},
    {first:"Noah", last:"Allen", password:"?I9qr", id:"901", phone:"999-000-1111 ext901", email:"noah@ll.com"},
    {first:"Ava", last:"Young", password:"+J1st", id:"012", phone:"111-222-3333 ext012", email:"ava@ll.com"}
];


// ===============================
// PASSWORD SHOW / HIDE
// ===============================
document.addEventListener("DOMContentLoaded", function() {

    const toggle = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");

    toggle.addEventListener("click", function() {

        if (passwordField.type === "password") {
            passwordField.type = "text";
            toggle.textContent = "🙈";
        } else {
            passwordField.type = "password";
            toggle.textContent = "👁";
        }
    });

});


// ===============================
// VALIDATE FUNCTION
// ===============================
function validate() {

    let first = document.getElementById("firstName");
    let last = document.getElementById("lastName");
    let phone = document.getElementById("phone");
    let id = document.getElementById("designerID");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmBox = document.getElementById("emailConfirm");

    // REGEX PATTERNS
    let nameRegex = /^[A-Za-z]+$/;
    let idRegex = /^\d{3}$/;
    let phoneRegex = /^\d{3}[- ]?\d{3}[- ]?\d{4}\s?ext\d+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{1,4}$/;
    let passwordRegex = /^[^A-Za-z0-9](?=.*[A-Z])(?=.*\d).{1,6}$/;


    if (!nameRegex.test(first.value)) {
        alert("First name must contain letters only.");
        first.focus();
        return;
    }

    if (!nameRegex.test(last.value)) {
        alert("Last name must contain letters only.");
        last.focus();
        return;
    }

    if (!idRegex.test(id.value)) {
        alert("Designer ID must be exactly 3 digits.");
        id.focus();
        return;
    }

    if (!phoneRegex.test(phone.value)) {
        alert("Phone must be 10 digits with extension (Example: 123-456-7890 ext123).");
        phone.focus();
        return;
    }

    if (!passwordRegex.test(password.value)) {
        alert("Password must start with a special character, contain 1 uppercase letter, 1 number, and be max 6 characters.");
        password.focus();
        return;
    }

    if (confirmBox.checked) {
        if (!emailRegex.test(email.value)) {
            alert("Enter valid email (must contain @ and domain 1-4 letters).");
            email.focus();
            return;
        }
    }

    // If all validation passes
    verify();
}


// ===============================
// VERIFY FUNCTION
// ===============================

function normalizePhone(phone) {
    return phone
        .toLowerCase()
        .replace(/[-\s]/g, ""); // remove dashes and spaces
}

function verify() {

    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let id = document.getElementById("designerID").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let transaction = document.getElementById("transaction").value;
    let confirmBox = document.getElementById("emailConfirm").checked;

    for (let d of designers) {

        if (d.first === first &&
            d.last === last &&
            d.password === password &&
            d.id === id &&
            normalizePhone(d.phone) === normalizePhone(phone) &&
            (!confirmBox || d.email === email)) {

            alert("Welcome " + first + " " + last +
                  ". You selected: " + transaction);
            return;
        }
    }

    alert("Designer " + first + " " + last + " cannot be found.");
}