// //nyawa player 

// //tebakan player
// //angka di komputer
// var comp = Math.floor(Math.random() * 10) + 1;
// var hasil = '';
// var i = 1;
// var run = true;
// while(run){
    
//     var player = prompt('Masukan tebakan anda dari angka 1 - 10');
//     while(i<=3){
//         if(player == comp){
//             alert('TEPAT SEKALI :)');
//             i = 4;
//         }else if(player < comp ){
//             alert('Tebakan anda kurang besar :(');
//         }else if(player > comp){
//             alert('Tebakan anda kurang kecil :(');
//         }else{
//             alert('Masukan anda salah!');
//         }
//         if(i==3){
//             alert('Kamu kalah angkanya adalah '+comp);
//         }else if(i==4) {
//             alert('ANDA HEBAT')
//         }else{
//             alert('Tetap semangat! nyawa anda ' + i);

//         }
//         i++;
        
//     }

//     run = confirm('Coba lagi?')
// }






alert('Welcome to our game');
alert('Di game ini kamu harus menebak angka antara 1-10')
var run = true
while (run) {
    var bot = Math.floor(Math.random() * 10) + 1;

    console.log(bot)
    var i = 1
    while (i <= 3) {
        var game = prompt('Kesempatan' + i + '\nInput Your number.....')


        if (game == bot) {
            alert('Jawaban anda BENAR\nCongratulations you have been defeated computer....');
            i = 4;
        } else if (game > bot) {
            alert('angka yang anda masukkan besar')
        } else if (game < bot) {
            alert('angka yang anda masukkan kecil')
        } else {
            alert('SALAH')
        }
        if (i == 3) {
            alert('You lose, the number is ' + bot + ' ')
        } else if (i == 2) {
            alert('This is your last chance...')
        }

        i++;
    }

    run = confirm('do you want to play again?')
}
