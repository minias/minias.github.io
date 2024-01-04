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
window.$docsify = {
  name: 'Hive Documentation',
  loadSidebar: true,
  loadNavbar: true,
  subMaxLevel: 2,
  auto2top: true,
  homepage: 'home.md',
  themeColor: '#0AC7EF',
  notFoundPage: true,
  logo: 'assets/logo.svg',
  ga: 'UA-148376435-1',
  pagination: {
    crossChapter: true
  },
  plugins: [
    EditOnGithubPlugin.create('https://github.com/hivedb/docs/tree/master/', undefined, 'Edit on GitHub'),
    function (hook) {
      var iframes = {};
      hook.beforeEach(function (content) {
        iframes = {};
        return content.replace(/^```dart:(dart|flutter):([0-9]{1,3})px([^\x05]*?)```/mg, function (m, type, height, code) {
          var id = Math.random().toString(36).substr(2, 9);
          iframes[id] = code.trim();
          return `<iframe style="width:100%;height:${height}px;" data-src="https://dartpad.hivedb.dev/embed-${type}.html" id="${id}" data-hj-allow-iframe></iframe>`;
        });
      });
      hook.doneEach(function () {
        for (let [id, code] of Object.entries(iframes)) {
          var iframe = document.getElementById(id);
          iframe.setAttribute('src', iframe.getAttribute('data-src'));
          iframe.onload = function () {
            iframe.contentWindow.postMessage({ 'sourceCode': { 'main.dart': code }, 'type': 'sourceCode' }, '*');
          };
        }
      });
    },
    function (hook) {
      var codes = {};
      hook.beforeEach(function (content) {
        return content.replace(/^```version[^\x05]*?```/mg, function (m) {
          if (hiveDependencies !== undefined) {
            return '```yaml\n' + hiveDependencies + '\n```';
          } else {
            return '<pre data-lang="yaml" id="hiveDependencies"></pre>';
          }
        });
      });
    }
  ]
}

window.clearIndexedDb = function () {
  var i = document.createElement('iframe');
  i.style.visibility = 'hidden';
  i.onload = function () { i.parentNode.removeChild(i); };
  i.src = 'https://dartpad.hivedb.dev/clear-indexeddb.html';
  i.onload = function () {
    location.reload();
  }
  document.body.appendChild(i);
}

window.hj = function () { (h.hj.q = h.hj.q || []).push(arguments) };
window._hjSettings = { hjid: 1654615, hjsv: 6 };

var hiveDependencies;
async function load() {
  var url = 'https://api.allorigins.win/get?url=https://pub.dev/api/packages/'
  var packages = ['hive', 'hive_flutter', 'hive_generator', 'build_runner']
  Promise.all(packages.map(p => fetch(url + p))).then(responses =>
    Promise.all(responses.map(res => res.json()))
  ).then(json => {
    var versions = json.map((j) => JSON.parse(j.contents)['latest']['version']);
    hiveDependencies = `dependencies:
  hive: ^${versions[0]}
  hive_flutter: ^${versions[1]}

dev_dependencies:
  hive_generator: ^${versions[2]}
  build_runner: ^${versions[3]}
`;
    var dependencyElement = document.getElementById('hiveDependencies');
    if (dependencyElement !== null) {
      var highlighted = Prism.highlight(hiveDependencies, Prism.languages.yaml, 'yaml');
      dependencyElement.innerHTML = `<code class="language-yaml">${highlighted}</code>` + dependencyElement.innerHTML;
    }
  })
}
load(); 