var angka = prompt('masukan angka:');

switch (angka) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
        alert('angka di yang anda masukan <= 5');
        break;
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
        alert('angka di yang anda masukan >= 5 dan <=10');
        break;
    default:
        alert('angka yang anda masukan >=10');
        break;
}