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

window.addEventListener("DOMContentLoaded", (event) => {
  //const el = document.getElementById('scroll');
  if (document.getElementById('scroll')) {
    // Scroll | button show/hide
    window.addEventListener('scroll', () => {
      if (document.querySelector('html').scrollTop > 100) {
        document.getElementById('go-top').style.display = "block";
      } else {
        document.getElementById('go-top').style.display = "none";
      }
    });
    // back to top
    document.getElementById('go-top').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    })
  }
});
 