window.addEventListener('load', () => {
  document.querySelectorAll('.feedback').forEach(button => {
    button.addEventListener('click', (e) => {
      const el = e.target;
      gtag('event', 'click', {
        'event_category': el.dataset.group,
        'event_label': window.location.pathname,
        'value': el.dataset.value
      });
      const group = document.querySelectorAll(`[data-group="${el.dataset.group}"]`);
      group.forEach(item => {
        item.disabled = true;
      });
      const p = document.createElement('p');
      p.textContent = "Thanks for the feedback. This itself is a metrics experiment.";
      group[group.length - 1].insertAdjacentElement('afterend', p);
    });
  });
});
