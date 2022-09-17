var str="naman";
var bag="";
for(i=str.length-1;i>=0;i--){
	bag+=str[i];
}
if(str==bag){
	console.log(true);
}else{
	console.log(false);
}