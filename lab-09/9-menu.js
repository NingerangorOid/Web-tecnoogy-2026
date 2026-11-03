"use strict";
// Data model is taken from the teacher's lesson9 branch.
const data = {
        name: 'Каталог товаров',
        hasChildren: true,
        items: [
            {
                name: 'Мойки',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran1',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT1',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT2',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Ulgran2',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT3',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT4',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            },{
                name: 'Фильтры',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran3',
                        hasChildren: true,
                        items: [
                            {
                                name: 'SMT5',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'SMT6',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    }
                ]
            }
        ]
    }

function ListItems(el, data) {
  this.el = el;
  this.data = data;
}
ListItems.prototype.renderParent = function (data) {
  const item = document.createElement('li');
  item.className = 'list-item';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'list-item__toggle';
  button.setAttribute('aria-expanded', 'true');
  const icon = document.createElement('span');
  icon.className = 'list-item__arrow';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '⌄';
  const folder = document.createElement('span');
  folder.setAttribute('aria-hidden', 'true');
  folder.textContent = '📁';
  const label = document.createElement('span');
  label.textContent = data.name;
  button.append(icon, folder, label);
  const children = document.createElement('ul');
  children.className = 'list-item__items';
  children.id = 'menu-9-group-' + (++this.groupId);
  button.setAttribute('aria-controls', children.id);
  // Recursion: each child can itself contain arbitrary depth.
  for (const child of data.items || []) {
    children.append(child.items && child.items.length ? this.renderParent(child) : this.renderChildren(child));
  }
  item.append(button, children);
  return item;
};
ListItems.prototype.renderChildren = function (data) {
  const item = document.createElement('li');
  item.className = 'list-item list-item--leaf';
  item.textContent = data.name;
  return item;
};
ListItems.prototype.render = function () {
  this.groupId = 0;
  this.el.replaceChildren(this.renderParent(this.data));
};
ListItems.prototype.toggleItems = function (button) {
  const children = button.parentElement.querySelector(':scope > ul');
  children.hidden = !children.hidden;
  button.setAttribute('aria-expanded', String(!children.hidden));
};
ListItems.prototype.init = function () {
  this.render();
  // One delegated handler on the root: clicks bubble from the icon or label.
  this.el.addEventListener('click', event => {
    const button = event.target.closest('.list-item__toggle');
    if (button && this.el.contains(button)) this.toggleItems(button);
  });
};
const menu = new ListItems(document.getElementById('list-items'), data);
menu.init();
