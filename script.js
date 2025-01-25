//your JS code here. If required.
let currelement=document.getElementById("level")
telement=currelement;
let dom=0;
while(telement)
	{
		dom++;
		telement=telement.parentElement;
	}
alert(`The level of the element is: ${dom}`);