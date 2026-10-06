document.addEventListener('DOMContentLoaded', () => {
  const chips = document.querySelectorAll('.chip');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((item) => item.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  const rows = document.querySelectorAll('.lead-table tbody tr');
  rows.forEach((row) => {
    row.addEventListener('click', () => {
      rows.forEach((item) => item.classList.remove('selected'));
      row.classList.add('selected');
      row.querySelector('input[type="checkbox"]').checked = true;
    });
  });
});
