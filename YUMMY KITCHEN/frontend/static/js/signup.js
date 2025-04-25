document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const passwordInput = inputs[4];
    const confirmPasswordInput = inputs[5];
    const emailInput = inputs[3];
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      for (let input of inputs) {
        if (input.value.trim() === '') {
          alert('❗ Vui lòng điền đầy đủ thông tin!');
          input.focus();
          return;
        }
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert('❗ Email không hợp lệ!');
        emailInput.focus();
        return;
      }
      if (passwordInput.value.length < 8) {
        alert('❗ Mật khẩu phải có ít nhất 8 ký tự!');
        passwordInput.focus();
        return;
      }
      if (passwordInput.value !== confirmPasswordInput.value) {
        alert('❗ Mật khẩu không khớp!');
        confirmPasswordInput.focus();
        return;
      }
      alert('✅ Đăng ký thành công!');
    });
  });
  