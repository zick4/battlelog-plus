/**
* Example Plugin - Show how you can use the plugin engine
* NOTE: Do NOT set global values outside of the plugin object
*    Maybe they will conflict with other addons or any in-page related variables
*    Only use the plugin cache/storage to set/get variables
*
* @author BrainFooLong
* @version 1.0
* @url http://getbblog.com
*/

// initialize your plugin
BBLog.handle("add.plugin", {

    /**
    * The unique, lowercase id of my plugin
    * Allowed chars: 0-9, a-z, -
    */
    id : "battlelog-plus",

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key "plugin.name" (optional)
    *
    * @type String
    */
    name : "Better Better battlelog",


    /**
    * A handler that be fired immediately (only once) after the plugin is loaded into bblog
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use "instance" to access any plugin related function, not use "this" because it's not working properly
    *    For example: If you add a new function to your addon, always pass the "instance" object
    */
    init : function(plugin){
//        $('#warsaw-stats').bind('DOMNodeInserted', function(event) {
//            plugin.hideComment();
//       });
        plugin.hideComment();
    },

    domchange : function(plugin){
        plugin.hideComment();
    },

    hideComment: function() {
        document.styleSheets[0].addRule('.bblog-local-comment', 'display: none', -1);
//        $('.bblog-local-comment').hide();
    },


});