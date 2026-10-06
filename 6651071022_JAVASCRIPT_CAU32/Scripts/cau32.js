function display_random_image() {
    let ds = [
        ['http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg', 240, 160],
        ['http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg', 320, 195],
        ['http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg', 500, 343]
    ];
    let k = Math.floor(Math.random() * ds.length);
    let img = document.createElement('img');
    img.src = ds[k][0];
    img.width = ds[k][1];
    img.height = ds[k][2];
    let khung = document.getElementById('anh');
    khung.innerHTML = '';
    khung.appendChild(img);
}
