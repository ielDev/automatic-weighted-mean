
let no1,no2,no3,no4,no5,n,gay1,gay2,gay3,gay4,gay5,kok,Ans,roundAns


document.getElementById("submitBtn").onclick = function(){
no1 = document.getElementById("num1").valueAsNumber
no2 = document.getElementById("num2").valueAsNumber
no3 = document.getElementById("num3").valueAsNumber
no4 = document.getElementById("num4").valueAsNumber
no5 = document.getElementById("num5").valueAsNumber


no1 = isNaN(no1) ? 0 : no1;
no2 = isNaN(no2) ? 0 : no2;
no3 = isNaN(no3) ? 0 : no3;
no4 = isNaN(no4) ? 0 : no4;
no5 = isNaN(no5) ? 0 : no5;

n = no1 + no2 + no3 + no4 + no5

console.log(n)

gay1 = no1 * 5
gay2 = no2 * 4
gay3 = no3 * 3
gay4 = no4 * 2
gay5 = no5 * 1

fx = gay1 + gay2 + gay3 + gay4 + gay5

console.log(fx)

Ans = fx/n


roundAns = Ans.toFixed(2)
console.log(roundAns)

document.getElementById("meanUI").innerHTML = roundAns;

}




