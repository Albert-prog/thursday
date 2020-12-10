function pageLoad () {

  // to do app készitése. alapértelmezésben 10 üres mező áll rendelkezésre, de tudunk adni hozzá újakat. minden sorban van egy tickbox
  // van egy text rész és van egy törlés gomb amivel el lehet távolitani
  let rootE = document.getElementById('root');

  //el kell tárolnunk egy változóba, hogy egy tömbnek mi lesz a html strukturája
  let divE = `
    <div class="tasks">
      <input type="checkbox">
      <input type="text">
      <button class="delete">Delete</button>
    </div>
  `;

  //el kell tárolnunk a tömbök számát egy változóba
  let maxNumber = 9; 

  //for ciklus készitése és hozzáadása az elemünkhöz instertAdjacentHTML-el
  for (let index = 0; index < maxNumber; index++) {
    let element = rootE.insertAdjacentHTML('beforeend', divE);
    }
    rootE.insertAdjacentHTML('afterend', `<button id="add">Add tasks</button>`);


  //hozzá kell adnunk a lista után egy gombot
  //hozzáadjuk a click eseményt a gombhoz
  function newItem() {
    rootE.insertAdjacentHTML('beforeend', divE);

      //TODO: RÁ KÉNE TENNI AZ ESEMÉNYFIGYELŐT AZ ÚJONNAN LÉTREHOZOTT SOROKRA IS (70-ES SOR)
    }
    document.getElementById('add').addEventListener('click', newItem);


  //classnév alapján kijelölöm az összes törlés gombot és elmentem egy változóba

    let removebtns = rootE.querySelectorAll('.delete');
    
    function removeItem (e) {
      console.log(e.target);
      e.target.parentElement.remove();
    }
    
    
    //for ciklus megszámlálás (if else)
    for (let i = 0; i < removebtns.length; i++) {
      removebtns[i].addEventListener('click', removeItem);
      
  }  


}

window.addEventListener('load', pageLoad);