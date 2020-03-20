var jmlAngkot = 10;
var noAngkot = 1;
var angkotJalan = 8;

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= 6 && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang beroprasi Baik!')
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang Lembur!')
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang Tidak beroprasi!')
    }
}