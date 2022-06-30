module.exports = function reverse(n) {
    let x = '';
    n = String(n);
    let lengthX = n.length;

    for (let i = 0; i < n.length; i++) {
        if (n[lengthX - 1] != '-') {
            x = x + n[lengthX - 1];
            lengthX--;
        }

    }

    return x;
}
