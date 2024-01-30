const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let expandIcon = document.querySelectorAll(".expand-icon");
let answers = document.querySelectorAll(".ans");
function handleCheckboxChange(index) {
  const checkbox = checkboxes[index];
  const icon = expandIcon[index];
  const answer = answers[index];
  console.log(checkbox.checked);

  if (checkbox.checked) {
    icon.src = "assets/images/icon-minus.svg";
    answer.classList.add("reveal");
  } else {
    icon.src = "assets/images/icon-plus.svg";
    answer.classList.remove("reveal");
  }
  checkboxes.forEach((cbox, i) => {
    if (i !== index) {
      console.log(`Checkbox ${i}: checked = ${cbox.checked}`);
      cbox.checked = false;
      cbox.checked = false;
      expandIcon[i].src = "assets/images/icon-plus.svg";
      answers[i].classList.remove("reveal");
    }
  });
}
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", (event) => {
    handleCheckboxChange(i);
  });
}
