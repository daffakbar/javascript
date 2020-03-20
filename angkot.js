var jmlAngkot = 10;
var noAngkot = 1;
var angkotJalan = 8
while( noAngkot <= angkotJalan )
{
    console.log('Angkot No. '+ noAngkot + ' beroprasi dengan baik');
    noAngkot++;
}
for( noAngkot = angkotJalan + 1 ; noAngkot <= jmlAngkot ; noAngkot++ )
{
    console.log('Angkot No. '+ noAngkot + ' beroprasi dengan tidak baik');
}