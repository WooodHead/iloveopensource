/**
 * Created with JetBrains PhpStorm.
 * User: krasu
 * Date: 9/17/13
 * Time: 8:39 AM
 */
define(function (require) {
	require('backbone')
	var store = require('store').getNamespace('repo-selector')

	return Backbone.Router.extend({
		routes: {
			'type/:type/id/:id': 'switchType',
			'type/:type/id/:id/tab/:tab': 'switchType',
			'*actions': 'switchType'
		},
		switchType: function (type, id, tab) {
			if (type != store().currentType.type || id != store().currentType.id) {
				store().currentType = {
					type: type,
					id: id
				}

				store().selected.fetch()
			}

			this.selectTab(tab)
		},
		selectTab: function () {
			var tab = Array.prototype.pop.call(arguments)
			tab = tab || 'selected-repos'
			var el = store().layout.$('.nav a[href="#' + tab + '"]')
			el.tab('show')
		}
	});
})
