const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
      scriptURL = 'https://script.google.com/macros/s/AKfycbz313E1zjHOGYxojZ9BPeAb6Nj39Nu4wIzYpjSzX8gcjoef-TtmgjkEn5CFAQCq-gBL/exec'
      form = document.forms['submit-to-google-sheet']
      success = document.getElementById('success');

      

      toggle.addEventListener("click", () => {  
        sidebar.classList.toggle("close");
      });
      searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
      });


      modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
      });


      

      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            success.innerHTML="data successfully Submit";

            setTimeout(function()
            {
              success.innerHTML="";
            },5000)
            form.reset();
          })
          .catch(error => console.error('Error!', error.message))
      })