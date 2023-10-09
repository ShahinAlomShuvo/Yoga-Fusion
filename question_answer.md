<h1 align='center'>Answer to the MCQ Question</h1>

#### Question: 1

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`
<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>This Code is initializes a variable called "greeting" and assign an empty object to it. When i log the value of "greeting" to the console it will give an empty object represented as {}.</i>

</p>
</details>

#### Question:2

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>
#### Answer: D

<i> the "+" operator is used for both numeric addition and string concatenation. When we use it with a numeric value and a string value, JavaScript will try to perform type coercion and convert the numeric value to a string and then concatenate the two strings. </i>

</p>
</details>

#### Question:3

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Changing the favoriteFood property of the info object to "🍝" does not change the contents of the food array. Thats why the output will be A: `['🍕', '🍫', '🥑', '🍔']`</i>

</p>
</details>

#### Question:4

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Calling sayHi() function without an argument results in name being undefined, thats why the output "Hi there, undefined" as it concatenates "Hi there, " with the string representation of undefined.</i>

</p>
</details>

#### Question: 5

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>

The code counts and prints the number of non-zero elements in the nums array, resulting in an output of "3" because there are three such elements (1, 2, and 3) in the array.
</i>

</p>
</details>
