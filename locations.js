var locations = [
  { "name" : "Entrance Intersection", "x" :  30.351946, "y" : 76.372913, "children" : ["Car Parking", "Audi-Cafeteria Intersection"]},
  { "name" : "Car Parking", "x" : 30.352305, "y" : 76.372295, "children" : ["Directorate", "Audi-Cafeteria Intersection - 2", "Entrance Intersection"]},
  { "name" : "Auditorium", "x" : 30.352057, "y" : 76.370906, "children" : ["Car Parking", "Audi-Cafeteria Intersection - 2"]},
  { "name" : "Directorate", "x" : 30.352454, "y" : 76.371704, "children" : ["Audi-Cafeteria Intersection - 2"]},
  { "name" : "Sodexo", "x" : 30.352587, "y" : 76.371074,"children" : ["Cafeteria", "Audi-Cafeteria Intersection - 2"]},
  { "name" : "State Bank of India", "x" : 30.352541, "y" : 76.370309, "children" : ["B Block", "C Block", "Audi-SBOP Intersection"]},
  { "name" : "B Block", "x" : 30.352937, "y" : 76.370259, "children" : ["C Block", "State Bank of India"]},
  { "name" : "E Block", "x" : 30.354365, "y" : 76.37176, "children" : ["F Block", "Workshop"]},
  { "name" : "F Block", "x" : 30.354382, "y" : 76.372014, "children" : ["E Block", "Workshop"]},
  { "name" : "C Block", "x" : 30.353384, "y" : 76.37021, "children" : ["B Block", "Academic Block Intersection-3"] },
  { "name" : "SBOP Lawns", "x" : 30.352402, "y" : 76.370226, "children" : ["G Block", "Audi-SBOP Intersection"] },
  { "name" : "Guest House", "x" : 30.351818, "y" : 76.369623, "children" : ["Hostel Road-Guest House Intersection"]},
  { "name" : "Heritage Haveli", "x" : 30.351358, "y" : 76.367839, "children" : ["Hostel Road-Guest House Intersection", "PG Hostel"] },
  { "name" : "PG Hostel", "x" : 30.351224, "y" : 76.366674, "children" : ["Heritage Haveli", "PG-A Hostel Intersection"]},
  { "name" : "Nirvana", "x" : 30.353637, "y" : 76.365901, "children" : ["Tan Building", "H Chowk Down"]},
  { "name" : "G Block", "x" : 30.353628, "y" : 76.370062, "children" : ["SBOP Lawns", "Academic Block Intersection-4"] },
  { "name" : "Tan Building", "x" : 30.353927, "y" : 76.3685, "children" : ["Nirvana", "Academic Block Intersection-4"] },
  { "name" : "Cafeteria", "x" : 30.352656, "y" : 76.371073, "children" : ["Audi-Cafeteria Intersection - 2"] },
  { "name" : "A Hostel", "x" : 30.351039, "y" : 76.364935, "children" : ["B Hostel", "PG-A Hostel Intersection"] },
  { "name" : "B Hostel", "x" : 30.350875, "y" : 76.363498, "children" : ["A Hostel", "C Hostel"] },
  { "name" : "C Hostel", "x" : 30.350664, "y" : 76.361563, "children" : ["B Hostel", "D Hostel"]},
  { "name" : "D Hostel", "x" : 30.350475, "y" : 76.360172, "children" : ["C Hostel"]},
  { "name" : "H Hostel", "x" : 30.352954, "y" : 76.365205, "children" : ["H Chowk Down", "Gurudwara Intersection", "PG-A Hostel Intersection"]},
  { "name" : "J Hostel", "x" :  30.353435, "y" : 76.363376, "children" : ["H Chowk Down", "Iconic-Track Intersection Down"]},
  { "name" : "M Hostel", "x" :  30.353046, "y" : 76.360211, "children" : ["Iconic-Track Intersection Down"]},
  { "name" : "FRC Buildings", "x" :  30.353685, "y" : 76.360581, "children" : ["Iconic-Track Intersection Up", "Synthetic Track"]},
  { "name" : "Synthetic Track", "x" :  30.353597, "y" : 76.360618, "children" : ["FRC Buildings", "Iconic-Track Intersection Up"]},
  { "name" : "COS Entrance", "x" : 30.353464, "y" : 76.362801, "children" : ["COS", "H Chowk Up", "Iconic-Track Intersection Up"]},
  { "name" : "OAT", "x" :  30.353791, "y" : 76.362984, "children" : ["COS"]},
  { "name" : "COS", "x" :  30.353759, "y" : 76.362791, "children" : ["OAT", "COS Entrance", "Jujus Cafe", "Hot Express", "Wrapchik"]},
  { "name" : "K Hostel", "x" :  30.356384, "y" : 76.36358, "children" : ["K Hostel Entrance"]},
  { "name" : "Dispensary", "x" :  30.353672, "y" : 76.365451, "children" : ["E Hostel", "H Chowk Up"]},
  { "name" : "Girls Hostel Gate", "x" : 30.353902, "y" : 76.367453, "children" : ["E Hostel", "N Hostel", "Girls Hostel Intersection", "Academic Block Intersection-1"]},
  { "name" : "E Hostel", "x" :  30.353856, "y" : 76.367179, "children" : ["Girls Hostel Gate", "Dispensary", "Academic Block Intersection-1"]},
  { "name" : "Girls Hostel Intersection", "x" :  30.354703, "y" : 76.367297, "children" : ["G Hostel", "I Hostel", "N Hostel", "Girls Hostel Gate"]},
  { "name" : "G Hostel", "x" : 30.354666, "y" :76.36705, "children" : ["Girls Hostel Intersection"]},
  { "name" : "I Hostel", "x" :  30.355347, "y" : 76.367195, "children" : ["Girls Hostel Intersection"]},
  { "name" : "N Hostel", "x" : 30.354279, "y" : 76.367382, "children" : ["Girls Hostel Intersection", "Girls Hostel Gate"]},
  { "name" : "Workshop", "x" :  30.354338, "y" : 76.371337, "children" : ["Academic Block Intersection-2", "E Block", "F Block", "Workshop-Library Intersection"]},
  { "name" : "Library", "x" :  30.356129, "y" : 76.372179, "children" : ["Library Road Bend 3"]},
  { "name" : "Polytechnic", "x" :  30.357235, "y" : 76.367528, "children" : ["Residential Area Intersection-2"]},
  { "name" : "Library Backside Road Bend", "x" : 30.356035, "y" : 76.371164, "children": ["Workshop-Library Intersection", "Residential Area Intersection-4"]},
  { "name" : "Gurudwara Intersection", "x" : 30.352349, "y" : 76.365293, "children": ["Gurudwara", "H Hostel", "PG-A Hostel Intersection"]},
  { "name" : "Gurudwara", "x" :  30.352023, "y" : 76.362587, "children": ["Gurudwara Intersection"]},
  { "name" : "Jujus Cafe", "x" :  30.353902, "y" : 76.362614, "children": ["Wrapchik", "Hot Express", "COS"]},
  { "name" : "Hot Express", "x" :  30.354055, "y" : 76.362303, "children": ["Wrapchik", "Jujus Cafe", "COS"]},
  { "name" : "Wrapchik", "x" :  30.354245, "y" : 76.36204, "children": ["Hot Express", "Jujus Cafe", "COS"]},
  { "name" : "Iconic-Track Intersection Up", "x" :  30.353201, "y" : 76.360681, "children": ["H Chowk Up", "FRC Buildings", "Synthetic Track", "COS Entrance", "Iconic-Track Intersection Down"]},
  { "name" : "Iconic-Track Intersection Down", "x" : 30.353108, "y" : 76.360702, "children": ["H Chowk Down", "J Hostel", "M Hostel", "Iconic-Track Intersection Up"]},
  { "name" : "H Chowk Up", "x" : 30.353648, "y" : 76.365103, "children": ["Dispensary", "COS Entrance", "Iconic-Track Intersection Up", "E Hostel", "Girls Hostel Gate", "Academic Block Intersection-1", "Sports Complex Intersection", "H Chowk Down"]},
  { "name" : "H Chowk Down", "x" : 30.353555, "y" : 76.36512, "children": ["M Hostel", "Iconic-Track Intersection Down", "J Hostel", "H Hostel", "Gurudwara Intersection", "PG-A Hostel Intersection", "Academic Block Intersection-4", "H Chowk Up", "Nirvana", "Tan Building"]},
  { "name" : "PG-A Hostel Intersection", "x" :  30.351093, "y" : 76.365466, "children": ["PG Hostel", "A Hostel", "Gurudwara Intersection"]},
  { "name" : "Sports Complex Intersection", "x" :  30.355335, "y" : 76.364843, "children": ["K Hostel Entrance", "H Chowk Up", "Residential Area Intersection-1"]},
  { "name" : "Residential Area Intersection-1", "x" :  30.355531, "y" : 76.366196, "children": ["Sports Complex Intersection", "Residential Area Intersection-2"]},
  { "name" : "Residential Area Intersection-2", "x" :  30.355487, "y" : 76.367738, "children": ["Residential Area Intersecion-1", "Residential Area Bend 1", "Polytechnic"]},
  { "name": "Residential Area Bend 1", "x" : 30.355583, "y" : 76.36867, "children": ["Residential Area Intersecion-1", "Residential Area Intersection-2", "Residential Area Intersection-3"]},
  { "name" : "Residential Area Intersection-3", "x" :  30.35594, "y" : 76.369615, "children": ["Residential Area Bend 1", "Residential Area Bend 2", "Residential Area Intersection-4"]},
  { "name": "Residential Area Bend 2", "x" : 30.355267, "y" : 76.369825, "children": ["Residential Area Intersection-3", "Academic Block Intersection-1"]},
  { "name" : "Residential Area Intersection-4", "x" :  30.356588, "y" : 76.370292, "children": ["Residential Area Intersection-3", "Library Backside Road Bend"]},
  { "name" : "Academic Block Intersection-1", "x" :  30.354169, "y" : 76.369979, "children": ["H Chowk Up", "Dispensary", "E Hostel", "Girls Hostel Gate", "Residential Area Bend 2", "Academic Block Intersection-2", "Academic Block Intersection-4"]},
  { "name" : "Academic Block Intersection-2", "x" :  30.354171, "y" : 76.37013, "children": ["Workshop", "E Block", "F Block", "Academic Block Intersection-1", "Academic Area Intersection-3"]},
  { "name" : "Academic Block Intersection-3", "x" :  30.35405, "y" :  76.370136, "children": ["C Block", "Academic Block Intersection-2", "Academic Block Intersection-4"]},
  { "name" : "Academic Block Intersection-4", "x" :  30.35407, "y" : 76.370015, "children": ["H Chowk Down", "Nirvana", "Tan Building", "G Block", "Academic Block Intersection-1", "Academic Block Intersection-3"]},
  { "name" : "Workshop-Library Intersection", "x" :  30.355462, "y" : 76.371226, "children": ["Library Road Bend 1", "Library Backside Road Bend", "Workshop"]},
  { "name" : "Audi-SBOP Intersection", "x" :  30.351647, "y" : 76.370452, "children": ["SBOP Lawns", "State Bank of India", "Hostel Road-Guest House Intersection", "Audi-Cafeteria Intersection"]},
  { "name" : "Audi-Cafeteria Intersection", "x" :  30.351753, "y" : 76.371243, "children": ["Audi-SBOP Intersection", "Entrance Intersection", "Audi-Cafeteria Intersection - 2"]},
  { "name" : "Audi-Cafeteria Intersection - 2", "x" :  30.352104, "y" : 76.37117, "children": ["Auditorium", "Audi-Cafeteria Intersection", "Car Parking", "Cafeteria", "Sodexo"]},
  { "name" : "Hostel Road-Guest House Intersection", "x" : 30.351565, "y": 76.369684, "children": ["Audi-SBOP Intersection", "Guest House", "Heritage Haveli"]},
  { "name" : "Library Road Bend 1", "x" : 30.355523, "y" : 76.371632, "children": ["Workshop-Library Intersection", "Library Road Bend 2"]},
  { "name": "Library Road Bend 2", "x" : 30.355925, "y" : 76.371868, "children": ["Library Road Bend 1", "Library Road Bend 3"]},
  { "name": "Library Road Bend 3", "x" : 30.356041, "y" : 76.37202, "children": ["Library", "Library Road Bend 2"]},
  { "name": "K Hostel Entrance", "x" : 30.356425, "y" : 76.364701, "children": ["Sports Complex Intersection", "K Hostel"]}
]

/* for(var i=0; i<locations.length; i++)
{
  var marker = L.marker([locations[i].x, locations[i].y]).addTo(mymap);
  marker.bindPopup(locations[i].name);
}
*/

function toRad(Value) //
{
    return Value * Math.PI / 180;
}

function calcCrow(lat1, lon1, lat2, lon2) // Calculating straight line distance between two points
{
   var R = 6371000; // km
   var dLat = toRad(lat2-lat1);
   var dLon = toRad(lon2-lon1);
   var lat1 = toRad(lat1);
   var lat2 = toRad(lat2);

   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
     Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
   var d = R * c;
   return d;
 }

 var distMatrix = [];
 for(var i=0; i<locations.length; i++)
{
  locations[i].index = i;
  var distMatrixforEachPlace = []
  for(var j=0; j<locations.length; j++)
  {
    if(locations[i].children.indexOf(locations[j].name) <= -1)
      distMatrixforEachPlace[j] = Number.MAX_VALUE;
    else
      distMatrixforEachPlace[j] = calcCrow(locations[i].x, locations[i].y, locations[j].x, locations[j].y);
  }
  distMatrix.push(distMatrixforEachPlace)
}

var polyline, markers = [];


function clearLinesAndMarkers()
{
  if(typeof polyline != "undefined")
    mymap.removeLayer(polyline);
  if(markers.length > 0)
  {
    for(var marker of markers)
    {
      mymap.removeLayer(marker)
    }
  }
}

var myIcon = L.divIcon({className: 'leaflet-div-icon'});

function drawLineAndMarkers(route)
{
  var latlngs = [];
  var dist = 0, distText;
  var vias = [], via;

  if(route == null)
  {
    via = "via complete inactivity";
  }
  else if(route != null)
  {
    for(var routes in route)
    {
      var i = route[routes];

      var X, Y, name;
      X = locations[i].x;
      Y = locations[i].y;
      name = locations[i].name;
      if(routes < route.length-1)
      {
        var next = parseInt(routes)+1,
            j = route[next],
            Xn = locations[j].x,
            Yn = locations[j].y;

        dist += distMatrix[i][j];
      }

      if(routes == (route.length-1))
        marker = L.marker([X, Y]).addTo(mymap);
      else
        marker = L.marker([X,Y], {icon: myIcon}).addTo(mymap);

      markers.push(marker);
      marker.bindPopup(name);

      if(routes == 1 || routes == (route.length -2))
        vias.push(name);

      latlngs.push([X, Y])
    }

    if(vias.length > 1)
      via = (vias[0].length > vias[1].length) ? vias[1] : vias[0];
    else
      via = vias[0];

    via = "via " + via;
  }

  if(Math.floor(dist) < 1000)
    distText = Math.floor(dist) + " m";
  else
    distText = (dist/1000).toFixed(1) + " km";


  polyline = L.polyline(latlngs, {color: '#DD4B39', weight: 8}).addTo(mymap);
  if(latlngs.length > 0)
    mymap.flyToBounds([latlngs[0],latlngs[latlngs.length-1]], 18)

  var slider = document.getElementById("routeInfo"),
      detailsModel = document.getElementById("details"),
      distanceModel = document.getElementById("distance");
  detailsModel.innerHTML = via + " ";
  distanceModel.innerHTML = distText;
  slider.classList.remove("closed");
}

function bellmanFord(source, dest)
{
  var route;
  if(source == dest)
  {
    drawLineAndMarkers(null);
    return;
  }

  var n = distMatrix.length;
  var memo = [];
  var nodes = [], first,
      route = [source];
  for(var i=0; i<n; i++)
  {
    var initMemoPerVertex = Number.MAX_VALUE;
    if(i == dest)
        initMemoPerVertex = 0;
    memo.push(initMemoPerVertex)
  }


  for(var i=1; i<n; i++)
  {
    //if(memo[source] <= memo[source][i-1])
      //memo[source][i] = memo[source][i-1];
      //console.log(memo[source][i])
    for(var j=0; j<n; j++)
    {
      var min = Number.MAX_VALUE;
      for(var k=0; k<n; k++)
      {
        var tempMin = memo[k] + distMatrix[j][k];
        if(tempMin < min)
        {
          min = tempMin
          first = k;
        }
      }
      if(memo[j] > min)
      {
        memo[j] = min;
        nodes[j] = first;
      }
    }
  }
  var j = source; // Get the route-array starting at source, to dest
  do {
    route.push(nodes[j]);
    j = nodes[j];
  } while(j != dest)
  console.log(memo)
  clearLinesAndMarkers();
  drawLineAndMarkers(route);
}

var sourceIndex = -1, destIndex = -1;

function autocomplete(inp, arr) {
  var currentFocus;

  inp.addEventListener("input", function(e) {
      var suggestions, entry, i, val = this.value;

      closeAllLists(); // Close any currently opened lists
      if (!val) {
        return false;
      }
      currentFocus = -1;
      // Create a DIV element that will contain the items (values)
      suggestions = document.createElement("DIV");
      suggestions.setAttribute("id", this.id + "autocomplete-list");
      suggestions.setAttribute("class", "autocomplete-items");
      // Append the DIV element as a child of the autocomplete container
      this.parentNode.appendChild(suggestions);

      for (i = 0; i < arr.length; i++) {
        // Check if the item starts with the same letters as the text field value
        if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          // If ^ so, create a DIV for each matching element in arr
          entry = document.createElement("DIV");
          // Emphasize the matching characterss
          entry.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
          entry.innerHTML += arr[i].name.substr(val.length);
          // Insert an input field that will hold the current array item's value
          entry.innerHTML += "<input id='placename' type='hidden' value='" + arr[i].name + "'>";
          entry.innerHTML += "<input id='x' type='hidden' value='" + arr[i].x + "'>";
          entry.innerHTML += "<input id='y' type='hidden' value='" + arr[i].y + "'>";
          entry.innerHTML += "<input class='index' id='index' type='hidden' value='" + arr[i].index + "'>";
          // Execute a function when someone clicks on the entry div
              entry.addEventListener("click", function(e) {
              // Insert the value for the autocomplete text field
              inp.value = this.getElementsByTagName("input")[0].value;
              var name = inp.value,
              x = this.getElementsByTagName("input")[1].value,
              y = this.getElementsByTagName("input")[2].value,
              index = this.getElementsByTagName("input")[3].value;
              var place = {
                "name": name,
                "x": x,
                "y": y,
                "index": index
              }
              if(inp.id == "sourceInput")
              {
                source = place;
                sourceIndex = place.index;
                if(destIndex != -1)
                  bellmanFord(sourceIndex, destIndex)
              }
              else if(inp.id == "destInput")
              {
                dest = place;
                destIndex = place.index;
                if(sourceIndex != -1)
                  bellmanFord(source.index, dest.index);
              }
              closeAllLists();
          });
          suggestions.appendChild(entry);
        }
      }
  });

  // Execute a function presses a key on the keyboard:
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x)
        x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        // If the arrow DOWN key is pressed, increment the currentFocus var
        currentFocus++;
        // and make the current item more visible
        addActive(x);
      }
      else if (e.keyCode == 38) { //up
        // If the arrow UP key is pressed, decrement the currentFocus var
        currentFocus--;
        // and make the current item more visible
        addActive(x);
      }
      else if (e.keyCode == 13) {
        // If the ENTER key is pressed, prevent the form from being submitted,
        //in case the input is ever encapsulated within a FORM element
        e.preventDefault();
        if (currentFocus > -1) {
          // and simulate a click on the "active" item:
          if (x)
            x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    // A function to classify an item as "active"
    if (!x)
      return false;
    // Remove the active class on all items to begin
    removeActive(x);

    // Logic to prevent over and underflow of currentFocus
    if (currentFocus >= x.length)
      currentFocus = 0;
    if (currentFocus < 0) c
      currentFocus = (x.length - 1);
    // Add class "autocomplete-active"
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    // Remove active class from all elements of suggestions div
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    // Close all autocomplete lists in the document
    // except the one passed as an argument
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]); // If null is passed as elmnt to be searched, all autocomplete lists are deleted
    }
  }
}

// Close all lists when any other element is clicked throughout the document
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("sourceInput"), locations);
autocomplete(document.getElementById("destInput"), locations);
