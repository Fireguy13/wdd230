let dropdown1 = document.getElementById('drink1');
let dropdown2 = document.getElementById('drink2');
let dropdown3 = document.getElementById('drink3');

dropdown1.length = 0
dropdown2.length = 0
dropdown3.length = 0

function submitorder (){
    var outrecipt = document.getElementById("recipt");
    outrecipt.innerHTML =  "<b>First Name:</b>" + document.getElementById("fname").value + "<br/>"
    outrecipt.innerHTML = outrecipt.innerHTML + "<b>Last Name:</b>" + document.getElementById("lname").value + "<br/>"
    outrecipt.innerHTML = outrecipt.innerHTML + "<b>Phone:</b>" + document.getElementById("phone").value + "<br/>"
    outrecipt.innerHTML = outrecipt.innerHTML + "<b>Email:</b>" + document.getElementById("email").value + "<br/>"
    outrecipt.innerHTML = outrecipt.innerHTML + "<b>Thank you we will let you know when your orders is ready.</b>" + document.getElementById("fname").value + "<br/>"
    
    var firstfruit = document.getElementById("drink1").value;
    var secondfruit = document.getElementById("drink2").value;
    var thirdfruit = document.getElementById("drink3").value;
    var firstfruitdetails = ''
    var secondfruitdetails = ''
    var thirdfruitdetails = '' 



   loadfruitDetails();



}
async function loadfruitDetails(){
    const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    const fruits = await response.json();
    console.log(fruits);
    fruits.forEach((repo) => {
        var firstfruit = document.getElementById("drink1").value;
        var secondfruit = document.getElementById("drink2").value;
        var thirdfruit = document.getElementById("drink3").value;
        var firstfruitdetails = ''
        var secondfruitdetails = ''
        var thirdfruitdetails = ''  
        if(repo.name == firstfruit)  {
                firstfruitdetails = "First Fruit Selected:" + firstfruit + "<br/>";
                firstfruitdetails += "Carbs:" + repo.nutritions.carbohydates + "<br/>";
                firstfruitdetails += "Fat:" + repo.nutritions.fat + "<br/>";
                firstfruitdetails += "calories:" + repo.nutritions.carbohydates + "<br/>";
                firstfruitdetails += "sugar:" + repo.nutritions.carbohydates + "<br/>";
                firstfruitdetails += "protein:" + repo.nutritions.carbohydates + "<br/>";
                var test = repo.id;

            
        }
        else if(repo.name == secondfruit){
            secondfruit = "First Fruit Selected:" + firstfruit + "<br/>";
            secondfruit += "Carbs:" + repo.nutritions.carbohydates + "<br/>";
            secondfruit += "Fat:" + repo.nutritions.fat + "<br/>";
            secondfruit += "calories:" + repo.nutritions.carbohydates + "<br/>";
            secondfruit += "sugar:" + repo.nutritions.carbohydates + "<br/>";
            secondfruit += "protein:" + repo.nutritions.carbohydates + "<br/>";
            var test = repo.id;


        }
        else if(repo.name == thirdfruit){
            thirdfruit = "First Fruit Selected:" + firstfruit + "<br/>";
            thirdfruit += "Carbs:" + repo.nutritions.carbohydates + "<br/>";
            thirdfruit += "Fat:" + repo.nutritions.fat + "<br/>";
            thirdfruit += "calories:" + repo.nutritions.carbohydates + "<br/>";
            thirdfruit += "sugar:" + repo.nutritions.carbohydates + "<br/>";
            thirdfruit += "protein:" + repo.nutritions.carbohydates + "<br/>";


            var test = repo.id;

        }

        });
        var outrecipt = document.getElementById("recipt");
        outrecipt.innerHTML = outrecipt.innerHTML + firstfruitdetails + secondfruitdetails + thirdfruitdetails;    
}
async function loadfruit(){
    const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    const fruits = await response.json();
    console.log(fruits);
    fruits.forEach((repo) => {
        var option1 = document.createElement('option');
        option1.text = repo.name;
        option1.value = repo.name;
        var option2 = document.createElement('option');
        option2.text = repo.name;
        option2.value = repo.name;
        var option3 = document.createElement('option');
        option3.text = repo.name;
        option3.value = repo.name;
        dropdown1.appendChild(option1);
        dropdown2.appendChild(option2);
        dropdown3.appendChild(option3);

        console.log(repo.name)
        
    });
}



loadfruit();