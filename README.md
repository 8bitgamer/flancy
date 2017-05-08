# Flancy

This application lets you look up recipes by their ingredients. It also displays any health labels associated with the dish, such as gluten-free and sugar-free.

Create an account at https://developer.edamam.com/ and app_id and app_key to gain access to their API.

## Setup
`$ git clone git@github.com:PatrickBokhove/flancy.git`

`$ cd flancy`

Add new file project.config.js to project root:

```javascript
module.exports = {
	app_id: <REQUEST EDAMAM APP ID>,
	app_key: <REQUEST EDAMAM APP KEY>
};
```

`$ npm install`

`$ npm start`

Go to <http://localhost:3000/> in your browser

## Credit

Special thanks to [Jorn](https://github.com/JBostelaar) for creating the boilerplate this app was built on.