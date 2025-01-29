document.addEventListener("DOMContentLoaded", function () {
    const studentBtn = document.getElementById("studentBtn");
    const parentBtn = document.getElementById("parentBtn");
    studentBtn.addEventListener("click", function () {
        studentBtn.classList.add("bg-blue-500", "text-white");
        parentBtn.classList.remove("bg-blue-500", "text-white");
        parentBtn.classList.add("bg-white", "text-black");
    });
    parentBtn.addEventListener("click", function () {
        parentBtn.classList.add("bg-blue-500", "text-white");
        studentBtn.classList.remove("bg-blue-500", "text-white");
        studentBtn.classList.add("bg-white", "text-black");
    });
    const passwordInput = document.getElementById("passwordInput");
    const togglePassword = document.getElementById("togglePassword");
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "Berkitish";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "Ko‘rsatish";
        }
    });
    const qrBtn = document.getElementById("qrBtn");
    const qrModal = document.getElementById("qrModal");
    const closeQr = document.getElementById("closeQr");
    qrBtn.addEventListener("click", function () {
        qrModal.classList.remove("hidden");
    });
    closeQr.addEventListener("click", function () {
        qrModal.classList.add("hidden");
    });
    
});
document.addEventListener("DOMContentLoaded", function () {
    const changeLang = document.getElementById("changeLang");

    changeLang.addEventListener("click", function () {
        if (changeLang.textContent === "O'ZB") {
            changeLang.textContent = "ENG";
            document.documentElement.lang = "en";
        } else {
            changeLang.textContent = "O'ZB";
            document.documentElement.lang = "uz";
        }
    });
});
