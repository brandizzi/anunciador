var AnunciadorEditor = {
    editor : null,

    onLoad : function() {
        AnunciadorEditor.editor = document.getElementById('editor');
        AnunciadorEditor.editor.contentDocument.designMode = 'on';
        AnunciadorEditor.contentWindow = AnunciadorEditor.editor.contentWindow;
        AnunciadorEditor.commandManager = AnunciadorEditor.editor.commandManager;
    },

    onBoldButtonCommand : function() {
        AnunciadorEditor.commandManager.doCommand('cmd_bold', {}, AnunciadorEditor.contentWindow);
    },
    onItalicButtonCommand : function() {
        AnunciadorEditor.commandManager.doCommand('cmd_italic', {}, AnunciadorEditor.contentWindow);
    },
    onUnderlineButtonCommand : function() {
        AnunciadorEditor.commandManager.doCommand('cmd_underline', {}, AnunciadorEditor.contentWindow);
    },
    onColorSelectCommand : function() {
        var colorMenuList = document.getElementById('color');
        var selected = colorMenuList.selectedItem;
        var color = colorMenuList.selectedItem.value;
        var commandParams = Components.classes['@mozilla.org/embedcomp/command-params;1'].getService(Components.interfaces.nsICommandParams);
        commandParams.setCStringValue("state_attribute", color);
        AnunciadorEditor.commandManager.doCommand(
                'cmd_fontColor', commandParams, 
                AnunciadorEditor.contentWindow);
    }
}
window.addEventListener("load", AnunciadorEditor.onLoad, false);
