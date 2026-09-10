function reverse(str){
    let chars = str.split("");
    let left =0;
    let right = chars.length -1
    while(left<right){
        [chars[right],chars[left]] =[chars[left],chars[right]]
        left++;
        right--;
    }
    return chars.join("")
}


console.log(reverse("hello"));