### Questioin 1
The code prints out ```values added: 20```

### Question 2
The code prints out ```final result: 20```

### Question 3
You should not use ```var``` as variables that are declared with ```var``` are accessible within the entire function. This could lead to unintended behavior if you do not want the variable to be accessed outside of the code block such as ```if{}``` that it is declared in.

### Question 4
The code prints out ```values added: 20```

### Question 5
The code returns an error. At line 13, the code tries to print ```result``` but ```result``` is declared inside of ```if``` using ```let result = 0```. This means that the scope of ```result``` is only within the ```if``` block. When line 13 tries to access ```result``` at line 13, an error is retured due to it being out of scope at line 13 so ```result``` is not defined at line 13.

### Questioin 6
The code prints out ```values added: 0```

### Question 7
The code returns an error. At line 13, the code tries to print ```result``` but ```result``` is declared inside of ```if``` using ```const result = 0```. This means that the scope of ```result``` is only within the ```if``` block. When line 13 tries to access ```result``` at line 13, an error is retured due to it being out of scope at line 13 so ```result``` is not defined at line 13.