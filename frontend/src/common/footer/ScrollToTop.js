const scrollToTop = () => {
    let progressPath = document.querySelector( '.rn-progress-parent path' );
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    const updateProgress = function () {
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    window.addEventListener( 'scroll', updateProgress );
    let progressWrap = document.querySelector( '.rn-progress-parent' );
    let offset = 150;
    window.addEventListener( 'scroll', function () {
      if (window.pageYOffset > offset) {
        progressWrap.classList.add( 'rn-backto-top-active' );
      } else {
        document
          .querySelector( '.rn-progress-parent' )
          .classList.remove( 'rn-backto-top-active' );
      }
    });
    progressWrap.addEventListener( 'click', function (e) {
        e.preventDefault();
        window.scrollTo(
            { 
                top: 0, 
                behavior: 'smooth' 
            }
        );
        return false;
    });
}
  
export default scrollToTop;