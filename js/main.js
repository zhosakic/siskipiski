
document.getElementById('test-slide').onmousemove = function (event) {
    var x = event.offsetX;
    console.log(x);
    document.getElementById('two').style.width = x + 'px';
}