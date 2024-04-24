const colors = ['green','red','#f15052','blue','gold','yellow','purple','maroon','helo']; // array data
const btn = document.getElementById('btn'); // get element by id
const color = document.querySelector('.color'); // get element by qeury(css styler)

btn.addEventListener('click',function(){
    let randomnum = getrandom();
    document.body.style.backgroundColor = colors[randomnum];
    color.textContent = colors[randomnum];
      /*
      we assing a num for array to background
      we assing a num for array to text of color

      */
})

function getrandom()
{
    return Math.floor(Math.random() * colors.length);
} /*

math. foor to round off number
math.random give num 0 to 1
so basically we mulitply color.lenth ie 4 with math.random


*/