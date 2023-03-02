// Verilmiş iki ədədlər siyahısından birincisinin ikincisinin içində olub olmadığını tapan alqoritm.Yəni birinci array-dəki ədədlərin hamısı 2ci array-də də varsa true çıxır output-a, hər hansısa biri yoxdursa false.

let nums1 = [2, 4, 9, 23, 47];
let nums2 = [2, 4, 6, 9, 23, 47];
let i=0;
let result;
for (i; i < nums1.length;  i++){
       if (nums1[i] == nums2[i]) {
         result = "True"       }
       else {
         result = "False"
        }
    }
    console.log(result);
    
    
    

