var a=13;
var flag=0;
for(i=1;i<=a;i++){
    if(a%i==0){
        flag++;
    }
}
if(flag==2){
    console.log("Prime Number");
}else{
    console.log("Not Prime Number");
}