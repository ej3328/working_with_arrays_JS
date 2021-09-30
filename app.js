var wrapperEle = document.body.querySelector(".wrapper")

var warriors = [

    {
        name: "Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name: "Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name: "Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name: "Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name: "Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name: "Porty",
        damage:1,
        health:14,
        warrior:true
    },
    {
        name: "Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name: "Larry",
        damage:2,
        health:17,
        warrior:false
    }
];


//wrapperEle.innerHTML = warriors;

for(var i=0; i<warriors.length; i++){
    var ele = document.createElement("div");
    var nameEle = document.createElement("h2");
    var damageEle = document.createElement("h3");
    var healthEle = document.createElement("h3");
    var warriorEle = document.createElement("h4");

    //ele.innerHTML = warriors[i];
    //nameEle.innerHTML = warriors[i].name;
    //damageEle.innerHTML = warriors[i].damage;
    //healthEle.innerHTML = warriors[i].health;
    //warriorEle.innerHTML = warriors[i].warrior;



    if(warriors[i].name !== true && warriors[i].health >= 10 && warriors[i].damage >= 2 && warriors[i].warrior == true ){
        nameEle.innerHTML = warriors[i].name
        healthEle.innerHTML = "Health: " + warriors[i].health
        damageEle.innerHTML = "Damage: " + warriors[i].damage
        warriorEle.innerHTML = warriors[i].name + " is a warrior!"
        if(warriors[i].name.includes("a")){
            nameEle.style.color = "red"
        }

    }

    wrapperEle.appendChild(ele);
    ele.appendChild(nameEle);
    ele.appendChild(damageEle);
    ele.appendChild(healthEle);
    ele.appendChild(warriorEle);




}

