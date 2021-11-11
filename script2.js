var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        alert("Your Form has been succesfully submitted, if your email id was wrong then your response will not be recorded. \n NOTE:- IP address is also bieng shared with Shourya, in order to handle abuse through forms")
        form.reset()
      }).catch(error => {
        alert( "Oops! There was a problem submitting your form")
      });
    }
    form.addEventListener("submit", handleSubmit)
