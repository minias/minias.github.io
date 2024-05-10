(function (document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function (e) {
    var target = e.target;

    if (!checkbox.checked ||
      sidebar.contains(target) ||
      (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, true);
})(document);

var links = document.querySelectorAll('a');
for (var i = 0, length = links.length; i < length; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = '_blank';
  }
}
// scroll to Top
window.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('scroll');
  const top = document.getElementById('go-top');
  if (el) {
    var backToTop = () => {
      // button show/hide
      window.addEventListener('scroll', () => {
        if (document.querySelector('html').scrollTop > 100) {
          top.style.display = "block !important";
        } else {
          top.style.display = "none !important";
        }
      });
      // back to top click event listener
      top.addEventListener('click', () => {
        window.scrollTo({top: 0,left: 0,behavior: 'smooth'});
      })
    }
    backToTop();
  } 
});
 