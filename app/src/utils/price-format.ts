export const priceFormat = (price) => {
  const r = String(price).replace(/([0-9]{2})$/g, ',$1');
  const c = 'R$ ';

  if (r.length > 6) {
    return c + r.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  }

  return c + r;
};
