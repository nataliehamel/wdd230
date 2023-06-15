function setTimestamp() {
    var datetimeField = document.getElementById('form-loaded-datetime');
    datetimeField.value = new Date().toLocaleString();
}