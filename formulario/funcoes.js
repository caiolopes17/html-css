function calc_total(){
    let qtde= parseInt(document.documentElementByid("cqtde").value)
    total = qtde * 3800
    document.getElementById('ctot').value = total
}