"use strict";

//IE HTMLcollection foreach polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

;

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }

    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

;
{
  var button = document.getElementById('up');
  var prevScroll,
      visible = false;
  var topElem = document.querySelector('main section');
  button.addEventListener('click', function () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });
  window.addEventListener('load', function () {
    prevScroll = pageYOffset;
  });
  window.addEventListener('scroll', function () {
    if (!visible && prevScroll || pageYOffset + window.innerHeight >= document.body.scrollHeight - 30) {
      if (pageYOffset < prevScroll && topElem.getBoundingClientRect().bottom < 0 || pageYOffset + window.innerHeight >= document.body.scrollHeight - 30) {
        visible = true;
        button.classList.add('visible');
      } else {
        if (pageYOffset != prevScroll) {
          visible = false;
          button.classList.remove('visible');
        }
      }
    } else visible = false;

    prevScroll = pageYOffset;
  });
}
;
document.querySelectorAll('.interactive-trigger').forEach(function (item) {
  return item.addEventListener('click', function () {
    var target = item.getAttribute('data-target'),
        selector = item.getAttribute('data-sel'),
        toggleClass = item.getAttribute('data-toggleclass'),
        detailsMode = item.getAttribute('data-detailsMode');
    if (target == "this") target = item;
    if (target == "parent") target = item.parentNode;
    if (target == "grandparent") target = item.parentNode.parentNode;
    if (!target) target = document;
    if (selector) target.querySelectorAll(selector).forEach(function (item) {
      if (detailsMode && item.classList.contains('details')) {
        if (item.style.maxHeight) item.style.removeProperty('max-height');else item.style.maxHeight = item.scrollHeight + 'px';
      }

      item.classList.toggle(toggleClass);
    });
    return target.classList.toggle(toggleClass);
  });
});
;
var burger = document.querySelector('.burger');

burger.onclick = function (e) {
  if (burger.classList.contains('active')) {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    bodyScrollLock.disableBodyScroll(document.body);
  } else {
    bodyScrollLock.enableBodyScroll(document.body);
  }
};

objectFitImages();