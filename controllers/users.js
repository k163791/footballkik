'use strict';

module.exports = function(_){
    return {
        SetsRouting: function(router) {
            router.get('/', this.indexPage);
        },

        indexPage: function(req, res) {
            return res.render('index', {test: 'This is a test'});
        }
    }
}