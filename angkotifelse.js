var jmlAngkot = 10;
var noAngkot = 1;
var angkotJalan = 6;

for(noAngkot = noAngkot + 1 ; noAngkot <= jmlAngkot; noAngkot++ ){
    if (noAngkot <= 6) {
        console.log('Angkot No.' + noAngkot + ' beroprasi dengan BAIK');
    }else{
        console.log('Angkot No.' + noAngkot + ' TIDAK beroprasi');
    }
}