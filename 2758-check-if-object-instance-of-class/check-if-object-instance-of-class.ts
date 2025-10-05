function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj == null || typeof classFunction !== 'function') return false;

  const boxed = Object(obj);

  let proto = Object.getPrototypeOf(boxed);
  const parentProto = classFunction.prototype;

  while (proto) {
    if (proto === parentProto) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}