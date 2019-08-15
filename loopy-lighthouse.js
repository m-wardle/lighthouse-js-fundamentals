for (var x = 100; x < 200;) {
  console.log((++x % 3 ? '' : 'Loopy') + (x % 4 ? '' : 'Lighthouse') || x );
}