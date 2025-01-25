//your JS code here. If required.
let currelement=document.getElementById("level")
telement=currelement
while(telement)
	{
		dom++;
		telement=telement.parent;
	}
alert(`The level of the element is: ${dom}`);