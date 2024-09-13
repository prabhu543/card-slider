let imgContainer = document.querySelector('.imgContainer');
let button = document.querySelector('button');

button.addEventListener('click',()=>{
    indexNum=10;
    addImage();
});

function addImage()
{
    for(let index=0;index < indexNum;index++)
    {
        let img = document.createElement('img');
        img.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 20000)}`;
        imgContainer.appendChild(img);
    }
    
}
