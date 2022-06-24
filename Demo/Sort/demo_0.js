let points = [40, 100, 1, 5, 25, 10];
let i = 1;
points.sort(function (a, b) {
    console.log("lần so sánh thứ " + i);
    console.log("số so sánh thứ 1 là " + a);
    console.log("số so sánh thứ 2 là " + b);
    i++;
    console.log( a - b);
    return a - b

})
document.write( points)