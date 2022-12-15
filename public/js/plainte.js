var splide = new Splide(".splide", {
  // autoWidth:true,
  autoHeight: true,
  drag: false,
  classes: {
    // Add classes for arrows.
    arrows: "splide__arrows your-class-arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "invisible",
    next: "invisible",

    // Add classes for pagination.
    pagination: "splide__pagination plainte-pagination", // container
    page: "splide__pagination__page your-class-page", // each button
  },
});
var bar = splide.root.querySelector(".my-carousel-progress-bar");

const btnSubmit = document.querySelector("#btnsend");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
const disabledBtn =async () => {
  btnNext.disabled = splide.index + 1 == splide.length;
  btnPrev.disabled = splide.index - 1 == -1;
  btnSubmit.disabled = splide.index + 1 != splide.length;
  console.log(getData());
  const text=(await axios.post('/recapitulatif',{
    recap:getData()
  })).data
  document.querySelector('#recapitulatif').innerHTML=text
};
// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
  var end = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%";
  disabledBtn();
});

splide.mount();

disabledBtn();
btnNext.addEventListener("click", (e) => {
  splide.go(
    splide.index + 1 == splide.length ? splide.index : splide.index + 1
  );
  disabledBtn();
});
btnPrev.addEventListener("click", () => {
  splide.go(splide.index - 1 == -1 ? 0 : splide.index - 1);
  disabledBtn();
});
document.querySelector("#form-plainte").addEventListener("submit", (e) => {
  if (e.submitter !== btnSubmit) {
    e.preventDefault();
  }
});

var input = document.querySelector("#phone")
// validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = [
  "Numéro invalide",
  "Code pays invalide",
  "Trop court",
  "Trop long",
  "Numéro invalide",
];

// initialise plugin
var iti = window.intlTelInput(input,{
    initialCountry:'mg'
});

var reset = function () {
  input.classList.remove("error");
  // validMsg.classList.add("hide");
};
reset();
// on blur: validate
input.addEventListener("blur", function () {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      // validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
    }
  }
});

// on keyup / change flag: reset
input.addEventListener("change", reset);
input.addEventListener("keyup", reset);
const picker = datepicker(".date_reception")
const picker2 = datepicker(".date_fermeture")
const picker3 = datepicker(".date_1er_communication")

// splide.go(1)
function getData(){
  const elForm=document.querySelector('form')
  const form=new FormData(elForm)
  const data={}
  Array.from(form.entries()).map(([name,value])=>data[name]=value)
  return data
}


btnSubmit.addEventListener('click',(e)=>{
  e.preventDefault()
  
  

})
function initRecapitulatif() {
  
}
window.addEventListener('load',()=>{
  const elForm=document.querySelector('form')
  elForm.querySelectorAll('input,textarea').forEach(el=>{
    el.addEventListener("input",()=>{

    })
  })
  const form=new FormData(elForm)
  console.log(Array.from(form.entries()));
  axios.post('/plainte', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
})
