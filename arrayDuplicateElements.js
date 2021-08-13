let a =[1,2,2,3,4,4,4,5,5]
let b =[]

for(let i=0; i< a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}
 console.log(b);

 console.log ("The Length of the b array is :", b.length);
 console.log( )
 