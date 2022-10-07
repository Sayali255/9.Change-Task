const change = document.getElementById('change');
const allDiv = Array.from(document.querySelectorAll('.all')); //12





const onChange = (eve) => {
    let value = `.${eve.target.value}`;
    console.log(value); // .motersera 2
     allDiv.forEach((e) => {
        e.classList.add('d-none'); //12
     })
     let getPlant = Array.from(document.querySelectorAll(value)); //[2]
     getPlant.forEach(ele => {
        ele.classList.remove('d-none');
     })
}





change.addEventListener('change', onChange);