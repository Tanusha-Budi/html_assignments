function Reverse(a) {
    let temp = a;
    let sum = 0;
    let rem;

    while (temp != 0) {
        rem = temp % 10;
        sum = sum * 10 + rem;
        temp = Math.floor(temp / 10);
    }
    return console.log(sum);
}

Reverse(987);

function Maximum(a, b, c) {
    d = Math.max(a, b, c);

    console.log(d);
}

Maximum(23, 75, 93);
