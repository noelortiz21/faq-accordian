const radiobtns = document.querySelectorAll('input[type="radio"]'); 
let expandIcon=document.querySelectorAll('.expand-icon');
function handleRadioChange(index) { 
    expandIcon.forEach((icon, i) => {
        if (i==index){
            icon.src= 'assets/images/icon-minus.svg' 
        }else{
            icon.src= 'assets/images/icon-plus.svg' 
        }
    }); 
    // expandIcon.src='assets/images/icon-minus.svg' 
}
for (let i = 0; i < radiobtns.length; i++) {
    radiobtns[i].addEventListener('change', (event)=>{
        handleRadioChange(i);
    });
}