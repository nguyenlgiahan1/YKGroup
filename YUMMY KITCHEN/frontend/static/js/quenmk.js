document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "../../templates/Login&SignUp/login.html";
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (!email) {
            alert("Vui lòng nhập email.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Vui lòng nhập đúng định dạng email.");
            return;
        }
        alert(`Nếu email "${email}" tồn tại trong hệ thống, bạn sẽ nhận được hướng dẫn khôi phục mật khẩu.`);
        form.reset();
    });
});