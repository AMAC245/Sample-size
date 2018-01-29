# Sample-size

### Definition
Prior to testing, determine the number of participants that would be required to detect a statistically significant effect.

### Usage 

A ```configuration object``` can be passed with the properties you wish to alter.
```js
const exampleConfig = {
  population: 200, 
  pValue: 0.01
};

sample(exampleConfig);
```
### -or-

Simply pass a single number representing your population size (number of current/expected users). A default config will be 
utilised (empirical standard).

```js
sample(350);
```
