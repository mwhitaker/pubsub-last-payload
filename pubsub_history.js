var pubSubHistory = (function() {
    // private vars and functions
    var currentTopic = function() {
        var url = decodeURIComponent(document.location);
        var vTokens = url.match(/topics\/([^/]+)/i);
        if(vTokens) return vTokens[1];
        
        return null;
    };
    var getLocal = function(pEvent) {
        pEvent.preventDefault();
        pEvent.stopPropagation();
        var vTopic = currentTopic();
        var elem = document.getElementsByTagName('textarea');
        var ls = localStorage.getItem(vTopic);
        if(ls) {
            elem[0].value = ls;
        }
    };
    var setLocal = function(pEvent) {
        pEvent.preventDefault();
        pEvent.stopPropagation();
        var vTopic = currentTopic();
        var elem = document.getElementsByTagName('textarea');
        var store = elem[0].value;
        localStorage.setItem(vTopic, store);
    };
		
		return {
            // public vars and functions
            
			ui: function() {		
                try {
                    var vTopic = currentTopic();
                    if(vTopic) {
                        var originalElement = document.querySelector('div.p6n-action-bar > jfk-button.p6n-pubsub-publish-message-button.p6n-loading-button.jfk-button.goog-inline-block.jfk-button-primary');
                        originalElement.addEventListener('click', setLocal);
                        var elem = document.getElementsByTagName('textarea');
                        var ls = localStorage.getItem(vTopic);
                        if(ls) {
                            elem[0].value = ls;
                        }
                        // uncomment below if you want to show a button instead
                        // var parentDiv = document.querySelector("form[name='publishMessageForm']");
                        // var newButton = document.createElement('button');
                        // newButton.innerText = 'Load Last Payload';
                        // newButton.setAttribute('class', 'p6n-pubsub-publish-message-button p6n-loading-button jfk-button goog-inline-block jfk-button-primary');
                        // newButton.addEventListener('click', getLocal);
                        // parentDiv.appendChild(newButton);
                    }
                                        
                    } catch (error) {
                        console.log(error);
                    }
            }
		};
    })();
    
    pubSubHistory.ui();