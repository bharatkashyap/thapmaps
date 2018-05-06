# thapMaps

> A [Leaflet.js](http://leafletjs.com) based maps-clone that implements shortest route finding on a map of the college campus and renders requisite polylines

## Front End
* [Leaflet.js](http://leafletjs.com)
  Rendering a map of the college campus using Leaflet.js' support for creating [OpenStreetMap](http://openstreetmap.org) tiles by simply passing the coordinates required
* ##### Data
  73 nodes manually added into a Javascript locations array, each node structured like so:
    ``` javascript
    var locations = [
    { "name" : "Entrance Intersection", "x" :  30.351946, "y" : 76.372913,
    "children" : ["Car Parking", "Audi-Cafeteria Intersection"]},
    ...
    ]
    ```
    where the ``` children ``` array holds the ``` name ``` property of each node which can be linked to that node by a straight line path.

Follow this [link](https://bharatkashyap.github.io/thapmaps/thapMapsREADME.html) to get a detailed overview of the project.
