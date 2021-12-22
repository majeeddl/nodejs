

/*

JavaScript Bitwise Operators
    Operator	Name	Description
        &	    AND	    Sets each bit to 1 if both bits are 1
        |	    OR	    Sets each bit to 1 if one of two bits is 1
        ^	    XOR	    Sets each bit to 1 if only one of two bits is 1
        ~	    NOT	    Inverts all the bits
        <<	    Zero    ill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
        >>	    Signed  right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
        >>>	    Zero    fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

JavaScript Uses 32 bits Bitwise Operands
    JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

*/


/*

Bitwise AND
    When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.

One bit example:
    Operation	    Result
    0 & 0	        0
    0 & 1	        0
    1 & 0	        0
    1 & 1	        1
4 bits example:
    Operation	    Result
    1111 & 0000	    0000
    1111 & 0001	    0001
    1111 & 0010	    0010
    1111 & 0100	    0100

*/