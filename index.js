const lis = document.querySelectorAll("ul li");
const add = document.querySelector("#add");
const sort = document.querySelector("#sort");

const random = ()=>{
    let numb = Math.floor(Math.random() * 9 + 1);
    return numb;
}

const printNumbers = ()=>{
   const liList = Array.from(lis);
   for(let li of liList){
        li.innerHTML = random();
   }
}

add.addEventListener("click",printNumbers);

const sortFunction = ()=>{
    const numbers = Array.from(lis).map(li=>li.innerHTML);
    return numbers.sort((a,b)=>a-b);
}

const updateView = ()=>{
    const sortedNumbers = sortFunction();
    const oldList = Array.from(lis);

    sortedNumbers.forEach((num,index)=>{
        oldList[index].innerHTML = num;
    });
}

sort.addEventListener("click",updateView);
