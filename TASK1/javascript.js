//Verilmiş ədədlər siyahısını artan sıra ilə düzülmüş ədədlər halına gətirən alqoritm.

let numbers = [3, 7, 1, 37, 9, 12];
let i;
let j;
let x;
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] < numbers[j]) {
            x = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = x;
            
        }
        
    }
    
}
console.log(numbers);

