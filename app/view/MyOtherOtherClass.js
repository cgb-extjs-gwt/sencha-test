import style from './MyOtherOtherClass.scss'

Ext.define('Test.view.MyOtherOtherClass', {
	xtype: 'view-myotherotherclass',
	extend: 'Test.view.MyOtherClass',

	config: {
		tpl: `
			<div> wkjhkjholkjlkjrks!!</div>
		`,
		data: {},
		cls: `${style.component}`,

	}
})
