var scrollUpBtn = document.querySelector(".a-btn-scroll-up") !== null;

if (scrollUpBtn) {

	scrollUpBtn.addEventListener("click", backToTop);

	function backToTop(){
	    window.scrollTo(0,0);
	}
}