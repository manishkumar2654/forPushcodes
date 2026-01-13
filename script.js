//dom manipulation
//html se element select karna
//text badalna 
//html badalna
//css badana
//attriubute 
//event listners



//document.querySelector();
//document.getElementById();
//document.getElementsByClassName();

// let abcd = document.getElementById("abcd");
// console.log(abcd);
// console.dir(abcd);


// let one = document.getElementsByClassName("one");
// console.log(one);
// console.dir(one);


// let h1 = document.querySelector("h1")

// console.log(h1);
// console.dir(h1);



// let h1 = document.querySelectorAll("h1")

// console.log(h1);
// console.dir(h1);




// let h1 = document.querySelector("h1");
// console.log(h1);

// h1.textContent="<i>manish kese ho  </>"
// console.dir(h1);
// h1.hidden = true;




// let a = document.querySelector("a");
// console.log(a);
// console.dir(a);

// //a.href = "https://www.google.com/"

// a.setAttribute("href", "https://www.google.com/");



//    let img = document.querySelector("img");
//    console.dir(img);
// //    img.src = "abc"

// img.setAttribute("src", "abc")




//   let a = document.querySelector("a");

//   console.log(a.getAttribute("href"));

//   a.removeAttribute("href")


//////////////////////////////////



//element create without html


// let h1 = document.createElement("h1");
// h1.textContent = "hello ji ";

// //document.body.appendChild(h1);

// document.querySelector("body").prepend(h1)

//    let h1 = document.querySelector("h1");
//    h1.remove();


//  let h1 = document.createElement("h1");
//  h1.textContent = "hey mai badiya hu";
//  document.querySelector("div").appendChild(h1)


// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "yellow";
// h1.style.fontFamily = "Gilroy";
// h1.style.textTransform = "capitalize";


// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.classList.add("hulu")



// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.classList.remove("hulu")


// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.classList.toggle("hulu"); 


// let buynow = document.querySelectorAll(".buy-now");
// console.log(buynow);


    // let manis = document.querySelector("#mani");

    // manis.textContent = "hello ji keso hai"


    // let lis = document.querySelectorAll("li");

    // lis.forEach((val)=>{
    //     console.log(val.textContent);
        
    // })

    // for(let i = 0; i < lis.length; i++) {
    //     console.log(lis[i].textContent);
        
    // }

//    let p = document.querySelector("p");

//    //p.textContent = "<b>Update </> by javascrtpn"
//    p.innerHTML = "<b>Update </> by javascrtpn"

// let img = document.querySelector("img");

// console.log(img.src);
// console.log(img.getAttribute("src"));
// img.setAttribute("src", "")


// add to title atribute to a div dynamivally

// let div = document.querySelector("div");

// div.setAttribute("title","some info");

//Remove the disable attribute from a button;


// let btm= document.querySelector("button");
// btm.removeAttribute("disabled");

//what dose createElemet() do? what returend?


// let h1 = document.createElement("h1");
// console.log(h1);

//what the differer between appenChild() and prepend()  theroy

//document.querySelector("div").removeChild(mani);

//Create new list item <li> new task </li> and add it to end od a <ul>



// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// li.textContent = "New task";
// ul.appendChild(li);


//create a new image elemet with a place holder source and add it at the top of div


// let img = document.createElement("img");
// img.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAABNVBMVEUUgp3////1jIbxbWdOSkRxbWnA2DyA0PP3uE/7x3Gam5oAfJkAf5vp6uva3d7u7/DS1NU/OjIheZB1a2Uif5jh4uJpZWEkcYVLRj+urazGx8drZ2K4uLf19vaPkI9IQzw4ZXH96+r84uGBf3z1hH396ebwYFmuxs9iXVmWlZPydG5jcHTd8fs5eIrs89H3tD05jqXc6Jy44/i91ytEYGdytM8xKh661QBHVVd2dnX1ko7z+v794cHV5YX7yID96NT3npfE3Ez83K781Z/3tUQAc5NaVU/N4W/6wl/+ycZtorXM3uTD2N/5vLWxzNXu9uBgnrKGssHo9cif2vX97dKBr7+Nk2GZv8tOk6oAaIy2w8loyvH3rx6js0qXolmPk2+DhXKEgYpmj6Cqu0iasrt6ipBJTk1DNV0eAAASfUlEQVR4nO2di2Pbtp3HycxuWgMUldRy/Yjs3NyMTuOuWNNd6qrXbbfR1wNQhNiKAWnXbt26+///hPsBFCWS4kMP2o5kfZ3YkizJ0sc//F542PO22mqrrbbaagOF8V2/grddmNIto3ohRDxPGYQQ3tpSpbDmnOgglkIkhpK7fjlvo7AQJjY8ZlGkmbhEd/163kYhIyTjRnAhpNJbRJVCJFEJldrwkdl6oxqBo8YoFoJtjahFWxvaajWhGG9z7GZxlhApCTIeRgj+T2ihLbdUJKRIMmUYjwzniAriRdom3EQqcOeT+91fQ8PUjBAzgOZNrDmhoeYm5EprSiPmYUOQLVDAoFSCvSwFv1/hD9OIIo5xcqm9RAv4kIjFMPIkEIl5pCnj2mhracgEypkSiu5XuWItBKwCk8TTEYHx5plQGSFsuo0084QGi9IhAnQxS9EQCV4LZb4K3D2udVv7H6+oD1bU4y5RASmUemxCHAIPJxFTXESSSRbbUcdi65wIEzGYFtJp7cuYIVp6qMKy9l+crqqr3RV18EGHkCpkjAcFirFAhhJpAdSIhwQlDDjp0PWaYqHs6ORwn5JP3z8/X/UN7u4crqad6/ef3igibFMmZG0KBiImWiFuMAqQ5loH8NUS0iIWLFGXGvHYqBwj/GJ1QrvXOyvrYv9GGeVxuUwJoUTwN0zCOIMUAW5mkCXEKuKUK8FFoZLpgFAXiK6f3iSVycCxXmp8m6GeB4mTYSyxjkkLKRl4dbCkgIMdTV3S/vsdIFqd0M7hDSICGgk4bxhohMfTjhJ2xPCYn0ubINME3w1eC4UdI+rAim4SEWIcYhmkReCaE0XsKHORzmKS5TCPXf5g1DStnCA6WEFnj5bX2c0jIrYhyeAfuTTJECVcSsiX0rcfWevJ6pPpxXxIyxCdHq+gJyvo6OymEWGqBZdck8AEccJjQRl4ZMiPIPQHFIko8ZRx97SpkbWyUsxPEZ0c+Xek4NHN+yIbwRKFdGQ9smERg0yb2xwR8uwEeDE9gitYQSCjI2P4pUG5wvfOEQ1uHlHKybkgax8mSRQIheDCgzdQmAiGbEMXU7gASRKOGVVxYu4VIlQs6fE4jGEo4WImOOLMhTkDlUkiYsJoEmlOMju6F4iYyA+cKSqlPUgDYhhpNsQTxokMWDKKjGIALQv7RURhu2teQ0QIcmhCPTzuGGW0sEsjrfkQb5waYdtLSpRJKPe8sBLR4PR5i06Ha4iIGaSiECpUQSLqkbS6QFTkx1+hLwkFHZIUVSPaa9MaIvKC2IYxHOx7AUQs5npIdpSB97HFrbsPVBx22cS0Y4SrfVE7oudvMaLatjQXCSTXSkBBZnhkWyKAZT9EmgUGcko79pKRtIV+whUe92tR9nSbYkVgCzhRNYxs1kzATrAnmIIk0jMC2cYaQ1wL42ZwEfMUpNyEDD3v0naMkE7G5f6GWBFW0vOSxBaiXmmsTK9BRQa1PILRBSVYHEkv5ExxazdgOOwNF4zGMAgFmFpMNNOqGtF6umusGCVyBCGcKRIlyDNunEhjIPnJ3S/t07qgxhiSEUGJtIEL0+CSQKm7z9QbJkJ4GpFMfHkR0bDXqo4JdYTI0wxSvhjBuwxk4LGIakXtFyhaUa6HP3mAtTfb25YiXQFIDIw+YusTTzISpm22KkR3oG4QcR5Buge+dz9hOkI8QlJq64DAxxAOZb2myIz7H56dEiEu58bTWVuXJaHYzk1CakRNbY32H7ep7hB5NnQbSpTWiLFEy4AIZwgYKnsJhb7RAWFCWHtSCBhIACQlAhBJlYvHFc2QMaJffvThMvrVUnrQIaL0jbm5IWsHyXh6yGY/MbeFqhxBTI8FFwo+EiZiaVHaQj/OPDoBM0MVE7QlRB8+WEYf/WIZfdE1ojys7IKJEJUSmHBb0BNDFeP8jaDeJeRF4JQ1C3E632H7/IBxkl1NnmMzERVgYeQKe7tmBC7TiCXRSFIuocq3E7OXiLo6HydCSw0RUXpu4PLq7HrzEOUjmbtoQxmUqZ4QCWaCMMrjtEeLCIPa5JIGGhJwprNZ7c1HBPlfRSPE9ddcpUEgdRJunHHwTJeUSR7ZCUgZs+zOm46IMkUhS0SoEKWKzFIXTShBStgFE1RAEm4mmdGGI8KcoYCGdhofcp3sVqBRKuvH3KzbQq53iybjbNMRIcTMSDLNhObptKu9UY0IZq6zn1lKedUMJuaeRDTDWGRHDtMa6ng+IQEZkmQUPiCLtHk2uKz61VibjcizdT+FQo0JqTWPuRtrSEUxGJaCZEkqAfWKkoKb2ufYDERpoZoNjdKeK4zTtrXnJWlrSIfMg9AuhaAK2HDOcEVSvVmIIDG2dWsC1Zft4KtE5pYUz676hAoFGzv5oREdESh/ZeO60M1AxOANj1QSgdsBryIos5k0lO0ejjXBoggo/Zwu9rOOmajmZ98ERJAtM1vje8GbmEqdgAlBkQpOGopVFXhGusmhsWFhU3bMbSuxNwGRR4BPZDAOIgOOl2KbKmsd6kBxzT0mY06iZBy0Ym3GXgs3eqANQ+SlbUXsJV7qlzHnIgnAGVOh3jDImGnEBXdzQ1zESlIYiEgXJ9I2HFGmXCufICoSajuRI4jpUK0K147GVMShCuAbWib3DdHM23XVBIJCNYGBaEdgbDeFcEoYYhx8OrpXAw2GjQiR7bh6qY/Jl19pWe8WFMM9oV7jzEQirH2yFkRr2ZjFVDPbpIY6w/qiREdeImm6qKE08WGEihlBnhDzDbJZRMNnS+mXS+lZV4gIE0EsFDKhVFxIqhg2o8ijEUJaFlPt8U4RKPvn30W0AZNEOGERjwMDhvQm0RCtILYRFicBUx6z09juXmnLaPKYBXalFRGNLlsF9/pdq4a+//rXbXrdlRVhYwiSwqMBJdJNM9sVRYi58G8upe1rIA1DCy7Z7MBNyU4f3rbrsYjo8vuHD7+3H7Nyt8K/ke9/XdYnJf3tS9//r1dt+p+uEKVT0G5hftoRQzJgHgnT9lCUbkwPjWH6EmKZSoTwoOiwq4gsrWmTej5ED1sFiN4r692SPrGIXr7Tou4QzTJzs4x2KhoJwSxAymIC1T1UczFXXF1GPGGMUC6xom5OFrlGNq6wqc1ElHJKF6M594xpgjGUbUoFZEQY5El2zdF+oAy2S0I9RoQgSCg8WQ9S13XcKEQzvCAvIgpKXq7s3pjAQOBjNOaJna/VXGg76SGd5wLXlXjV7f3NRTRBhaSKbcyDij9JOCc8BCsKYia1wRK5uSOXP8VgVlXrizYfkZebkHbe2uYCxqCEQ8CbnKRlNyIjOTT3FFG1cH7BA9IKeVyP29lbRBXCdvIIZbFti6hKDTuJtogqtEXUqi2iVt0FopepUkTBI7dV/+zpXZOo1R0g+uHHvzr9PV3rfrB7cgL/rl5YfVarp0ufmlFxgsdj+Eg/VX/zceG8jgu3AfjidGAXVfPf1qojRC9/+MdP2Tka51aFkzUaDg242v18qdMOPj6fOb9jDp2fVLyEC6eTWl286ALRyx9/ajo74eCs9tCMs+vdZU6E+Ph8qQNNzi8OdxbXyYsOEP3wU+MrPml6YYcHF4sjWgrQyfO982XOHji8/u3qiP7R/JIbEe0cnjxdlND+MoSWRrRz+M+VEf3rp5bX1vISFjajLBotqN3z67NFZV/f2T9tg3alxuyPqRFd1On6P+uUZk/Xi4a1FNF56y67GS3u4C2jR3t1sxjlDVi1G7KOXKA46AUlDdoUPE8PhVgK0a1M74T2l/ho9Z+UIrpYYk/bkTOjw6UQHdwGIndqxdlpHwTX+mXN7FQP4E5VO9hPx4gGp8+ddaafT2vNc6qVEfWadtZ3sMvOITo8se8ILGBmHF6VtHsM76l8o/vGboaoOPJvAdFx01bNJx0hOjsfH2XQfvLMAKyo6piZ00pEz28HUcOG3w4OaAi69UVh8GTRIyTWBFH2yy7Ho9mABKOxKkoFe2NE5ecftmndEB2Vx8/MzwT3N3sjKK3PLsLaRTp1C23WDVFY0rB8QwhWNHsj3JxZUe1Sr7rlWh0gathf35273rMDwm8ZFtlDKr93h4huJeifndtBBQxmz0PLGW1//JDjCoM+mgy020d00xqnjoP0KIOZ4w3yaWQwfshgJsHs93und2dFt4Kow6B/B4i+efDFAnrw0SL6xYYgWmgx8Id1L6RSv8oQHe7u1USE83l1dXe+6JtFCNW/kGZEO9c1randnXnbThebjuiirlk4d9/yoAVRrX3fQ0Rf/L5aNUn3g/uHaAlHf98QlWd9/T++95XVe++6Xvi7X75+5w8FrQui61pEc56xfzZGNLTruwuIvirMpXzy5evi/MnLNUF0eFEXyw9qpzRKOskQla1oQxB1mDpuLKI5+qdbRB0h2tyBtkV0e4i2A60V0daK7jGiWwj6f6pG9M6aIDr8jKT6uXVOn9ToxYbXaIdP3d8+8NDPbRPWxwhXK0MUFKbijp74x0eFeYJ+WJoYWJeu42fpj0W6PEdWnp0N63Z4Z4iGxbmBnj8oThQEw5Kd3roVLde7viFEbhw1IRp0MtBuWtlA6wxR7s7pDyisDuiFfm4lQHgvEZX/3shkwZbzSMAkLHm31RFdftqgS9//8r8L+mNBz/zXv2nSDSAqT2cXrod21jvsemXIp6UWVV7ff+r7X32dXwP89Z/y+tvv/NevXtbr1Y1bUd8vWtGTo17eivqdDLRP6wk9fGgRNayT/sQiqlgjPc1sF0YUtFpR/tGWQOGZ8s4pc1ibhqjdXRcCOigLZc6U7NKbsrO6h4jyidFgupJiDKqUFw03YqAVOIXT7LrwgvE06OfBWu+cJ2wXApaurhciRHh5DSP89veKc/fTS5Vd/oOTq+dzB/1u8qLbQ4S8aNCb0dHVedUya6vragGogV8d9N1Ct/K6t7VBhDw9qCB0fHVVt1nnoGYBxOHh9UVYhuPXXlsbRFj2KgD1BudAqOYPPtUsrDm9AEanvVK9Go4DmY1s/WOXPfXdtQ7K2FtBdPbvKguyYegEXka/uJC2bSeM3Rl0YH2xddfDiWO2a7aH+QXc46/rguh5NaHe8YFFFOZX7Z62VY4W0WEW0Ya56LXeiPZm02in/kWKKD/A2lYyW0Rn5cZQbxLZermNJv3h2qSOZ3ujavVSRM8XRlR20MPqGOevkbtG1Xr8vvNFCym1ouNhkFUew8G0Cx766TaaJ0FmTGuDqOZ1pIiePcgv223pk2dWVLaY1KrCMG2K+GHWE9kQRNX98yZE44Bo27L9rEubc01gQ931rtcUUS50jTdnOU5DSLXSK/DPtbXXJaJ1jyjfEJpGy4E/CMYZk70C7NauX9QdomwUTeY6gnwrMksA+kEn7rq1MVt/9MDCjdnuEJXdtV8K9V0G/cYThke+/2z2MOFv08/fumOFG08UvkFE7tSD6R42v1zyd1jG3rRucKD5+a1avcL2/v40xV4dUdUuy3xF2dhIHVZsCM5rbkQL7HbNBtr0p4T+1Edn7nsw/vmDDtz1k6YDP6AWKJ0SUjxeAGr0g7qGmP2+X5qwrkE0/N8mfVO8miIKw3LYn05j5y4Ouwj6x3tHtdqzRy8UbykCG/hh42FacyIq+UP/24L8Pxc0Th37NmWEFLFvv8CV4tTINNR1kDreji9qRlRYkf/9X/xC9Pzaf5mLmq9eja2oHMjcpUnVsVbuOpzDF40KqcZf/EIO9p5fyrUsokdgPq7EOO75vePpNNpkM/R0W/RKiE72ahpdDeovquOzm0B0Niz3rodV8le1ot2TeTdgTFR/1lTjGVTdI7Jrh3K/iNCfzvUPJ4l2b3i8Yu96CTUf6lar7hHlMovxkqOZ7vXQBb0Fg/505eD++4seo9Y8cdOmp7h6knU1RINBDlFvgqg3Xn8VurJ/IUTY0IkaTi1q0uncO6KL+vf0J3eDyDnFQvt6eNxPZ4iCYTo7dJxeWggR4rcQwVq1OKKXFYhaatdl3fV8iJqjXGP0mussuMUR/aFgRuOBNlMszd4y1t5Z14gqD3ubqOoMr4mWRTTPw6Zy82gHZV08qlN6ZuHhXKfMvrUDrbia/Ik/vpCduVcqatw5jYvH2nkIeShqLOvnUmNhP49Kf6JuSStaGNGcR6tjuXg2vXJ2PaNi1Lcrq65qwmBd+rpTtam9zYrmIgRamdDKiHqqiKjhPOCTmv3oO1VG1HKY89y5NTa9mhUat4Wo93N5LePj3dpEv+ZNHx5W7fqvRwRU/2/+6gNjFdXqu+/4d/XfnVPfWdV+92dSsdrz4xc1+rxGi937888/+2BuQA5SzeT67WiBP3O41VZbbbXVVltttdWN6/8Bwa+qzpLc5TsAAAAASUVORK5CYII=")


// let div = document.querySelector("div");

// div.prepend(img)

//select the first item in a delet it fro the DOM;


// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// ul.removeChild(li);

// ul.style.backgroundColor = "red";


//what uhe diffrence between class list add() and classlist .toogle();


// let li = document.querySelectorAll("ul li:nth-child(2n");
// console.log(li);


// li.forEach((elem) => {
//     elem.classList.add("hulu")
// })


//set the font size all <p> elemant to 18px using . style


// let p = document.querySelectorAll("p")
// p.forEach(element => {
//     element.style.fontSize = "18px";
// });



//          event handling

// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function(){
//     h1.style.color="red";
// });


// let p = document.querySelector("p");

// let clkk = ()=>{
//     p.style.color="pink";
// }

// p.addEventListener("dblclick", clkk );
// p.removeEventListener("dblclick", clkk);


// let h2 = document.querySelector("h2");

// const manish = () => {
//     h2.style.color = "red"
// }
// h2.addEventListener("click", manish);


// let input = document.querySelector("input");

// let textinputs = (data) => {
//     if(data.data === null){
// console.log(data.data);
//     }
//     else{
//         console.log(data.data);
//     }
    
// }

// input.addEventListener("input", textinputs)


// let select = document.querySelector("#device");

// select.addEventListener("change",function(manish){
//     console.log(manish.target.value);
    
// })

// let rani = document.querySelector("#rani")

//  let select = document.querySelector("#device");

//     select.addEventListener("change", function (e) {
//         console.log( e.target.value);
//         rani.textContent = `${e.target.value}`
//     });


let h1 = document.querySelector("h1")
window.addEventListener("keydown", function (evt){
    if(evt.key === ""){
        h1.textContent = "SPC"
    }
    console.log(evt.key);
    h1.textContent = `${evt.key}`;
});
