function validateForm() {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let idCard = document.getElementById('idCard');
    let faculty = document.getElementById('faculty');
    let birthDate = document.getElementById('birthDate');
  
    let valid = true;
  
    if (!/^[А-Яа-я]{6}\s[А-Я]\.[А-Я]\.$/.test(name.value)) {
      name.style.borderColor = 'red';
      valid = false;
    } else {
      name.style.borderColor = '';
    }
    
    if (!/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phone.value)) {
      phone.style.borderColor = 'red';
      valid = false;
    } else {
      phone.style.borderColor = '';
    }
  
    if (!/^[А-Я]{2}\s№\d{6}$/.test(idCard.value)) {
      idCard.style.borderColor = 'red';
      valid = false;
    } else {
      idCard.style.borderColor = '';
    }
  
    if (!/^[А-Я]{4}$/.test(faculty.value)) {
      faculty.style.borderColor = 'red';
      valid = false;
    } else {
      faculty.style.borderColor = '';
    }
  
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthDate.value)) {
      birthDate.style.borderColor = 'red';
      valid = false;
    } else {
      birthDate.style.borderColor = '';
    }
  
    if (valid) {
        document.getElementById("outputTable").style.display = "table";
        document.getElementById("outputName").innerText = name.value;
        document.getElementById("outputPhone").innerText = phone.value;
        document.getElementById("outputIdCard").innerText = idCard.value;
        document.getElementById("outputFaculty").innerText = faculty.value;
        document.getElementById("outputBirthDate").innerText = birthDate.value;
      }
}