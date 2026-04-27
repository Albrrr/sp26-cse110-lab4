### Question 1
The code prints out ```2```. ```i``` is declared using ```var i = 0``` so the scope of ```i``` is the entire function. ```i``` is incremented twice by the ```for``` loop as ```prices.length``` is 3. Thus, the code prints out the value of ```i```.

### Question 2
The code prints out ```150```. ```discountedPrice``` is declared using ```var discountedPrice = prices[i] * (1 - discount)``` so the scope of ```discountedPrice``` is the entire function. When the code exits the ```for``` loop, ```dicountedPrice``` was last set to ```prices[2] * (1 - discount)``` which is 150. Thus, the code prints out the value ```150```.

### Question 3
The code prints out ```150```. ```finalPrice``` is declared using ```var finalPrice = 0``` so the scope of ```finalPrice``` is the entire function. When the code exits the ```for``` loop, ```finalPrice``` was last updated to 150. Thus, the code prints out the value ```150```.

### Question 4
The code returns the list ```[50, 100, 150]```. The code interates through the each item in the original ```prices``` list and finds the ```discountedPrice``` of each and pushes them all onto ```discounted```.

### Question 5
The code returns an error. ```i``` is declared with ```let i = 0```. This means that the scope of ```i``` is only within the ```for``` loop. At line 13, the code tries to access ```i``` but it has not been initialized outside of the ```for``` loop so it returns an error.

### Question 6
The code returns an error. ```discountedPrice``` is declared with ```let discountedPrice = ...```. This means that the scope of ```discountedPrice``` is only within the ```for``` loop. At line 13, the code tries to access ```discountedPrice``` but it has not been initialized outside of the ```for``` loop so it returns an error.

### Question 7
The code prints out ```150```. ```finalPrice``` is declared using ```let finalPrice = 0``` so the scope of ```finalPrice``` is the entire function. When the code exits the ```for``` loop, ```finalPrice``` was last updated to 150. The code at line 13, ```console.log(finalPrice)``` is within the same function that ```finalPrice``` is declared in, so it can retrieve the value of ```finalPrice```.

### Question 8
The code returns the list ```[50, 100, 150]```. The code interates through the each item in the original ```prices``` list and finds the ```discountedPrice``` of each and pushes them all onto ```discounted```.

### Question 9 
The code returns an error. ```i``` is declared with ```let i = 0```. This means that the scope of ```i``` is only within the ```for``` loop. At line 11, the code tries to access ```i``` but it has not been initialized outside of the ```for``` loop so it returns an error.

### Question 10
The code prints ```3``` which is the length of ```prices```. ```length``` is declared in the same scope as line 12 so there are no errors.

### Question 11
The function returns the list ```[50, 100, 150]```. Despite ```discountedPrice``` being declared using ```const```, it is only declared within the ```for``` loop so each iteration creates a new ```discountedPrice```.  Thus, the function iterates through each item in ```prices``` and pushes the ```discountedPrice``` onto ```discounted```.

### Question 12
- A) ```student.name```
- B) ```student['Grad Year']``` 
- C) ```student.greeting()```
- D) ```student['Favorite Teacher'].name```
- E) ```student.courseLoad[0]```

### Question 13
- A) 32
- B) 1
- C) 3
- D) 3null
- E) 4
- F) 0
- G)  3undefined
- H) NaN

### Question 14
- A) true
- B) false
- C) true 
- D) false
- E) false
- F) true

### Question 15
```==``` checks for equality and allows type conversions that could make the two variables equal. ```===``` checks for strict equality and does not allow type conversions so only returns true if the variables are of the same type and same value.

### Question 17
The result will be a list containing ```[2, 4, 6]```. ```modifyArray([1,2,3], doSomething)``` is called and within ```modifyArray()```, the code iterates through each item in the input array. For each item in the input array, ```doSomething()``` is called with the item. This doubles the item and the new value is returned and pushed into ```newArr```. After iterating through all the items, ```newArr``` containing ```[2,4,6]``` is returned.

### Question 19
The code prints 1 then 4 then 3 then 2.