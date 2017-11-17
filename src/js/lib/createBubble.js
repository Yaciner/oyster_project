export default (elName, attr, container) => {

  const namespace = `http://www.w3.org/2000/svg`;
  const $el = document.createElementNS(namespace, elName);

  for (const key in attr) {
    $el.setAttribute(key, attr[key]);
  }

  if (container) container.appendChild($el);//als er een container is meegegeven mag je hem er in steken

  return $el;
};
