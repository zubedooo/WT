
function circ_area(r) {
	ar = 3.14 * r * r;
	console.log('\nCircle area is :'+ar);
}

function rect_area(a,b) {
	ar = a*b;
	console.log('\nRectangle area is :'+ar);
}

function tri_area(a,b) {
	ar = 0.5*a*b;
	console.log('\nTriangle area is :'+ar);
}
module.exports = { circ_area,rect_area,tri_area}


