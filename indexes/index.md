<h1>Kayce Basques</h1>

<script>
  function random(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
  }
  function updateTitle(current, target) {
    function next(current, target, index) {
      const first = current.substring(0, index),
          middle = target.charAt(index),
          last = current.substring(index + 1, current.length);
      return first + middle + last;
    }
    if (current === target) return;
    if (current.length > target.length) {
      target += ' '.repeat(current.length - target.length);
    } else if (target.length > current.length) {
      current += ' '.repeat(target.length - current.length);
    }
    let n = random(target.length);
    while (current.charAt(n) === target.charAt(n)) {
      n = random(current.length + 1);
    }
    setTimeout(() => {
      const s = next(current, target, n);
      document.querySelector('h1').textContent = s;
      updateTitle(s, target);
    }, 250);
  }
  const greetings = [
    'Why hello there',
    'Greetings',
    'Welcome'
  ];
  setTimeout(() => {
    updateTitle(document.querySelector('h1').textContent, greetings[random(greetings.length)]);
  }, 2000);
</script>
