// 






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
