
(function() {
count = 0;
el = document.querySelector("#clickCount");
var el1 = document.querySelector("#myBox");
function Counting(element){
	count += 1;
	element.childNodes[0].nodeValue = count;
	if (element.childNodes[0].nodeValue == 0){
		count=0;
		element.childNodes[0].nodeValue = count;
	}
}
el1.addEventListener("click", function(e){
	e.stopPropagation();
	Counting(el);
},false);

})();