function insert_Row() {
    let bang = document.getElementById('sampleTable');
    let dong = bang.insertRow(-1);
    let so = bang.rows.length;
    dong.insertCell(0).innerHTML = 'Row' + so + ' cell1';
    dong.insertCell(1).innerHTML = 'Row' + so + ' cell2';
}
