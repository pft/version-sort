function versionsort (a, b) {
  var i, l, d;

  a = a.split(/(\d+)/);
  b = b.split(/(\d+)/);
  l = Math.min(a.length, b.length);

  for (i=0; i<l; i++) {
    d = (a[i] - b[i]);
    if (isNaN(d)){
      if (a[i] === b[i])
        d = 0;
      else if (a[i] < b[i]) {
         d = -1;
      }
      else
        d = 1;
    }
    if (d !== 0)
      return d;
  }

  return a.length - b.length;
}

module.exports = versionsort;