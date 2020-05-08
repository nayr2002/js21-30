function countEvens(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            count++;
        }
    }
    return count;
}

function countHi(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str.substring(i, i+2) == "hi"){
            count++;
        }
    }
    return count;
}

function no14(arr){
    var is1 = false;
    var is4 = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            is1 = true;
        }
        if(arr[i] == 4){
            is4 = true;
        }
        if(is4 == true && is1 == true){
            return false;
        }
    }
    return true;
}

function either24(arr){
    var double2 = false;
    var double4 = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 2 && arr[i + 1] == 2) {
            double2 = true;
        }
        if(arr[i] == 4 && arr[i + 1] == 4) {
            double4 = true;
        }
    }
    if(double2 == true && double4 == true){
        return false;
    }
    if(double2 == true || double4 == true){
        return true;
    }
    return false;
}

function makeChocolate(small, big, goal){
    if (goal % 5 <= small && goal / 5 <= big){
        return goal % 5;
    }
    if (goal / 5 > big && small >= (goal - big * 5)){
        return goal- big * 5;
    }
    return -1;
}

function luckySum(a, b, c){
    var arr = [a,b,c];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 13){
            return sum;
        }
        sum += arr[i];
    }
    return sum;
}

function maxBlock(str){
    var length = str.length;
    var block = 0;
    var blocktemp = 1;
    if(length == 0){
        return 0;
    }
    for(var i = 0; i < length; i++){
        if(i < length-1 && str.charAt(i) == str.charAt(i+1)) {
            blocktemp++;
        } else {
            blocktemp = 1;
        }
        if(blocktemp > block){
            block = blocktemp;
        }
    }
    return block;
}

function linearIn(outer, inner){
    var matches = 0;
    var k = 0;
    if(inner.length == 0){
        return true;
    }
    for(var i = 0; i < outer.length; i++){
        if(outer[i] == inner[k]){
            matches++;
            k++;
        } else if(outer[i] > inner[k]){
            return false;
        }

        if(matches == inner.length){
            return true;
        }
    }
    return false;
}

function countTriple(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) == str.charAt(i+1) && str.charAt(i+1) == str.charAt(i+2)){
            count++;
        }
    }
    return count;
}

function sameEnds(str){
    var final = "";
    var temp = "";
    if(str.length == 1){
        return;
    }
    for(var i = 1; i < str.length; i++){
        temp+=str.charAt(i);
        if(i < str.length/2 && temp == str.substring(str.length - temp.length, str.length)){
            final = temp;
        }
    }
    return final;
}

function tester() {
    document.getElementById("output").innerHTML += countEvens([1,2,3]);
    document.getElementById("output").innerHTML += countHi("sumhisum");
    document.getElementById("output").innerHTML += no14([1,3,4]);
    document.getElementById("output").innerHTML += either24([1,2,3,4]);
    document.getElementById("output").innerHTML += makeChocolate([3,7,5]);
    document.getElementById("output").innerHTML += luckySum([1,13,3]);
    document.getElementById("output").innerHTML += maxBlock("aaaaaaaaalll");
    document.getElementById("output").innerHTML += linearIn([1,2,3,4],[2,4])
    document.getElementById("output").innerHTML += countTriple("aaabbb");
    document.getElementById("output").innerHTML += sameEnds("abXYab");
    //test third method, etc
}