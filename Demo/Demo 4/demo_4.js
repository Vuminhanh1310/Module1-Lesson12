let numbers = [-3, 5, 1, 3, 2, 10];
document.write("Dãy số ban đầu là: " + numbers + "<br>")
let max = numbers[0];
let index = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}
document.write("max: " + max + " at position " + index);