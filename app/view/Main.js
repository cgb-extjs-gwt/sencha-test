import './MyOtherClass.js'
import './MyOtherOtherClass.js'

Ext.define('Test.view.Main', {
	xtype: 'view-main',
	extend: 'Test.view.View',

	config: {
		tpl: `
			<div> wkjhkjhorks!!</div>
			<div class="where-we-render"></div>
		`,

		data: {},

		myOtherClass: null,

		myOtherOtherClass: null,

	},

	constructor(config) {
		debugger
		this.callParent()

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
