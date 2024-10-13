const graph = {
    'Abşeron': ['Bakı', 'Sumqayıt', 'Xızı', 'Qobustan', 'Hacıqabul'], 
    'Ağstafa': ['Qazax', 'Tovuz'], 
    'Ağcabədi': ['Bərdə', 'Zərdab', 'Füzuli', 'Ağdam', 'Xocavənd', 'Beyləqan'], 
    'Ağdaş': ['Bərdə', 'Yevlax', 'Qəbələ', 'Göyçay', 'Ucar', 'Zərdab','Şəki'], 
    'Ağdam': ['Xocalı', 'Kəlbəcər', 'Tərtər', 'Bərdə', 'Ağcabədi', 'Xocavənd'], 
    'Ağsu': ['Şamaxı', 'Hacıqabul', 'Kürdəmir', 'İsmayıllı'], 
    'Astara': ['Lənkəran', 'Lerik'], 
    'Bakı': ['Salyan', 'Hacıqabul', 'Abşeron', 'Sumqayıt'], 
    'Babək': ['Kəngərli', 'Şahbuz', 'Culfa', 'Naxçıvan','Zəngəzur'], 
    'Balakən': ['Zaqatala'], 
    'Bərdə': ['Yevlax', 'Ağdaş', 'Zərdab', 'Ağcabədi', 'Ağdam', 'Tərtər'], 
    'Beyləqan': ['Ağcabədi', 'Zərdab', 'Füzuli', 'İmişli'], 
    'Biləsuvar': ['İmişli', 'Saatlı', 'Sabirabad', 'Salyan', 'Neftçala', 'Cəlilabad'], 
    'Cəbrayıl': ['Zəngilan', 'Qubadlı', 'Xocavənd', 'Füzuli'], 
    'Cəlilabad': ['Biləsuvar', 'Salyan', 'Neftçala', 'Masallı', 'Yardımlı'], 
    'Culfa': ['Babək', 'Şahbuz', 'Ordubad','Zəngəzur'], 
    'Daşkəsən': ['Şəmkir', 'Kəlbəcər', 'Gədəbəy', 'Göygöl'], 
    'Füzuli': ['Cəbrayıl', 'Xocavənd', 'Ağcabədi', 'Beyləqan'],
    'Gəncə': ['Göygöl', 'Samux'], 
    'Gədəbəy': ['Tovuz', 'Şəmkir', 'Daşkəsən'], 
    'Goranboy': ['Samux', 'Göygöl', 'Kəlbəcər', 'Tərtər', 'Yevlax'], 
    'Göyçay': ['İsmayıllı', 'Kürdəmir', 'Ucar', 'Ağdaş','Qəbələ'], 
    'Göygöl': ['Gəncə', 'Samux', 'Goranboy', 'Kəlbəcər', 'Daşkəsən', 'Şəmkir'], 
    'Hacıqabul': ['Sabirabad', 'Kürdəmir', 'Ağsu', 'Şamaxı', 'Qobustan', 'Abşeron', 'Bakı', 'Salyan'], 
    'İmişli': ['Beyləqan', 'Zərdab', 'Kürdəmir', 'Sabirabad', 'Saatlı', 'Biləsuvar'], 
    'İsmayıllı': ['Quba', 'Şamaxı', 'Ağsu', 'Kürdəmir', 'Göyçay', 'Qəbələ'], 
    'Kəlbəcər': ['Daşkəsən', 'Göygöl', 'Goranboy', 'Tərtər', 'Ağdam', 'Xocalı', 'Laçın','Zəngəzur'], 
    'Kəngərli': ['Şərur', 'Babək','Zəngəzur'], 
    'Kürdəmir': ['Hacıqabul', 'Sabirabad', 'İmişli', 'Zərdab', 'Ucar', 'Göyçay', 'İsmayıllı', 'Ağsu'], 
    'Laçın': ['Kəlbəcər', 'Xocalı', 'Şuşa', 'Xocavənd', 'Qubadlı','Zəngəzur'], 
    'Lənkəran': ['Neftçala', 'Masallı', 'Lerik', 'Astara'], 
    'Lerik': ['Yardımlı', 'Masallı', 'Astara', 'Lənkəran'], 
    'Masallı': ['Lənkəran', 'Lerik', 'Yardımlı', 'Cəlilabad', 'Neftçala'], 
    'Mingəçevir': ['Yevlax'], 
    'Neftçala': ['Salyan', 'Biləsuvar', 'Cəlilabad', 'Masallı', 'Lənkəran'], 
    'Naxçıvan': ['Babək'], 
    'Oğuz': ['Şəki', 'Qəbələ'], 
    'Ordubad': ['Culfa','Zəngəzur'], 
    'Qəbələ': ['Oğuz', 'Qusar', 'Quba', 'İsmayıllı', 'Ağdaş', 'Göyçay','Şəki'], 
    'Qax': ['Zaqatala', 'Şəki', 'Yevlax', 'Samux'], 
    'Qazax': ['Ağstafa'], 
    'Quba': ['Qusar', 'Xaçmaz', 'Şabran', 'Şamaxı', 'İsmayıllı', 'Qəbələ'], 
    'Qubadlı': ['Laçın', 'Zəngilan', 'Xocavənd', 'Cəbrayıl','Zəngəzur'], 
    'Qobustan': ['Şamaxı', 'Xızı', 'Abşeron', 'Hacıqabul'], 
    'Qusar': ['Qəbələ', 'Quba', 'Xaçmaz'], 
    'Sabirabad': ['Saatlı', 'İmişli', 'Kürdəmir', 'Hacıqabul', 'Salyan', 'Biləsuvar'], 
    'Sədərək': ['Şərur'], 
    'Şahbuz': ['Babək', 'Culfa','Zəngəzur'], 
    'Şəki': ['Qax', 'Yevlax', 'Ağdaş', 'Qəbələ', 'Oğuz'], 
    'Salyan': ['Hacıqabul', 'Neftçala', 'Biləsuvar', 'Sabirabad', 'Bakı', 'Cəlilabad'], 
    'Şərur': ['Sədərək', 'Kəngərli','Zəngəzur'], 
    'Saatlı': ['Biləsuvar', 'İmişli', 'Sabirabad'], 
    'Şabran': ['Quba', 'Xaçmaz', 'Siyəzən','Şamaxı','Xızı'], 
    'Siyəzən': ['Şabran', 'Xızı'], 
    'Şəmkir': ['Tovuz', 'Gədəbəy', 'Daşkəsən', 'Göygöl', 'Samux'], 
    'Sumqayıt': ['Xızı', 'Abşeron', 'Bakı'], 
    'Şamaxı': ['Şabran', 'Quba', 'İsmayıllı', 'Ağsu', 'Hacıqabul', 'Qobustan', 'Xızı'], 
    'Samux': ['Gəncə', 'Göygöl', 'Şəmkir', 'Tovuz', 'Qax', 'Yevlax', 'Goranboy'], 
    'Şuşa': ['Xocalı', 'Xocavənd', 'Laçın'], 
    'Tərtər': ['Ağdam', 'Goranboy', 'Yevlax', 'Bərdə','Kəlbəcər'], 
    'Tovuz': ['Ağstafa', 'Şəmkir', 'Gədəbəy', 'Samux'], 
    'Ucar': ['Göyçay', 'Kürdəmir', 'Zərdab', 'Ağdaş'], 
    'Xaçmaz': ['Qusar', 'Quba', 'Şabran'], 
    'Xocalı': ['Laçın', 'Kəlbəcər', 'Ağdam', 'Xocavənd', 'Şuşa'], 
    'Xızı': ['Siyəzən', 'Quba', 'Şamaxı', 'Qobustan', 'Abşeron','Şabran','Sumqayıt'], 
    'Xocavənd': ['Ağdam', 'Ağcabədi', 'Füzuli', 'Cəbrayıl', 'Qubadlı', 'Laçın', 'Şuşa', 'Xocalı'], 
    'Yardımlı': ['Lerik', 'Masallı', 'Cəlilabad'], 
    'Yevlax': ['Ağdaş', 'Bərdə', 'Tərtər', 'Goranboy', 'Samux', 'Qax', 'Şəki','Mingəçevir'], 
    'Zəngilan': ['Qubadlı', 'Cəbrayıl','Zəngəzur'], 
    'Zaqatala': ['Balakən', 'Qax'], 
    'Zərdab': ['Ucar', 'Ağdaş', 'Bərdə', 'Ağcabədi', 'Beyləqan', 'İmişli', 'Kürdəmir'],
    'Zəngəzur': ['Kəlbəcər', 'Laçın', 'Qubadlı', 'Zəngilan', 'Ordubad', 'Culfa','Şahbuz','Babək','Kəngərli','Şərur']
    };
const titleid= {
    "Abşeron": "AZ-ABS",
    "Ağstafa": "AZ-AGA",
    "Ağcabədi": "AZ-AGC",
    "Ağdaş": "AZ-AGS",
    "Ağdam": "AZ-AGM",
    "Ağsu": "AZ-AGU",
    "Astara": "AZ-AST",
    "Bakı": "AZ-BA",
    "Babək": "AZ-BAB",
    "Balakən": "AZ-BAL",
    "Bərdə": "AZ-BAR",
    "Beyləqan": "AZ-BEY",
    "Biləsuvar": "AZ-BIL",
    "Cəbrayıl": "AZ-CAB",
    "Cəlilabad": "AZ-CAL",
    "Culfa": "AZ-CUL",
    "Daşkəsən": "AZ-DAS",
    "Füzuli": "AZ-FUZ",
    "Gəncə": "AZ-GA",
    "Gədəbəy": "AZ-GAD",
    "Goranboy": "AZ-GOR",
    "Göyçay": "AZ-GOY",
    "Göygöl": "AZ-GYG",
    "Hacıqabul": "AZ-HAC",
    "İmişli": "AZ-IMI",
    "İsmayıllı": "AZ-ISM",
    "Kəlbəcər": "AZ-KAL",
    "Kəngərli": "AZ-KAN",
    "Kürdəmir": "AZ-KUR",
    "Laçın": "AZ-LAC",
    "Lənkəran": "AZ-LAN",
    "Lerik": "AZ-LER",
    "Masallı": "AZ-MAS",
    "Mingəçevir": "AZ-MI",
    "Neftçala": "AZ-NEF",
    "Naxçıvan": "AZ-NV",
    "Oğuz": "AZ-OGU",
    "Ordubad": "AZ-ORD",
    "Qəbələ": "AZ-QAB",
    "Qax": "AZ-QAX",
    "Qazax": "AZ-QAZ",
    "Quba": "AZ-QBA",
    "Qubadlı": "AZ-QBI",
    "Qobustan": "AZ-QOB",
    "Qusar": "AZ-QUS",
    "Sabirabad": "AZ-SAB",
    "Sədərək": "AZ-SAD",
    "Şahbuz": "AZ-SAH",
    "Şəki": "AZ-SAK",
    "Salyan": "AZ-SAL",
    "Şərur": "AZ-SAR",
    "Saatlı": "AZ-SAT",
    "Şabran": "AZ-SBN",
    "Siyəzən": "AZ-SIY",
    "Şəmkir": "AZ-SKR",
    "Sumqayıt": "AZ-SM",
    "Şamaxı": "AZ-SMI",
    "Samux": "AZ-SMX",
    "Şuşa": "AZ-SUS",
    "Tərtər": "AZ-TAR",
    "Tovuz": "AZ-TOV",
    "Ucar": "AZ-UCA",
    "Xaçmaz": "AZ-XAC",
    "Xocalı": "AZ-XCI",
    "Xızı": "AZ-XIZ",
    "Xocavənd": "AZ-XVD",
    "Yardımlı": "AZ-YAR",
    "Yevlax": "AZ-YEV",
    "Zəngilan": "AZ-ZAN",
    "Zaqatala": "AZ-ZAQ",
    "Zərdab": "AZ-ZAR",
    "Zəngəzur":"AZ-ZGR"
}
var difficultyLevel = 'easy';
document.getElementById('easy').classList.add('clicked');
document.getElementById('easy').addEventListener('click', function() {
    this.classList.add('clicked');
    difficultyLevel = 'easy';
    // localStorage.setItem('difficultyLevel', difficultyLevel);
    // location.reload();
    document.getElementById('medium').classList.remove('clicked');
    document.getElementById('hard').classList.remove('clicked');
    resetGame(difficultyLevel);
});
document.getElementById('medium').addEventListener('click', function() {
    this.classList.add('clicked');
    difficultyLevel ='medium';
    // localStorage.setItem('difficultyLevel', difficultyLevel);
    // location.reload();
    document.getElementById('easy').classList.remove('clicked');
    document.getElementById('hard').classList.remove('clicked');
    resetGame(difficultyLevel);
});
document.getElementById('hard').addEventListener('click', function() {
    this.classList.add('clicked');
    difficultyLevel = 'hard';
    // localStorage.setItem('difficultyLevel', difficultyLevel);
    // location.reload();
    document.getElementById('easy').classList.remove('clicked');
    document.getElementById('medium').classList.remove('clicked');
    resetGame(difficultyLevel);
});

//till findShortestPath it is for giving suggestions
const inputField = document.getElementById("svgPartInput");
const suggestionsContainer = document.getElementById("suggestions");

const relatedWords = Object.keys(titleid);

function filterWords(inputValue) {
    console.log(relatedWords.filter(word => word.toLocaleLowerCase('tr-TR').includes(inputValue.toLocaleLowerCase('tr-TR'))));
    return relatedWords.filter(word => word.toLocaleLowerCase('tr-TR').includes(inputValue.toLocaleLowerCase('tr-TR')));
  }
  
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
    index = result.indexOf(target)
    console.log(result, index); // Bu hissə qarışdırılmış nəticələri list formatında verir. Məsələn, [ 'İmişli', 'Saatlı', 'Neftçala' ]
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
		  document.querySelector(".btn.show").focus()
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
const FromTo = `<span style="color: #02c95f;">${startKey}</span> <span style="color: black;">${"&#10141"}</span> <span style="color: #c90502;">${endKey}</span>`;
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
            element.style.display = 'none';
        });
        var starting = svgDoc.getElementById(titleid[startKey]);
        starting.style.display = 'block';
        starting.setAttribute("fill","#0f7");

        manipulatedRegions.push(starting);
        var ending = svgDoc.getElementById(titleid[endKey]);
        ending.style.display = 'block';
        ending.setAttribute("fill","#c90502");

        manipulatedRegions.push(ending);
        console.log(startKey,endKey);
        document.getElementById("svgContainer").appendChild(svgDoc.documentElement);
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

var threeregions =getThreeRegion(startKey, endKey, ,,shortestPath)
// document.getElementById("shortpath").innerText="Left chances: "+allowednumberofpath;
document.querySelector(".btn.show").innerText="Göstər (qalıq: "+allowednumberofpath+")";
//How many is inputted
let counter=0;
function showSVGPart2() {
    var inputfield =document.getElementById("svgPartInput");
    var title = inputfield.value;
    title=titlehandler(title);
    var partID = titleid[title];
    var partElement = document.getElementById(partID)
    /////TARGET BIZIM NOVBETI HEDEFIMIZDIR.
    if (title != target){
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
    document.querySelector(".btn.show").innerText="Göstər (qalıq: "+allowednumberofpath+")";
    let isneighbor = false;
    if (partElement) {
        manipulatedRegions.push(partElement);
        const title = partElement.getAttribute('title');
        allregions.push(title);
        console.log(allregions);
        //displaying included region
        partElement.style.display = 'block';
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
            element.innerHTML += "<br><span style='font-size: 17px;'>" +"Cavab: " + arr + "</span>";
            const pathElements = document.getElementsByTagName("path");
            for (let i = 0; i < pathElements.length; i++) {
                pathElements[i].style.display = "block";
            }
            for (let i = 0; i < notneighbors.length; i++) {
                var element = document.getElementById(titleid[notneighbors[i]]);
                element.setAttribute('fill','gray');
            }
            document.getElementById('restartButton').style.display = "block";

        }
        //if chances became 0 and none of them executed then it means we didnt won
        else if(allowednumberofpath===0){
            let arr = findShortestPath(graph,startKey, endKey);
            var element =document.getElementById('fromto');
            element.innerHTML += "<br><span style='font-size: 17px;'>" +"Cavab: " + arr + "</span>";

            popupHandler("Məğlub oldun!", 5000);
            document.getElementById('restartButton').style.display = "block";
        }
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
    // Bu həmin regiondur.
}
}


function resetGame2(){
    counter=0;

    pathData = randomRegions(difficultyLevel);
    startKey = pathData["startKey"];
    endKey = pathData["endKey"];
    shortestPath = pathData["shortestPath"];
    allowednumberofpath = pathData["allowednumberofpath"];
    numberofshortestpath = pathData["numberofshortestpath"];
    console.log("Manipulated: ", manipulatedRegions);
    manipulatedRegions.forEach(function(element) {
        element.style.display = 'none';
    });
    manipulatedRegions = [];

    var svgContainer = document.getElementById("svgContainer");
    svgContainer.innerHTML = '';

    const FromTo = `<span style="color: #02c95f;">${startKey}</span> <span style="color: black;">${"&#10141"}</span> <span style="color: #c90502;">${endKey}</span>`;
    //For display
    document.getElementById('fromto').innerHTML=FromTo;
    //during the game all the regions that are neighbor with startkey
    neighbors = [startKey];
    //during the game all the regions that are not neighbor with startkey
    notneighbors = [endKey];
    allregions = [];
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = '';
    document.getElementById("restartButton").style.display="none";
    document.querySelector(".btn.show").innerText="Göstər (qalıq: "+allowednumberofpath+")";

    console.log("start end: ", startKey, endKey);
    loadAndManipulateSVG(startKey, endKey);
};

function restartGame() {
    location.reload();
};

function popupHandler(content, time) {
    document.getElementById("popup-content").innerText = content;
    window.location.hash = 'popup1';
    setTimeout(function() {
        window.location.hash = '';
    }, time);

};