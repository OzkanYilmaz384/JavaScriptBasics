const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(yearsCompleted == firstYearCompleted); 
    /*returns true, because double equals operator only comprise the values. 
    An equality check converts values using the numeric conversion. 
    So, can not differentiate 1 from true. */

console.log(yearsCompleted === firstYearCompleted);
    /* returns false, because triple equals operator (strict equality operator) 
    checks the equality without type conversion. In other words, if a and b are of different types, 
    then a === b immediately returns false without an attempt to convert them. */
