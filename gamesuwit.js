var tanya = true;
while(tanya == true) {
    var hasil = '';
    //tentukan pilihan player
    var player = prompt('Pilhan : batu, gunting, kertas')
    //tentukan pilihan computer
    var comp = Math.random();
    if(comp <= 0.34){
        comp = 'batu';
    }else if(comp >= 0.35 && comp <= 0.66){
        comp = 'gunting';
    }else{
        comp = 'kertas'
    }
    //tentukan aturan game
    if(player == comp){
        hasil = 'SERI!';
    }else if(player == 'gunting'){
        // if(comp == 'kertas'){
        //     hasil = 'MENANG :)';
        // }else{
        //     hasil = 'KALAH :(';
        // }
        hasil = (comp == 'gunting') ? 'MENANG :)' : 'KALAH :(';
    }else if(player == 'kertas'){
        // if(comp == 'batu'){
        //     hasil = 'MENANG :)';
        // }else{
        //     hasil = 'KALAH :(';
        // }
        hasil = (comp == 'batu') ? 'MENANG :)' : 'KALAH :(';
    }else if(player == 'batu'){
        // if(comp == 'gunting'){
        //     hasil = 'MENANG :)';
        // }else{
        //     hasil = 'KALAH :(';
        // }
        hasil = (comp == 'gunting') ? 'MENANG :)' : 'KALAH :(';
    }else{
        hasil = 'pilihan anda tidak terdaftar!';
    }
    //hasil
alert('Pilihan anda : '+player+ ' pilihan komputer adalah '+comp +'\n Anda '+ hasil);
tanya = confirm('Apakah anda mau coba lagi?');
}
