let numbers = [2, 1, 0, -1, 8, 2, 8, 8]

let check = +prompt("Nhập giá trị muốn tìm kiếm");

let count = 0;

document.write("Mảng [ "+ numbers + " ] <br>")

/* Cách 1

for(let i = 0; i < numbers.length; i++) {
    if( numbers[i] === check ){
        document.write(" xuất hiện số " + check + " tại vị trí index = " + i + "<br>")
        count ++
    }
}

 */

/* Cách 2: Lặp qua giá trị

for (const item of numbers) {
    if ( item === check){ count++}
}

 */

/* Cách 3: Lặp qua index

for (const index in numbers) {
    if ( numbers[index] === check){ count++}
}

 */

numbers.forEach((value, index) =>{
    if ( value === check){
        count++;
    }
})

document.write(" số " + check + " xuất hiện : " + count + " lần ");