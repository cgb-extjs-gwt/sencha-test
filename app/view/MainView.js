import './MyOtherClass.js'
import './MyOtherOtherClass.js'
import style from './MainView.scss'

Ext.define('Test.view.MainView', {
	xtype: 'view-main',
	extend: 'Ext.Component',

	config: {
		tpl: `
			<div> this works now!!</div>
			<div class="where-we-render"></div>
		`,

		cls: `${style.component}`,

		data: {},

		myOtherClass: null,

		myOtherOtherClass: null,

	},

	initComponent(config) {
		this.self.callParent(arguments)

		this.on({
			render: this.whenIsRendered,
			scope: this
		})

		console.log('this works')
	},

	whenIsRendered() {
		this.setMyOtherClass({})
		this.setMyOtherOtherClass({})
	},

	applyMyOtherClass(config, instance) {
		if (instance)
			instance.destroy()

		if (!config)
			return config

		return Ext.factory(Ext.apply({
			xtype: 'view-myotherclass',
			renderTo: this.el.dom.querySelector('.where-we-render')
		}, config))
	},

	applyMyOtherOtherClass(config, instance) {
		if (instance)
			instance.destroy()

		if (!config)
			return config

		return Ext.factory(Ext.apply({
			xtype: 'view-myotherotherclass',
			renderTo: this.el.dom.querySelector('.where-we-render')
		}, config))
	}
})
