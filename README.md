# vibrant-veil-validator

A versatile input validator with support for required fields, type checking, and custom validation rules.

## Installation

To install `vibrant-veil-validator`, run:

```bash
npm install vibrant-veil-validator
```

## Usage

First, import `vibrant-veil-validator` and define your validation rules:

```javascript
const Validator = require('vibrant-veil-validator');

const rules = {
name: { required: true, type: 'string' },
age: { required: true, type: 'number', custom: (value) => value >= 18 },
email: { required: true, type: 'string', custom: (value) => /\S+@\S+\.\S+/.test(value) }
};

const validator = new Validator(rules);
```

Then, use it to validate input:

```javascript
const input = {
name: 'John Doe',
age: 25,
email: 'john@example.com'
};

const result = validator.validate(input);

if (result.valid) {
console.log('Validation passed.');
} else {
console.log('Validation failed:', result.errors);
}
```
