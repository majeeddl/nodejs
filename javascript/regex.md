

## Regex


You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

```javascript

let bogStr = "bog";
let bgRegex = /b[aiu]g/;
let result = bigStr.match(bgRegex);
// result = []
```


### negated character sets
To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.


### Match Characters that Occur One or More Times
You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.


### Match Characters that Occur Zero or More Times
The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

```javascript
let goRegex = /go*/;

```
