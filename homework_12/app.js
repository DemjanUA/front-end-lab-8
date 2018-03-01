'use strict';

const root = document.getElementById('root');

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
    let thumbnail = createElement('div', {'class' : 'thumbnail'}, [image, title]);

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

const content = createTankDetailsPage(tanks[0]);
//const content = createThumbnailsPage(tanks);

root.appendChild(content);

console.log(content);

let e1 = createElement('div', {'class' : 'class1', 'value' : 'value1'});
let e2 = createElement('div', {'class' : 'class1', 'value' : 'value1'});
let e3 = createElement('p', {'class' : 'class1', 'value' : 'value1'}, 'some string');
let e4 = createElement('div', {'class' : 'class1', 'value' : 'value1'}, [e1, e2, e3]);
let e5 = createElement('div', {'class' : 'class1', 'value' : 'value1'}, [e4, 'some string']);

console.log(e5)