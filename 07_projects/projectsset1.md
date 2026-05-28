# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);

  button.addEventListener('click', (e) => {
    const color = e.target.id;

    switch(color){
      case 'grey':  body.style.backgroundColor = color;
                    break;

      case 'yellow': body.style.backgroundColor = color;
                     break;

      case 'blue':   body.style.backgroundColor = color;
                     break;

      case 'white':  body.style.backgroundColor = color;
                     break;
                     
      case 'orange':  body.style.backgroundColor = color;
                     break;

      default:       body.style.backgroundColor = 'white'
                     break;
    }
  });
});

```

## project-2

```javascript
  const form = document.querySelector('form');

form.addEventListener('submit',(e) => {

  e.preventDefault();
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  let bmi = 0;
  const result = document.querySelector('#results');
  const msg = document.querySelector('#msg');
  msg.style.color = 'black';
  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML =  `Please enter a valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please enter a valid weight ${weight}`;
  }
  else{
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }

  if( bmi  > 24.9){
    msg.innerHTML = `<h4>Over Weight</h4>`
  }else if(bmi >=18.6 && bmi <=24.9){
    msg.innerHTML = `<h4>Normal Range</h4>`
  }else if(bmi < 18.6){
    msg.innerHTML = `<h4>Under Weight</h4>`
  }
});
```

## project-3
```javascript
const clock = document.getElementById('clock');

setInterval( ()=>{
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```