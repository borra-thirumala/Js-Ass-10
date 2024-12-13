var aos = ["mom", "js", "malayalam", "html", "css", "dad"];
var op = [];

//using for loop
for (var i = 0; i < aos.length; i++) {
    var str = aos[i];
    var str1 = "";

    for (var j = str.length - 1; j >= 0; j--) {
        str1 += str[j];
    }

    if (str === str1) {
        op.push(str);
    }
}
console.log(op);


//using do-while loop
var aos = ["mom", "js", "malayalam", "html", "css", "dad"];
var op = [];
var i = 0;

do {
    var str = aos[i];
    var str1 = "";
    var j = str.length - 1;

    do {
        str1 += str[j];
        j--;
    } while (j >= 0);

    if (str === str1) {
        op.push(str);
    }
    i++;
} while (i < aos.length);
console.log(op);
