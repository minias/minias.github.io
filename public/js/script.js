(function (document) {
  var html = document.querySelector('html');
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');
  var goTop = document.getElementById('go-top');

  document.addEventListener('click', function (e) {
    var target = e.target;

    if (!checkbox.checked ||
      sidebar.contains(target) ||
      (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, true);
  var backToTop = () => {
    // Scroll | button show/hide
    window.addEventListener('scroll', () => {
      if (html.scrollTop > 100) {
        goTop.style.display = "block";
      } else {
        goTop.style.display = "none";
      }
    });
    // back to top
    goTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, true);
  };
  backToTop();   
})(document);

var links = document.querySelectorAll('a');
for (var i = 0, length = links.length; i < length; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = '_blank';
  }
}
