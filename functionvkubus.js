function volumekubus(a,b) {
    var volume ;
    var k1;
    var k2;
    k1 = a*a*a;
    k2 = b*b*b;

    volume = k1 + k2;
    return volume;
}
alert(volumekubus(5,5));