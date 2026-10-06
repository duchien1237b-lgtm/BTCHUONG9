function removecolor() {
    let ds = document.getElementById('colorSelect');
    if (ds.selectedIndex >= 0) {
        ds.remove(ds.selectedIndex);
    }
}
