### Question 1
The bug was that the ```num1``` and ```num2``` are both strings so when you do the add operation, ```num2``` is concatenated to ```num1``` rather than adding the numerical values of the two variables. This results in the output, ```result```, having a type of ```string```

### Question 2
I would fix the issue parsing the input value into an integer by wrapping the code to get the input in ```Number()```.