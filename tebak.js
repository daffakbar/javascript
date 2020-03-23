
//tebakan player
//angka di komputer
var hasil = '';
var run = true;
while(run){
    var comp = Math.floor(Math.random() * 10) + 1;
    
    var i = 1;
    while(i<=3){
        var player = prompt('Masukan tebakan anda dari angka 1 - 10');
        if(player == comp){
            alert('TEPAT SEKALI :)');
            i = 4;
        }else if(player < comp ){
            alert('Tebakan anda kurang besar :(');
        }else if(player > comp){
            alert('Tebakan anda kurang kecil :(');
        }else{
            alert('Masukan anda salah!');
        }
        if(i==3){
            alert('Kamu kalah angkanya adalah '+comp);
        }else if(i==4) {
            alert('ANDA HEBAT')
        }
        // else{
        //     alert('Tetap semangat! anda memakai nyawa ke-' + i+' anda memiliki 3 kesempatan' );

        // }
        i++;
        
    }

    run = confirm('Coba lagi?')
}