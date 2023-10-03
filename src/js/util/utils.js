export default function createElement(type, classes = [], attributes = []) {
  const element = document.createElement(type);
  classes.forEach(elementClass => {
    element.classList.add(elementClass);
  });
  attributes.forEach(elementAttribute => {
    element.setAttribute(elementAttribute[0], elementAttribute[1]);
  });

  return element;
};