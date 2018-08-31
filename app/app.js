import senchaStyle from '../sencha/'
import style from './app.scss'
import './view/MainView.js'

Ext.define('Test.Application', {
	extend: 'Ext.app.Application',
	name: 'Test',

	launch() {
		let mainView = Ext.create('Test.view.MainView', {
			renderTo: Ext.getBody()
		});
		mainView.show()
	}
})

Ext.application('Test.Application')
