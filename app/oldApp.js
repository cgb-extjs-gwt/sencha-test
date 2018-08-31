import senchaStyle from '../sencha/'
import style from './app.scss'
// import './view/View.js'
// import './view/Main.js'
//
// Ext.define('Test.Application', {
// 	extend: 'Ext.app.Application',
// 	name: 'Test',
//
// 	// The name of the initial view to create. With the classic toolkit this class
// 	// will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
// 	// modern toolkit, the main view will be added to the Viewport.
// 	//
// 	mainView: 'Test.view.Main'
// })
//
// Ext.application('Test.Application')
setTimeout(() => {

Ext.define('Square', {
	side: 0,

	// This is a special function that gets called
	// when the object is instantiated
	constructor: function (side) {
		// It receives the side as a parameter
		// If defined, it is set as the square's side value
		if (side) {
			this.side = side;
		}
	},

	getArea: function () {
		return this.side * this.side;
	}
});

// Thanks to the constructor, we can pass 'side's' value
// as an argument of Ext.create
// This is a slightly more elegant approach.
var sq = Ext.create('Square', 4);

// The passed value is assigned to the square's side property
// Display a message to make sure everything is working
Ext.Msg.alert('Message', 'The area is: ' + sq.getArea());
}, 500)
