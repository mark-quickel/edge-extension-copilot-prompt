function getSearchParam(name) { 
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function insertPromptText() {
    const prompt = getSearchParam('prompt');
    console.log("Info: Inserting prompt text");
    if (!prompt) { return; }
    const input = document.querySelector("#m365-chat-editor-target-element");
    input.focus();
    document.execCommand('insertText',false,prompt);
}

if (document.readyState !== 'loading') {
    insertPromptText();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        insertPromptText();
    });
}

console.log("Info: Initializing edge-extension-copilot content script");