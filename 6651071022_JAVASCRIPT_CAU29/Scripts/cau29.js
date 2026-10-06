function getFormvalue() {
    let f = document.getElementById('form1');
    alert('Họ và tên: ' + f.elements['fname'].value + ' ' + f.elements['lname'].value);
    return false;
}
