var b = document.querySelector("#bt");

var sq = document.querySelectorAll('td');

function clearBoard(){
    for (var i = 0; i< sq.length; i++){
        sq[i].textContent='';
    }
}
b.addEventListener('click', clearBoard);

//change marker
function changeMarker() {
    if (this.textContent===''){
        this.textContent='X';
    }else if(this.textContent==='X'){
        this.textContent='O';
    }else{
        this.textContent='';
    }
}
for (var i=0; i<sq.length; i++) {
    sq[i].addEventListener('click',changeMarker)
}





