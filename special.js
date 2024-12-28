document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Course added to cart!");
        });
    });
});
