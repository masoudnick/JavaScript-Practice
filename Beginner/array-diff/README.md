## Array Difference Function 
This challenge involves creating a function `arrayDiff(a, b)` that removes all values in array `a` that are present in array `b`, while maintaining the order of the remaining elements. If a value appears multiple times in `b`, all occurrences of it must be removed from `a`.  

### Example Usage:  
```javascript
arrayDiff([1,2], [1]); // [2]
arrayDiff([1,2,2,2,3], [2]); // [1,3]