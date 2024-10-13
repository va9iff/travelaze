import { titleid, graph } from "./dics.js"
import { data } from "./data.js"
import { nameMap } from "./namemap.js"
// import { startgame2} from "./script2.js"
const grab = s => document.querySelector(s)
var difficultyLevel = 'easy';
var mode = 9
var life = 3

function changeMode(newMode) {
    mode = newMode
    ;[...document.querySelectorAll(".mode")].map(m=>m.classList.add("hidden"))
    grab(`.mode.m${mode}`).classList.remove("hidden")
    if (mode == 2) {
        const shr = shortestPath.slice(1, shortestPath.length - 1)
        for (const path of shortestPath) {
            const p = grab(`#${titleid[path]}`)
            p.setAttribute("fill", "#ddd")
        }

    }
    grab(".restartt").click()
}

const fromtoStartingDot = `<span class="fromtodot" style="background-color: #77CDFF"></span>`
const fromtoEndingDot = `<span class="fromtodot" style="background-color: #F97C54"></span>`

document.getElementById('easy').classList.add('clicked');
document.getElementById('easy').addEventListener('click', function() {
    this.classList.add('clicked');
    difficultyLevel = 'easy';
    // localStorage.setItem('difficultyLevel', difficultyLevel);
    // location.reload();
    document.getElementById('medium').classList.remove('clicked');
    document.getElementById('hard').classList.remove('clicked');
    resetGame(difficultyLevel);
    overlayma()
});
document.getElementById('medium').addEventListener('click', function() {
    this.classList.add('clicked');
    difficultyLevel ='medium';
    // localStorage.setItem('difficultyLevel', difficultyLevel);
    // location.reload();
    document.getElementById('easy').classList.remove('clicked');
    document.getElementById('hard').classList.remove('clicked');
    resetGame(difficultyLevel);
    overlayma()

});
document.getElementById('hard').addEventListener('click', function() {
    this.classList.add('clicked');
    difficultyLevel = 'hard';
    // localStorage.setItem('difficultyLevel', difficultyLevel);
    // location.reload();
    document.getElementById('easy').classList.remove('clicked');
    document.getElementById('medium').classList.remove('clicked');
    resetGame(difficultyLevel);
    overlayma()

});

//till findShortestPath it is for giving suggestions
const inputField = document.getElementById("svgPartInput");
const suggestionsContainer = document.getElementById("suggestions");

const relatedWords = Object.keys(titleid);

function filterWords(inputValue) {
    console.log(relatedWords.filter(word => word.toLocaleLowerCase('tr-TR').includes(inputValue.toLocaleLowerCase('tr-TR'))));
    return relatedWords.filter(word => word.toLocaleLowerCase('tr-TR').includes(inputValue.toLocaleLowerCase('tr-TR')));
  }
  
  function displaySuggestions(inputValue) {
    if (inputValue === "") {
      suggestionsContainer.innerHTML = ""; 
      return; 
    }
  
    const filteredWords = filterWords(inputValue).slice(0, 6);
    suggestionsContainer.innerHTML = "";
  
    filteredWords.forEach(word => {
      const suggestion = document.createElement("button");
      suggestion.classList.add("suggestion");
      suggestion.textContent = word;
  
      suggestion.addEventListener("click", () => {
        inputField.value = word;
        suggestionsContainer.innerHTML = "";
		  document.querySelector(".btn.show").click()
      });
      suggestion.addEventListener("keydown", e => {
		  if (e.keyCode == 40) {
			  e.target.nextSibling?.focus()
			  e.preventDefault()
		  }
      });
      suggestion.addEventListener("keydown", e => {
		  if (e.keyCode == 38) {
			  const prev = e.target.previousSibling
			  prev?.focus()
			  if (!prev) inputField.focus()
			  e.preventDefault()
		  }
      });
  
  
      suggestionsContainer.appendChild(suggestion);
    });
  }
  

inputField.addEventListener("keydown", e => {
	if (e.keyCode == 40) {
		e.preventDefault()
		document
			.querySelector("#suggestions")
			.querySelector("button")
			.focus()
	}
})
	
inputField.addEventListener("input", e => {
  const inputValue = inputField.value.trim();
  displaySuggestions(inputValue);
  overlayma()
});

function titlehandler(title){
    title=title.trim();
    title = title.charAt(0).toUpperCase()+title.substr(1).toLowerCase()
    return title
}
//shortest path overall
function findShortestPath(graph, start, end) {
    if (start === end) {
        return [start];
    }

    let visited = new Set();
    let queue = [[start, [start]]];

    while (queue.length > 0) {
        let [currentCountry, path] = queue.shift();
        visited.add(currentCountry);
        for (let neighbor of graph[currentCountry]) {
            if (neighbor === end) {
                return [...path, neighbor];
            }

            if (!visited.has(neighbor)) {
                queue.push([neighbor, [...path, neighbor]]);
                visited.add(neighbor);
            }
        }
    }

    return null;  // No path found
}
//This is for finding shortest path after winning
function shortestResult(array,start,end){
    var tempGraph = {};
    for(var i=0;i<array.length;i++){
        var a = graph[array[i]];
        var b=[];
        for(var j=0;j<a.length;j++){
            if(array.includes(a[j])){
                b.push(a[j]);
            }
        }
        tempGraph[array[i]]=b;
    }
    return findShortestPath(tempGraph,start,end);
}
//checking if 2 region is neighbor
function isAdjacentTo(main,region) {
    const adjacentVerticesOfAbseron = graph[main];
    return adjacentVerticesOfAbseron.includes(region);
}

function endfinder(startKey){
    var ender = Math.floor(Math.random()*71);
    var ending = Object.keys(titleid)[ender];
    console.log("Ending:",ending); 
    if(isAdjacentTo(startKey,ending) || startKey===ending){
        console.log("Ender: ")
        return endfinder(startKey);
        
    }
    console.log(ending);
    return ending;
}

function randomRegions(difficultyLevel){
    var min_path_count = 0;
    var max_path_count = 99;
    var diff_index = 2;
    //Choosing random start
    if(difficultyLevel == 'easy'){
        diff_index = 2
        min_path_count = 3
        max_path_count = 5
    }

    if(difficultyLevel == 'medium'){
        diff_index = 1.8
        min_path_count = 6
        max_path_count = 9
    }

    if(difficultyLevel == 'hard'){
        diff_index = 1.5
        min_path_count = 10
        max_path_count = 99
    }
    const startindex = Math.floor(Math.random()*71);
    const startKey = Object.keys(titleid)[startindex];
    console.log("Starting:",startKey);
    //title of the end
    var endKey = endfinder(startKey);
    //we find the shortest path from start to end
    const shortestPath = findShortestPath(graph, startKey, endKey);
    console.log(shortestPath);
    const numberofshortestpath = shortestPath.length;
    console.log(min_path_count, max_path_count, numberofshortestpath);

    if(numberofshortestpath < min_path_count || numberofshortestpath > max_path_count){
        return randomRegions(difficultyLevel);
    }
    var allowednumberofpath = Math.round((shortestPath.length-2)*diff_index);
    return {
        "startKey":startKey,
        "endKey":endKey,
        "shortestPath":shortestPath,
        "allowednumberofpath":allowednumberofpath,
        "numberofshortestpath":numberofshortestpath
    };
}
var pathData = randomRegions(difficultyLevel);
var startKey = pathData["startKey"];
var endKey = pathData["endKey"];
var shortestPath = pathData["shortestPath"];
var allowednumberofpath = pathData["allowednumberofpath"];
var numberofshortestpath = pathData["numberofshortestpath"];
var manipulatedRegions = [];
const FromTo = `${fromtoStartingDot}<span style="">${startKey}</span> <span style="">${"&#10141"}</span> ${fromtoEndingDot}<span style="">${endKey}</span>`;
//For display
document.getElementById('fromto').innerHTML=FromTo;
//during the game all the regions that are neighbor with startkey
var neighbors = [startKey];
//during the game all the regions that are not neighbor with startkey
var notneighbors = [endKey];
var allregions = [];
//loading and making all elements display none. Just start and end is block
function loadAndManipulateSVG(startKey, endKey) {
    fetch("azerbaijan.svg")
    .then(response => response.text())
    .then(svgText => {
        var parser = new DOMParser();
        var svgDoc = parser.parseFromString(svgText, "image/svg+xml");
        var allElements = svgDoc.documentElement.querySelectorAll("*");

        allElements.forEach(function(element) {
            //// element.style.display = 'none';
            // element.setAttribute('fill', '#00000000')
            element.setAttribute('fill', '#fff')
        });
        var starting = svgDoc.getElementById(titleid[startKey]);
        starting.style.display = 'block';
        starting.setAttribute("fill","#77CDFF");

        manipulatedRegions.push(starting);
        var ending = svgDoc.getElementById(titleid[endKey]);
        ending.style.display = 'block';
        ending.setAttribute("fill","#F97C54");

        manipulatedRegions.push(ending);
        console.log(startKey,endKey);
        document.getElementById("svgContainer").appendChild(svgDoc.documentElement);
        if (mode==9) changeMode(2)
    })
    .catch(error => console.error("Error loading SVG:", error));
}
loadAndManipulateSVG(startKey, endKey);
//for checking/changing neighbors/notneigbors according to the changes.
function checknotneighbors(){
    var changed=[];
    for(var i=0;i<notneighbors.length;i++){
        for(var j=0;j<neighbors.length;j++){
            if(isAdjacentTo(neighbors[j],notneighbors[i])){
                changed.push(notneighbors[i]);
                console.log("Changed:",changed)
            }
        }
    }
    let index
    for(var k=0;k<changed.length;k++){
        console.log("Changed k :",changed[k]);
        index = notneighbors.indexOf(changed[k]);
        var element = document.getElementById(titleid[changed[k]]);
        var title = element.getAttribute('title');
        element.setAttribute('fill', '#0f7');
        notneighbors.splice(index, 1);
        if (!neighbors.includes(title)) {
            neighbors.push(title); 
        }
        
        checknotneighbors();
    };

}
// document.getElementById("shortpath").innerText="Left chances: "+allowednumberofpath;
document.querySelector(".btn.show").innerText="Yoxla";
grab(".remainder").innerText = "Qalan gedişlər: " + allowednumberofpath
//How many is inputted
let counter=0;
function showSVGPart() {
    var inputfield =document.getElementById("svgPartInput");
    var title = inputfield.value;
    title=titlehandler(title);
    if(allregions.includes(title)){
        popupHandler("Artıq daxil edilib!",1400);
        return;
    }
    if(title == startKey || title == endKey){
        popupHandler("Başlanğıc və ya təyinat nöqtəsi daxil edilə bilməz",1400);
        return;
    }
    console.log('Title',title);
    inputfield.value="";
    inputfield.focus();
    //for working with id of the svg path elements
    var partID = titleid[title];
    // alert(title)
    overlay(title)
    var partElement = document.getElementById(partID)
    //if chances left or end region is not found, or element exists
    if(allowednumberofpath>0 && !neighbors.includes(endKey) && partElement){
        counter++;
        //showing included regions
        const listItem = document.createElement("li");
        const nameList = document.getElementById("nameList");
        listItem.textContent = counter + ") " + title;
        nameList.appendChild(listItem);
    allowednumberofpath=allowednumberofpath-1;
    // document.getElementById("shortpath").innerText="Left chances: "+allowednumberofpath;
    document.querySelector(".btn.show").innerText="Yoxla";
    grab(".remainder").innerText = `Qalan gedişlər: ${allowednumberofpath}`
    let isneighbor = false;
    if (partElement) {
        manipulatedRegions.push(partElement);
        const title = partElement.getAttribute('title');
        allregions.push(title);
        console.log(allregions);
        //displaying included region
        partElement.style.display = 'block';
        partElement.setAttribute("fill", "#a7a7a7")
        console.log(title);
        //checks if added region is neighbor with any green filled block
        for (var i = 0; i < neighbors.length; i++) {
            if (isAdjacentTo(neighbors[i], title)) {
                partElement.setAttribute('fill', '#0f7');
                if (!neighbors.includes(title)) {
                    neighbors.push(title); 
                    isneighbor=true;
                }
                //If region is neighbor to any of them we need to exculde it from notneighbors list
                if(notneighbors.includes(title)){
                    notneighbors = notneighbors.filter(value=> value!==title)
                }
                //updates all the regions according to new changes. F.e, region A and C are not neighbor, but B is neighbor with both. Then when B added
                //this function helps to check all previously added regions' status
                checknotneighbors();
                console.log(neighbors)
                break; 
            }
        }
        //if isneigbor remained false we need to add the new region to the list
        if(!isneighbor && !notneighbors.includes(title)){
            notneighbors.push(title);
        }
        //this is the win situation
        if(neighbors.includes(endKey)){
            var element =document.getElementById('fromto');
            //this shows shortest result from start to end if we won
            let arr = shortestResult(neighbors,startKey,endKey);
            let paths = arr.map(id=>document.querySelector(`path#${titleid[id]}`))
            for (const [i, path] of paths.entries()) 
                setTimeout(()=>{
                    path.classList.add("winimate")
                }, i * 200)
            console.log(paths)
            grab(".answer").innerHTML += "<br><span style='font-size: 17px;'>" +"Cavab: " + arr + "</span>";
            const pathElements = document.getElementsByTagName("path");
            for (let i = 0; i < pathElements.length; i++) {
                pathElements[i].style.display = "block";
            }
            for (let i = 0; i < notneighbors.length; i++) {
                var element = document.getElementById(titleid[notneighbors[i]]);
                element.setAttribute('fill','gray');
            }
            // document.getElementById('restartButton').style.display = "block";

        }
        //if chances became 0 and none of them executed then it means we didnt won
        else if(allowednumberofpath===0){
            let arr = findShortestPath(graph,startKey, endKey);
            var element =document.getElementById('fromto');
            grab(".answer").innerHTML += "<br><span style='font-size: 17px;'>" +"Cavab: " + arr + "</span>";

            popupHandler("Məğlub oldun!", 5000);
            // document.getElementById('restartButton').style.display = "block";
        }
    } else {
        console.error("Element with ID '" + partID + "' not found in the SVG.");
    }
}
else if(!partElement){
    console.error("Element with ID '" + partID + "' not found in the SVG.");
}
}

function resetGame(){
    // grab(".answer").innerHTML = ""
    counter=0;

    pathData = randomRegions(difficultyLevel);
    startKey = pathData["startKey"];
    endKey = pathData["endKey"];
    shortestPath = pathData["shortestPath"];
    allowednumberofpath = pathData["allowednumberofpath"];
    numberofshortestpath = pathData["numberofshortestpath"];
    indexOfShortest = 0;
    current = shortestPath[indexOfShortest]
    target = shortestPath[indexOfShortest + 1]
    threeregions =getThreeRegion(startKey, endKey,shortestPath[indexOfShortest],shortestPath[indexOfShortest+1])
    console.log("Manipulated: ", manipulatedRegions);
    manipulatedRegions.forEach(function(element) {
        //// element.style.display = 'none';
        element.setAttribute('fill', '#00000000')
    });
    manipulatedRegions = [];

    var svgContainer = document.getElementById("svgContainer");
    // svgContainer.innerHTML = '';
    svgContainer.querySelector("svg").remove()

    const FromTo = `${fromtoStartingDot}<span style="">${startKey}</span> <span style="">${"&#10141"}</span> ${fromtoEndingDot}<span style="">${endKey}</span>`;
    //For display
    document.getElementById('fromto').innerHTML=FromTo;
    document.querySelector('.frommto').innerHTML=FromTo;
    console.log(document.querySelector('.frommto'))
    //during the game all the regions that are neighbor with startkey
    neighbors = [startKey];
    //during the game all the regions that are not neighbor with startkey
    notneighbors = [endKey];
    allregions = [];
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = '';
    // document.getElementById("restartButton").style.display="none";
    document.querySelector(".btn.show").innerText="Yoxla";
    grab(".remainder").innerText = `Qalan gedişlər: ${allowednumberofpath}`

    console.log("start end: ", startKey, endKey);
    loadAndManipulateSVG(startKey, endKey);
	// grab(".difficulty").classList.add("hidden")
};

function restartGame() {
    // if  ( mode == 2 ) return startgame2()
    location.reload();
    overlayma()
};

function popupHandler(content, time) {
    document.getElementById("popup-content").innerText = content;
    window.location.hash = 'popup1';
    setTimeout(function() {
        window.location.hash = '';
    }, time);

};


grab(".btn.show.brutal").onclick = e => {
    showSVGPart()
    // setTimeout(()=>{
        // overlay()
    // }, 10)
}

grab(".restart").onclick = e => {
    resetGame()
}
grab(".restartt").onclick = e => resetGame()

function overlay(title) {
    setTimeout(()=>{

    grab("#overlay").classList.remove("ghosting")
    }, 800)
    grab(".overtitle").innerText = title
    try {
        grab("#overlay").querySelector(".overtext").innerText = data[title].detail
    } catch (err) {

    }
    grab("#overlay").querySelector(".splash").src= `./imgs/${nameMap[title]}`
}

function overlayma() {
    grab("#overlay").classList.add("ghosting")
    console.log('ha')
}

grab("#overlay").onclick = e => {
    overlayma()
}

grab('.culmode').onclick = e => {
    changeMode(2)
    grab("#modesdrop").removeAttribute("open")
    resetGame()
}

grab('.geomode').onclick = e => {
    changeMode(1)
    grab("#modesdrop").removeAttribute("open")
    resetGame()
}

overlayma()
function getThreeRegion(starting, ending, current, target){
    let current1 = graph[current];
    let current_neighbors = current1.filter(element => element !== target);
    let key = Object.keys(graph);
    let keys = key.filter(element => (![starting, ending, current, target].includes(element) && !current_neighbors.includes(element)));
    let shuffledKeys = keys.sort(() => 0.5 - Math.random());
    
    console.log(current_neighbors);
    console.log(keys.includes('Şərur'));
    if (current_neighbors.length == 0){
          var randomKeys = shuffledKeys.slice(0, 2);
    };
    if (current_neighbors.length == 1){
          var randomKeys = shuffledKeys.slice(0, 1);
    }
    if (randomKeys){
    for (let i = 0; i < randomKeys.length; i++) {
        if ([starting, ending, current, target].includes(randomKeys[i])){
            getThreeRegion(starting, ending, current, target);
        }  
    }
    }
    else{
          var randomKeys = [];
          var shuffledNeighbors = current_neighbors.sort(() => 0.5 - Math.random());
          var remaining_neighbors = shuffledNeighbors.slice(0,2);
          current_neighbors = remaining_neighbors;
    }
    current_neighbors.push(target);
    var result = current_neighbors.concat(randomKeys);
    var shuffledResult = result.sort(() => 0.5 - Math.random());
    result = shuffledResult;
    let index = result.indexOf(target)
    console.log(result, index); // Bu hissə qarışdırılmış nəticələri list formatında verir. Məsələn, [ 'İmişli', 'Saatlı', 'Neftçala' ]
    return [result, index]
}
var indexOfShortest = 0;
var current = shortestPath[indexOfShortest]
var target = shortestPath[indexOfShortest + 1]
var threeregions =getThreeRegion(startKey, endKey,shortestPath[indexOfShortest],shortestPath[indexOfShortest+1])
// document.getElementById("shortpath").innerText="Left chances: "+allowednumberofpath;
//How many is inputted


function showSVGPart2(title) {
    console.log("BBBBBBBBBB", shortestPath)
    console.log("SVG", title)

    title=titlehandler(title);
    var partID = titleid[title];
    var partElement = document.getElementById(partID)
    console.log(partElement)
    /////TARGET BIZIM NOVBETI HEDEFIMIZDIR.
    if (title == target){
    // if(allregions.includes(title)){
    //     popupHandler("Artıq daxil edilib!",1400);
    //     return;
    // }
    // if(title == startKey || title == endKey){
    //     popupHandler("Başlanğıc və ya təyinat nöqtəsi daxil edilə bilməz",1400);
    //     return;
    // }
    console.log('Title',title);

    //for working with id of the svg path elements
    var partID = titleid[title];
    var partElement = document.getElementById(partID)
    //if chances left or end region is not found, or element exists


    if(partElement){
        indexOfShortest += 1;
        current = shortestPath[indexOfShortest]
        target = shortestPath[indexOfShortest + 1]
        threeregions =getThreeRegion(startKey, endKey,shortestPath[indexOfShortest],shortestPath[indexOfShortest+1])
        counter++;
        //showing included regions
        const listItem = document.createElement("li");
        const nameList = document.getElementById("nameList");
        // listItem.textContent = counter + ") " + title;
        // nameList.appendChild(listItem);
    // document.getElementById("shortpath").innerText="Left chances: "+allowednumberofpath;
    // document.querySelector(".btn.show").innerText="Göstər (qalıq: "+allowednumberofpath+")";
    let isneighbor = false;
    if (partElement) {

  manipulatedRegions.push(partElement);
        const title = partElement.getAttribute('title');
        allregions.push(title);
        console.log(allregions);
        //displaying included region
        partElement.style.display = 'block';
        partElement.setAttribute("fill", "#a7a7a7")
        console.log(title);
        //checks if added region is neighbor with any green filled block
        for (var i = 0; i < neighbors.length; i++) {
            if (isAdjacentTo(neighbors[i], title)) {
                partElement.setAttribute('fill', '#0f7');
                if (!neighbors.includes(title)) {
                    neighbors.push(title); 
                    isneighbor=true;
                }
                //If region is neighbor to any of them we need to exculde it from notneighbors list
                if(notneighbors.includes(title)){
                    notneighbors = notneighbors.filter(value=> value!==title)
                }
                //updates all the regions according to new changes. F.e, region A and C are not neighbor, but B is neighbor with both. Then when B added
                //this function helps to check all previously added regions' status
                checknotneighbors();
                console.log(neighbors)
                break; 
            }
        }
        //if isneigbor remained false we need to add the new region to the list
        if(!isneighbor && !notneighbors.includes(title)){
            notneighbors.push(title);
        }
        //this is the win situation
        if(neighbors.includes(endKey)){
            var element =document.getElementById('fromto');
            //this shows shortest result from start to end if we won
            let arr = shortestResult(neighbors,startKey,endKey);
            let paths = arr.map(id=>document.querySelector(`path#${titleid[id]}`))
            for (const [i, path] of paths.entries()) 
                setTimeout(()=>{
                    path.classList.add("winimate")
                }, i * 200)
            console.log(paths)
            grab(".answer").innerHTML += "<br><span style='font-size: 17px;'>" +"Cavab: " + arr + "</span>";
            const pathElements = document.getElementsByTagName("path");
            for (let i = 0; i < pathElements.length; i++) {
                pathElements[i].style.display = "block";
            }
            for (let i = 0; i < notneighbors.length; i++) {
                var element = document.getElementById(titleid[notneighbors[i]]);
                element.setAttribute('fill','gray');
            }
            // document.getElementById('restartButton').style.display = "block";

        }
        //if chances became 0 and none of them executed then it means we didnt won
        // else if(allowednumberofpath===0){
        //     let arr = findShortestPath(graph,startKey, endKey);
        //     var element =document.getElementById('fromto');
        //     grab(".answer").innerHTML += "<br><span style='font-size: 17px;'>" +"Cavab: " + arr + "</span>";

        //     popupHandler("Məğlub oldun!", 5000);
        //     // document.getElementById('restartButton').style.display = "block";
        // }
    } else {
        console.error("Element with ID '" + partID + "' not found in the SVG.");
    }
}
else if(!partElement){
    console.error("Element with ID '" + partID + "' not found in the SVG.");
}
}
else {
    // Yanıb sönmə effekti bura gəlir
    var partElement = document.getElementById(partID)
    partElement.classList.add("blinking")
    setTimeout(()=>{
        partElement.classList.remove("blinking")
    }, 2100)
    // Bu həmin regiondur.
}
refreshCards()
    grab(".remainder").innerText = ""
    //// grab(".remainder").innerHTML = `<img src="./`${heart}.`" alt="">`
}


const c1 = grab(".c1")
const c2 = grab(".c2")
const c3 = grab(".c3")

function refreshCards() {
    c1.querySelector(".cardText").innerText = data[threeregions[0][0]]?.detail || "~"
    c2.querySelector(".cardText").innerText = data[threeregions[0][1]]?.detail || "~"
    c3.querySelector(".cardText").innerText = data[threeregions[0][2]]?.detail || "~"

    c1.querySelector(".inside").querySelector("img").src = `./imgs/${nameMap[threeregions[0][0]]}`
    c2.querySelector(".inside").querySelector("img").src = `./imgs/${nameMap[threeregions[0][1]]}`
    c3.querySelector(".inside").querySelector("img").src = `./imgs/${nameMap[threeregions[0][2]]}`
}
refreshCards()

grab(".c1").onclick = e => {
    const c1 = threeregions[0][0]
    showSVGPart2(c1)
}
grab(".c2").onclick = e => {
    const c2 = threeregions[0][1]
    showSVGPart2(c2)
}

grab(".c3").onclick = e => {
    const c3 = threeregions[0][2]
    showSVGPart2(c3)
}

document.body.addEventListener("click", e => {overlayma() })
