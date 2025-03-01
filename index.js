function getRandomDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        document.querySelector("#dog-image").src = data.message;
      });
  }
  //https://dog.ceo/api/breed/hound/images/random Fetch!
  

  //when asking for the specific dog breed and if it is not a real breed then nothing wil come up only an error message will
  function getSpecificDog() {
    let breed = document.querySelector("#breed").value;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => {
        if (!res.ok) {
            //there is an error and we have to do something
          alert(` we couldn't find that dog :( please enter a new breed`);
          return;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.message);
        document.querySelector("#dog-image").src = data.message;
      });
  }


