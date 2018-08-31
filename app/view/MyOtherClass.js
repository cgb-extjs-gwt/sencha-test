import style from './MyOtherClass.scss'

Ext.define('Test.view.MyOtherClass', {
	xtype: 'view-myotherclass',
	extend: 'Ext.Component',

	config: {
		tpl: `
			<div> wkjhkjlkjhorks!!</div>
		`,
		data: {},
		cls: `${style.component}`,

	}
})
