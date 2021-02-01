const arry = [1,2,3,4,5];

arry.forEach(function(v, i, ary) {
    console.log(v);
});

// arry.forEach(v => console.log(v));

for(let i = 0; i < arry.length; i++) {
    const v = arry[i];
    console.log(v);
}


// forEachメソッドでは第一引数に配列の値,第二引数に添字,第三引数に配列が渡ってくる。