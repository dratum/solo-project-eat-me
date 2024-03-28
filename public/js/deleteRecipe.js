const deleteBtnRecipe = document.querySelectorAll('.delete-btn-recipe');
if (deleteBtnRecipe) {
  deleteBtnRecipe.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      event.preventDefault();
      try {
        const data = await fetch('/api/delete-recipe', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ recipe_id: event.target.dataset.id }),
        });

        const res = await data.json();
        if (res) {
          btn.parentNode.remove();
        } else {
          console.log('Не прочитал условие');
        }
      } catch (error) {
        console.log('message:', error);
      }
    });
  });
}
