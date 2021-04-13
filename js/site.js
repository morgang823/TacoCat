function reverseString() {
    //Get User's word
    let userWord = document.getElementById("tacoCat").value;
    let cleanedWord = userWord.replace(/\W+/gm, "");
    cleanedWord = cleanedWord.toLowerCase();
    let start = cleanedWord.length - 1;
    let reverseWord = "";
    for (let i = start; i >= 0; i--) {
        reverseWord = reverseWord += cleanedWord[i];

    }
    let output = document.getElementById("tacoResults");
    output.innerText = reverseWord;
    //Palendrome Validation
    let trueFalseOutput = document.getElementById("palindrome");
    if (cleanedWord === reverseWord) {
        trueFalseOutput.innerText = "This is a palindrome";
    } else {
        trueFalseOutput.innerText = "This is not a palindrome";
    }
}
//EmailFunction
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_8d9b1di';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                swal({
                    title: "Message Sent!",
                    text: "I will respond within 24-48 hours!",
                    icon: "success",
                    button: "Back To Site!",
                })
            }, (err) => {
                btn.value = 'Send Email';
                swal({
                    title: "Error!",
                    text: "Ooops, looks like something went wrong!",
                    icon: "error",
                    button: "Try Again!",
                });
                alert(JSON.stringify(err));
            });
    });