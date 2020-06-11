// (function() {
//   'use strict';

  // YOUR CODE HERE
  document.addEventListener('DOMContentLoaded',function(){
      console.log('hi')
      //#1
      //Stoplight
      var stoplight = document.getElementById('stopLight')
      stoplight.addEventListener('click', () => {
          stoplight.style.backgroundColor = "red"
          
      }) 
      //Slowlight
      var slowlight = document.getElementById('slowLight')
      slowlight.addEventListener('click', () => {
          slowlight.style.backgroundColor = 'yellow'
      })
      //Golight
      var golight = document.getElementById('goLight')
      golight.addEventListener('click', () => {
          golight.style.backgroundColor = 'green'
      })

      //#2
      document.querySelectorAll('.button').forEach(element =>{
        console.log(element.innerHTML)
        element.addEventListener('mouseenter', () =>
          console.log(`Entered ${element.innerHTML} button`)
      )})
      document.querySelectorAll('.button').forEach(element =>{
        element.addEventListener('mouseleave', ()=>
        console.log(`Left ${element.innerHTML} button`)
      )})
    
  })

// });
