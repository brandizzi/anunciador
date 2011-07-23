var AnunciadorEditor = {
    editor : null,

    onLoad : function() {
        AnunciadorEditor.editor = document.getElementById('editor');
        AnunciadorEditor.editor.contentDocument.designMode = 'on';
        AnunciadorEditor.contentWindow = AnunciadorEditor.editor.contentWindow;
        AnunciadorEditor.commandManager = AnunciadorEditor.editor.commandManager;
    },

    onBoldButtonCommand : function() {
        AnunciadorEditor.doCommand('cmd_bold');
    },
    onItalicButtonCommand : function() {
        AnunciadorEditor.doCommand('cmd_italic');
    },
    onUnderlineButtonCommand : function() {
        AnunciadorEditor.doCommand('cmd_underline');
    },
    onColorSelectCommand : function() {
        var colorMenuList = document.getElementById('color');
        var selected = colorMenuList.selectedItem;
        var color = colorMenuList.selectedItem.value;
        AnunciadorEditor.doCommand('cmd_fontColor', {"state_attribute" : color});
    },

    onShow : function() {
        alert((new XMLSerializer()).serializeToString(AnunciadorEditor.editor.contentDocument));
    },

    doCommand : function(command, parameters) {
        var commandParams = {};
        if (parameters) {
            commandParams = Components.
                    classes['@mozilla.org/embedcomp/command-params;1'].
                    getService(Components.interfaces.nsICommandParams);
            for (var parameter in parameters) {
                commandParams.setCStringValue(parameter, parameters[parameter]);
            }
        }
        AnunciadorEditor.commandManager.doCommand(command, commandParams, 
                AnunciadorEditor.contentWindow);
    }
}
window.addEventListener("load", AnunciadorEditor.onLoad, false);
