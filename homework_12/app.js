'use strict';

const root = document.getElementById('root');

document.addEventListener('click', e => {
  let target = e.target;
  let thumbnail = target.closest('.thumbnail');
  let backBtn = target.closest('.back-btn');

  if (thumbnail) {
    window.location.hash = thumbnail.dataset.id;
  }

  if (backBtn) {
    window.location.hash = '';
  }
});

window.addEventListener('hashchange', e => {
  Router();
});

let content = createThumbnailsPage(tanks);
root.appendChild(content);

let Router = function(url) {
  if (!window.location.hash) {
    let newContent = createThumbnailsPage(tanks)
    content.parentElement.replaceChild(newContent, content);
    content = newContent;
  }
  if (window.location.hash) {
    let tankName = decodeURI(window.location.hash.slice(1));
    let tank = tanks.find(function(e) {
      return (tankName === e.model ? true : false);
    })
    let newContent = createTankDetailsPage(tank)
    content.parentElement.replaceChild(newContent, content);
    content = newContent;
  }
}

function createElement(tag, attr, children) {
  let node = document.createElement(tag);

  for (let key in attr) {
    node.setAttribute(key, attr[key]);
  }

  if (!children) return node;

  if (Array.isArray(children)) {
    children.forEach(e => node.appendChild(typeof e === 'string' ? document.createTextNode(e) : e));
  } else if (typeof children === 'string' || typeof children === 'number') {
    node.innerHTML = children;
  } else {
    node.appendChild(children);
  }

  return node;
}

function createThumbnailsPage(list) {
  let title = createElement('h1', {}, 'Most popular tanks');

  let thumbnails = list.map(e => {
    let image = createElement('img', {'src' : e.preview});
    let flag = createElement('img', {'src' : e.country_image});
    let titleText = createElement('span', {}, `${e.level} ${e.model}`);
    let title = createElement('h3', {'class' : 'title'}, [flag, titleText]);
    let thumbnail = createElement('div', {'class' : 'thumbnail', 'data-id' : encodeURI(e.model)}, [image, title]);

    return thumbnail;
  });

  let container = createElement('div', {'class' : 'thumbnails'}, [title, ...thumbnails]);

  return container;
}

function createTankDetailsPage(tank) {
  let table = createElement(
    'table', {},
    [
      createElement('tr', {}, 
        [
          createElement('td', {}, 'damage'),
          createElement('td', {}, tank.details.damage)
        ]
      ),
      createElement('tr', {}, 
        [
          createElement('td', {}, 'breoning'),
          createElement('td', {}, tank.details.breoning)
        ]
      ),
      createElement('tr', {}, 
        [
          createElement('td', {}, 'attack speed'),
          createElement('td', {}, tank.details.attack_speed)
        ]
      ),
      createElement('tr', {}, 
        [
          createElement('td', {}, 'time of targeting'),
          createElement('td', {}, tank.details.time_of_targeting)
        ]
      ),
      createElement('tr', {}, 
        [
          createElement('td', {}, 'ammunition'),
          createElement('td', {}, tank.details.ammunition)
        ]
      )
    ]
  );
  let tableTitle = createElement('h3', {}, 'Characteristics');

  let container = createElement('div', {'class' : 'tank-details'}, 
    [
      createElement('div', {'class' : 'left-contet'}, [
        createElement('h1', {}, [
          createElement('img', {'src' : tank.country_image}),
          `${tank.model} (level ${tank.level})`
        ]),
        createElement('h2', {}, 'Preview'),
        createElement('img', {'src' : tank.preview}),
        createElement('p', {'class' : 'back-btn'}, 'Back to list view')
      ]),
      createElement('div', {'class' : 'right-contet'}, [tableTitle, table])
    ]
  );

  return container;
}
