//scroll section

window.onscroll= () =>{
    let header = document.querySelector('header');

    headers.classList.toggle('sticky',window.scrollY>100);
}
