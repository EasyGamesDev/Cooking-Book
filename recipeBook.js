$(window).on('load', function() {
	$('#content').css("display", "block");
	$('.loader').delay(350).fadeOut(500);
	$('body').delay(1000).css("overflow", "visible"); 
});
var textarea = document.getElementById("recipeInp");
var heightLimit = 100;
textarea.oninput = function() {
	textarea.style.height = "";
	textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};
$('#contentBlocker').hide(0);
$('.addRecipeDiv').hide(0);
$('.subFood').hide(0);
$('.addDeleteDiv').hide(0);
function toggleThis(variable, el) {
	if (variable) {
		$(el).slideDown(500);
	} if(!variable) 
    {$(el).slideUp(300)}
} 
function deleteAll() {
	showRecipes.innerHTML = "";
	for (let i = 0; i <= localStorage.getItem('wasIs'); i++) {
		localStorage.removeItem('wasIs');
	    localStorage.removeItem("name" + i);
	    localStorage.removeItem("ingr" + i);
	    localStorage.removeItem("recipe" + i);
	} 
} 
function showDeleteW() {
	$('#contentBlocker').fadeIn(600);
	$('.addDeleteDiv').fadeIn(500);
} 
function hideDeleteW() {
	$('#contentBlocker').fadeOut(500);
	$('.addDeleteDiv').fadeOut(600);
} 
function showRecipeW() {
	$('#contentBlocker').fadeIn(600);
	$('.addRecipeDiv').fadeIn(500);
} 
function hideRecipeW() {
	$('#contentBlocker').fadeOut(500);
	$('.addRecipeDiv').fadeOut(600);
}
function addRecipe() {
	let name = nameDish.value;
	let ingr = ingrID.value;
	let recipe = recipeInp.value;
	let was = Number(localStorage.getItem('wasIs')) + 1;
	localStorage.setItem('wasIs', was);
	localStorage.setItem("name" + was, name);
	localStorage.setItem("ingr" + was, ingr);
	localStorage.setItem("recipe" + was, recipe);
	nameDish.value = ""; 
	ingrID.value = "";
	recipeInp.value = "";
	showRecipesFunc();
} 
showRecipesFunc();
	for (let i = 0; i <= localStorage.getItem('wasIs'); i++) {
		var idk = `<script>var isOpen = false; window.isOpen`
	} 
function showRecipesFunc() {
showRecipes.innerHTML = "";
for (let i = 0; i <= localStorage.getItem('wasIs'); i++) {
if (localStorage.getItem("name" + i)) {
showRecipes.innerHTML += `
<li><a onclick="let b =` 
+ i + 
`;toggleThis(window.isOpen, '.subFood\' + b); window.isOpen = !window.isOpen;">`
+ localStorage.getItem("name" + i) + 
`<div class=subFood` 
+ i +
`><h3>Ингредиенты</h3><div id=ingridDiv` 
+ i + 
`></div><h3>Рецепт</h3>
<div id=recipeDiv`
+ i + 
`></div>`; 
} 
$('.subFood' + i).hide(0);
if (localStorage.getItem("ingr" + i)) {
document.getElementById('ingridDiv' + i).innerHTML += `<h2>` + localStorage.getItem("ingr" + i) + `</h2>`;
} 
if (localStorage.getItem("recipe" + i)) {
document.getElementById('recipeDiv' + i).innerHTML += `<h2>` + localStorage.getItem("recipe" + i) + `</h2><div></li>`;
} 
} 
} 





