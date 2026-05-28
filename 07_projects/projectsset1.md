# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript()

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