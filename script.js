


 var change1 = function(){
    document.getElementById('click1');
    document.write("Thanks");
 }
    function moveButton() {
        const button = document.getElementById('click2');
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
 }