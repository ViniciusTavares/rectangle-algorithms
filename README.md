# Rectangle algorithms

Practice repository for rectangle algorithms

## Requirements

- NodeJS

## Instructions

Install packages and dependencies 

``` 
npm install
```

All algorithmns are coveraged by tests.

```
npm test
``` 

## Intersection

Intersection is the set containing all elements of A that also belong to B
```
        |   ______             (x2, y2)   
        |  |   ___|___         
        |  |  |   |   |           
        |  |  |___|___|        
        |  |______|              
        |______________________
(x1, y1)
```

## Containment

When Rectangle 2 is entirely inside Rectangle 1, Rectangle fully contains Rectangle 2
```
        |   ______             (x2, y2)   
        |  |  __  |         
        |  | |  | |           
        |  | |__| |        
        |  |______|              
        |______________________
(x1, y1)
```


## Adjacency


Adjacency is defined as the sharing of at least one side.
```
        |   ___                (x2, y2)   
        |  |   |__            
        |  |   |  |            
        |  |   |__|           
        |  |___|              
        |______________________
(x1, y1)
```

