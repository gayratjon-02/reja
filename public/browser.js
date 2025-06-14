 

console.log("FrontEnd JS ishga tushdi.");

function itemTemplate(item) {
  return `
    <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              Ozgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"
            >
              Ochirish
            </button>
          </div>
        </li>
    `;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("STEP 1: TUGMA BOSILDI");
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {

      console.log("STEP 6: backend => frontendja javob keldi");

      console.log(response.data)
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      //itemTemplate(response.data) - html da qoshilishi kerak bolgan dzayn
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Qaytadan harakat qiling");
    });
});

//  DELETE

document.addEventListener("click", function(e) {

  if(e.target.classList.contains("delete-me")){
    console.log("STEP 1: TugMa BoSilDi");
    if(confirm("Aniq ochirmoqchismisiz?")){
      axios
      .post("/delete-item", {id: e.target.getAttribute("data-id")})
      .then(response => {
        console.log(response.data);
        console.log("STEP 6: Backend => FRONTEND data kirib kelyabdi")
        e.target.parentElement.parentElement.remove();
      }).catch(err => {
        console.log("iltimos qayta tekshiring");
      })
    }

  }
// EDIT operations

  if (e.target.classList.contains("edit-me")){
    console.log("STEP 1: TUGMA BOSILDI");
let userInput = prompt(
  "yangi ozgartirish kiriting",
   e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
if(userInput){
  axios
  .post("/edit-item", {
    id: e.target.getAttribute("data-id"),
    new_input: userInput,} ) // 
  .then((response) => {
    console.log("response:", response.data)
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
    console.log("STEP 6: BackEnd => FrontEnd ga data olib keldi")
  })
  .
  catch((err) => {
    console.log("iltimos qaytadan harakat qiling");
  });

}
  }
});





// delete All 
document.getElementById("clean-all").addEventListener("click", function() {
  console.log("STEP 1: Tugma Bosildi")
  if(confirm("haqiqatdan hammasini ochirib yubormoqchimisiz")){
    axios.post("/delete-all", {delete_all: true})
    .then(response => {
      console.log("STEP 6: BackEnd => FrontEnd ga keldi")
      alert("siz hammasini ochirib yubordingiz");
      document.location.reload();
    })
  }
})
