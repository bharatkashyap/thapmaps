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

## The Algorithm
* The [Bellman Ford](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm) algorithm is a famous algorithm based on dynamic programming techniques to get the shortest path between any two nodes of a graph. The algorithm is suitable because of its applicability to graphs containing cycles - such as a graph of real world locations.
* One advantage that we have here is of no negative edge weights, which eliminates the possibility of the existence of negative cycles.
* The most crucial observation behind the algorithm is that for a graph with $$n$$ vertices, and no negative cycles - or a cycle with net negative cost - there is a shortest path between vertex $$s$$ and $$t$$, or $$\delta(s,t)$$, that does not repeat any edges and hence has a at most $$n-1$$ edges.
* The algorithm thus iterates $$n-1$$, each iteration signifying the maximum number of edges that may be used by each node to get to the destination for that iteration. For each node, in each iteration, the following recurrence is applied :
 $$M[v] = \min\left\{{M[v], \min\limits_{w \in V} \left\{{C_{wv} + M[w]}\right\}}\right\}$$
where :
    * $$V$$ : Set of all vertices of the graph
    * $$M[]$$ : Array containing the currently found shortest paths for each vertex
    * $$C_{ij}$$: Weight of the edge between vertices $$i$$ and $$j$$
* To get the nodes comprising the shortest path, an addition is made to the algorithm by storing a reference to the first neighbouring node in the shortest path to the destination for each node $$v$$ in a separate array, and the iterating over that array starting from the source, like so:
    ```javascript
    var j = source; // Get the route-array starting at source, to dest
  do {
    route.push(nodes[j]);
    j = nodes[j];
  } while(j != dest)
  ```
  where ``` nodes ``` is the array containing the references, as mentioned above.
* The implementation of the algorithm in Javascript for a distance matrix based approach is encapsulated within the ``` bellmanFord()  ``` function.

## Lighthouse Audit ##
 ![Light House Audit](https://i.imgur.com/Ybiib8b.png)

## Possible Enhancements
* __Navigation__
Storing the children for each node in a direction-agnostic way has made the application unable to provide directions in a Google Maps format. However, simple naviational steps, like, providing each leg of the route and its distance, is a feature that may be added in an extension of this project.

* __Multiple Destinations__
A simple extension to the project would be to allow for multiple destinations and render the appropriate polyline, obviously taking care that the shortest path is rendered despite the restrictions.

* **Progressive Web Application**
Lighthouse has penalised the application for not registering a service worker, not providing for a custom splash screen, header bar not matching brand colours, and not including a prompt to 'Add to Home Screen'.

## Sources of error
* Although care has been taken to carefully test, if for a particular set of source and destination points, the page crashes and causes the browser's memory error page to load, that is due to errant manual entry of nodes in the ``` children ``` array of each node, causing that particular pair of points to become unreachable on the virtual graph. If you have encountered such an error, please [inform](mailto:bkashyap_be16@thapar.edu) the maintainer of the project.
