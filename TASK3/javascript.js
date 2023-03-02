//Verilmiş artan sıra ilə düzülmüş ədədlər siyahısındaki n ədədinin yerləşdiyi indexi tapan alqoritm (binary search)

let numbers = [4, 7, 13, 25, 31, 35];
let i;
let n = 25;
for (let i = 0; i < numbers.length; i++) {
    
        if (numbers[i]==n) {
            
            console.log(i);
 
        }
}
