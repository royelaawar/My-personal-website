//grab h2 with id 
let carName = document.getElementById("bmw-name")
let picture = document.getElementById("img")
let hp = document.getElementById("hp")
let torque = document.getElementById("torque")

let carNum = 0


//add event listner to image

picture.addEventListener('click', function() {

    carNum ++ 
    if (carNum > 6){
        carNum = 1
    }
    console.log(carNum)

    if (carNum == 1) {
        carName.innerHTML = "BMW E30"
        img.src= "./pictures/e30.jpeg"
        hp.innerHTML = "Horsepower 296 HP"
        torque.innerHTML = "Torque 170 lb-ft"

    }

    else if (carNum == 2) {
        carName.innerHTML = "BMW E36"
        img.src="./pictures/e36.jpeg"
        hp.innerHTML = "Horsepower 321 HP"
        torque.innerHTML = "Torque 258 lb-ft"
    }

    else if (carNum == 3) {
        carName.innerHTML = "BMW E46"
        img.src="./pictures/e46.jpeg"
        hp.innerHTML = "Horsepower 343 HP"
        torque.innerHTML = "Torque 269 lb-ft"
    }

    else if (carNum == 4) {
        carName.innerHTML = "BMW E92"
        img.src="./pictures/e92.jpeg"
        hp.innerHTML = "Horsepower 420 HP"
        torque.innerHTML = "Torque 295 lb-ft"
    }

    else if (carNum == 5) {
        carName.innerHTML = "BMW F80"
        img.src="./pictures/f80.jpeg"
        hp.innerHTML = "Horsepower 431 HP"
        torque.innerHTML = "Torque 406 lb-ft"
    }

    else if (carNum == 6) {
        carName.innerHTML = "BMW G80"
        img.src="./pictures/g80.jpeg"
        hp.innerHTML = "Horsepower 473 HP"
        torque.innerHTML = "Torque 406 lb-ft"
    }
})


