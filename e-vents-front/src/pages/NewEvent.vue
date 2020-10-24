<template>
  <Layout>

  <div class="container">

    <form id="event" @submit.prevent="handleSubmit" method="post">

      <h3>Create New Event</h3>

        <fieldset>
          <input placeholder="Your title" name="title" type="text" required autofocus>
        </fieldset>

        <fieldset>
          <input type="file" name="image" />
        </fieldset>

        <fieldset>
          <input name="price" placeholder="Price" type="text">
        </fieldset>

        <fieldset>
          <input name="duration" placeholder="Duration in hours" type="text">
        </fieldset>

        <fieldset>
          <select id="categories" name="categories" placeholder="Category" size="3" required multiple>
            <option value="Music">Music</option>
            <option value="Dance">Dance</option>
            <option value="Film">Film</option>
          </select>
        </fieldset>


        <fieldset>
        <input type="date" id="date" name="date">
        </fieldset>


        <fieldset>
          <textarea name="description" placeholder="Type your message here...." required></textarea>
        </fieldset>

        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>

    </form>

  </div>

  </Layout>
</template>



<script>

export default {
  methods: {
      handleSubmit(){

      const formElement = document.getElementById('event');

      formElement.addEventListener('submit', e => {
        e.preventDefault();

        const request       = new XMLHttpRequest();
        const formData      = new FormData();
        const formElements  = formElement.elements;
        const data          = {};

        for (let i = 0; i < formElements.length; i++) {
          const currentElement = formElements[i];


          if (!['submit', 'file'].includes(currentElement.type)) {
            data[currentElement.name] = currentElement.value;
          } else if (currentElement.type === 'file') {
            if (currentElement.files.length === 1) {
              console.log(currentElement, "currentElement")
              console.log(currentElement.name, "currentElement.name")

              const file = currentElement.files[0];

              console.log(file, "file")

              formData.append(`files.${currentElement.name}`, file, file.name);

              console.log(`success`)
              console.log(formData.getAll(`files.${currentElement.name}`))
            } else {
              for (let i = 0; i < currentElement.files.length; i++) {
                const file = currentElement.files[i];

                formData.append(`files.${currentElement.name}`, file, file.name);
              }
            }
          }
        }

        console.log(data, "data")

        formData.append('data', JSON.stringify(data));

        for(var pair of formData.entries()) {
           console.log(pair[0]+ ', '+ pair[1]);
           console.log('FormData')
        }

        request.open('POST', `localhost:8080/events`);
        request.send(formData);
      });

      }
    }
}



</script>




<style>

    @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
      -o-font-smoothing: antialiased;
      font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    body {
      font-family: "Roboto", Helvetica, Arial, sans-serif;
      font-weight: 100;
      font-size: 12px;
      line-height: 30px;
      color: #777;
      background: #4CAF50;
    }

    .container {
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      position: relative;
    }

    #event input[type="text"],
    #event input[type="email"],
    #event input[type="tel"],
    #event input[type="url"],
    #event input[type="date"],
    #event textarea,
    #event button[type="submit"] {
      font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
    }

    #event {
      background: #F9F9F9;
      padding: 25px;
      margin: 0px 0;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }

    #event h3 {
      display: block;
      font-size: 30px;
      font-weight: 300;
      margin-bottom: 10px;
    }

    #event h4 {
      margin: 5px 0 15px;
      display: block;
      font-size: 13px;
      font-weight: 400;
    }

    #event fieldset {
      border: medium none !important;
      margin: 0 0 10px;
      min-width: 100%;
      padding: 0;
      width: 100%;
    }

    #event input[type="text"],
    #event input[type="email"],
    #event input[type="tel"],
    #event input[type="url"],
    #event input[type="date"],
    #categories,
    #event textarea {
      width: 100%;
      border: 1px solid #ccc;
      background: #FFF;
      margin: 0 0 5px;
      padding: 10px;
    }

    #event input[type="text"]:hover,
    #event input[type="email"]:hover,
    #event input[type="tel"]:hover,
    #event input[type="url"]:hover,
    #event textarea:hover {
      -webkit-transition: border-color 0.3s ease-in-out;
      -moz-transition: border-color 0.3s ease-in-out;
      transition: border-color 0.3s ease-in-out;
      border: 1px solid #aaa;
    }

    #event textarea {
      height: 100px;
      max-width: 100%;
      resize: none;
    }

    #event button[type="submit"] {
      cursor: pointer;
      width: 100%;
      border: none;
      background: #4CAF50;
      color: #FFF;
      margin: 0 0 5px;
      padding: 10px;
      font-size: 15px;
    }

    #event button[type="submit"]:hover {
      background: #43A047;
      -webkit-transition: background 0.3s ease-in-out;
      -moz-transition: background 0.3s ease-in-out;
      transition: background-color 0.3s ease-in-out;
    }

    #event button[type="submit"]:active {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    .copyright {
      text-align: center;
    }

    #event input:focus,
    #event textarea:focus {
      outline: 0;
      border: 1px solid #aaa;
    }

    ::-webkit-input-placeholder {
      color: #888;
    }

    :-moz-placeholder {
      color: #888;
    }

    ::-moz-placeholder {
      color: #888;
    }

    :-ms-input-placeholder {
      color: #888;
    }


</style>
