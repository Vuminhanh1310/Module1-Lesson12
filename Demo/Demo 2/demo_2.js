let x = [-3, 5, 1, 3, 2, 10];
document.write("Dãy số ban đầu " + x + '<br>');
let first = 0;
let last = x.length - 1;
while (first < last) {
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}
document.write(" Dãy số sau khi đảo ngược " + x);