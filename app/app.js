import senchaStyle from '../sencha/'
import style from './app.scss'
import './view/Main.js'

Ext.define('Test.Application', {
	extend: 'Ext.app.Application',
	name: 'Test',

	// The name of the initial view to create. With the classic toolkit this class
	// will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
	// modern toolkit, the main view will be added to the Viewport.
	//
	mainView: 'Test.view.Main'
})

Ext.application('Test.Application')
