var editorController = {
    editor : null,

    onLoad : function() {
        editorController.editor = document.getElementById('editor');
        editorController.editor.contentDocument.designMode = 'on';
    },

    onBoldButtonCommand : function() {
        editorController.editor.commandManager.doCommand('cmd_bold', {}, editorController.editor.contentWindow);
    },
    onItalicButtonCommand : function() {
        editorController.editor.commandManager.doCommand('cmd_italic', {}, editorController.editor.contentWindow);
    },
    onUnderlineButtonCommand : function() {
        editorController.editor.commandManager.doCommand('cmd_underline', {}, editorController.editor.contentWindow);
    },
    onColorSelectCommand : function() {
        var colorMenuList = document.getElementById('color');
        var selected = colorMenuList.selectedItem;
        var color = colorMenuList.selectedItem.value;
        var commandParams = Components.classes['@mozilla.org/embedcomp/command-params;1'].getService(Components.interfaces.nsICommandParams);
        commandParams.setCStringValue("state_attribute", color);
        editorController.editor.commandManager.doCommand(
                'cmd_fontColor', commandParams, 
                editorController.editor.contentWindow);
    }
}
window.addEventListener("load", editorController.onLoad, false);
