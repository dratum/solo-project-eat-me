const btn = document.getElementById('addBtn');

if (btn) {
  btn.addEventListener('click', async (event) => {
    event.preventDefault();
    const { id } = event.currentTarget.dataset;

    try {
      await fetch('/api/addToFav', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ programId: id }),
      });
      btn.remove();
      const div = document.getElementById('wrap-program');
      const notification = document.createElement('span');
      notification.classList.add('notification-text');
      notification.innerText = 'Добавлено в Избранное';
      div.appendChild(notification);
    } catch (error) {
      console.log('message:', error);
    }
  });
}
