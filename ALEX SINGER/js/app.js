var introPage =document.querySelector('.intro');
var aboutPage = document.querySelector('.about-page');
var aboutBtns = document.querySelectorAll('.aboutBtns h5');
var introBtn = document.querySelector('.introBtn');
var aboutBtn = document.querySelector('.aboutBtn');
console.log(aboutBtns);
console.log(introBtn);


	aboutBtn.addEventListener('click', ()=>{
		introBtn.classList.remove('activeBtn');
		aboutBtn.classList.add('activeBtn');
	
		if (introPage.style.display==="block") {
		introPage.classList.remove('activePage');
		introPage.style.display='none';

		}
		else{
			introPage.style.display="none";
		introPage.classList.remove('activePage');


		}
		aboutPage.classList.add('activePage');
		aboutPage.style.display="block";
		introPage.classList.remove('activePage');
	})

introBtn.addEventListener('click', ()=>{
		aboutBtn.classList.remove('activeBtn');
		introBtn.classList.add('activeBtn');
		if (aboutPage.style.display=="block") {
		aboutPage.classList.remove('activePage');
		aboutPage.style.display='none';
		}
		else{
		aboutPage.classList.remove('activePage');
			aboutPage.style.display="none";
		}
		introPage.classList.add('activePage');
		introPage.style.display="block";
		aboutPage.classList.remove('activePage');

	})

	
// Toggle about buttons