
  const editBtn = document.querySelector('.edit');
  const logoutBtn = document.querySelector('.logout');
  const editForm = document.getElementById('edit-form');
  const saveBtn = document.querySelector('.save');

  const nameSpan = document.getElementById('admin-name');
  const emailSpan = document.getElementById('admin-email');
  const nameInput = document.getElementById('new-name');
  const emailInput = document.getElementById('new-email');

  editBtn.addEventListener('click', () => {
    editForm.style.display = 'block';
    nameInput.value = nameSpan.textContent;
    emailInput.value = emailSpan.textContent;
  });

  saveBtn.addEventListener('click', () => {
    nameSpan.textContent = nameInput.value;
    emailSpan.textContent = emailInput.value;
    alert("Thông tin đã được cập nhật!");
    editForm.style.display = 'none';
  });

  logoutBtn.addEventListener('click', () => {
    if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      alert("Bạn đã đăng xuất!");
      window.location.href = "login.html";
    }
  });

