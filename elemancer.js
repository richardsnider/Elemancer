function createElement(params) {
    //params.name must be snake case
    if(document.createElement(params.name).constructor !== HTMLElement)
        document.registerElement(params.name);

    var element = document.createElement(params.name);
	
	if(params.draggable) {
		element.addEventListener('mousedown', mouseDown, false);
		window.addEventListener('mouseup', mouseUp, false);
		
		function mouseUp() {
			window.removeEventListener('mousemove', elementMove, true);
		}
		
		function mouseDown(e) {
			window.addEventListener('mousemove', elementMove, true);
		}
		
		function elementMove(e){
			element.style.top = e.clientY + 'px';
			element.style.left = e.clientX + 'px';
		}
	}
	
	if(params.text) {
		element.innerHTML = '<br/>' + params.text;
	}

	if(params.name === 'form-button') {
		//element.style.setProperty("display", "block");
		
		element.addEventListener('click', function(e) {
		    alert('You clicked ' + element.name);
		});
	}
		
    return element;
}