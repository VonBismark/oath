/* eslint-disable */
// From -- https://github.com/Microsoft/uwp-experiences/blob/SouthRidge_video_app/SouthRidgeVideo/index.html

(function (global){
    if(typeof Windows === 'undefined' || typeof TVJS === undefined) return;

    // TVJS.DirectionalNavigation.focusableSelectors.push(".movieBox");
    // TVJS.DirectionalNavigation.focusableSelectors.push(".controls .iconfont");


    // We set up two boundaries. This means that if the focused element is not at least 200 pixels from
    // the edge of the screen, then we will scroll the viewport so that it is.

    var leftBoundaryToTriggerScrollIntoView = 200;
    var rightBoundaryToTriggerScrollIntoView = document.body.offsetWidth - 200;
    var topBoundaryToTriggerScrollIntoView = 100
    var bottomBoundaryToTriggerScrollIntoView = document.body.offsetHeight - 100;
    var scrollableList = document.body;
    var bodyScroll = document.body


    // Adjust the left and right boundaries if the window is resized.
    function handleWindowResize() {
        leftBoundaryToTriggerScrollIntoView = 200;
        rightBoundaryToTriggerScrollIntoView = document.body.offsetWidth - 200;
        topBoundaryToTriggerScrollIntoView = 100
        bottomBoundaryToTriggerScrollIntoView = document.body.offsetHeight - 100;
    };

    // window.addEventListener("resize", handleWindowResize, false);

    // This function handles the core logic for scrolling content into view.
    function handleFocusChanging(ev) {
        // console.log(ev)
        scrollableList = ev.detail.nextFocusElement.parentNode.parentNode;
        // console.log('scrollableList', scrollableList)
        var keyCode = ev.detail.keyCode;
        var nextFocusElement = ev.detail.nextFocusElement;
        if (nextFocusElement) {
            var nextFocusElementRect = nextFocusElement.getBoundingClientRect();
            var newScrollLeft = -1;
            var xScrollPos = 20;
            var yScrollPos = 20;

            switch (keyCode) {
                case 37: // Left arrow
                case 205: // Gamepad DPad left
                case 214: // Gamepad left thumbstick left:
                    // Figure out if focus is about to move past the left boundary and we
                    // need to scroll the next element into view.
                    if (nextFocusElementRect.left < leftBoundaryToTriggerScrollIntoView) {
                        // If yes, figure out how much to move scroll the viewport.
                        var xScrollAmount = -1 * (leftBoundaryToTriggerScrollIntoView - nextFocusElementRect.left);
                        newScrollLeft = Math.max(0, scrollableList.scrollLeft + xScrollAmount);
                        // console.log('nextFocusElementRect.left', nextFocusElementRect.left)
                        //  console.log('leftBoundaryToTriggerScrollIntoView', leftBoundaryToTriggerScrollIntoView);
                        console.log('newScrollLeft', newScrollLeft)
                        scrollableList.scrollLeft = newScrollLeft;
                    }
                    break;
                case 39: // Right arrow
                case 206: // Gamepad DPad right
                case 213: // Gamepad left thumbstick right
                    // Figure out if focus is about to move past the right boundary and we
                    // need to scroll the next element into view.
                    if (nextFocusElementRect.right > rightBoundaryToTriggerScrollIntoView) {
                        // If yes, figure out how much to move scroll the viewport.
                        var xScrollAmount = nextFocusElementRect.right - rightBoundaryToTriggerScrollIntoView;
                        xScrollPos = Math.max(0, scrollableList.scrollLeft + xScrollAmount);
                        //         console.log('nextFocusElementRect.right', nextFocusElementRect.right)
                        // console.log('rightBoundaryToTriggerScrollIntoView', rightBoundaryToTriggerScrollIntoView);
                        console.log('xScrollPos', xScrollPos)
                        scrollableList.scrollLeft = xScrollPos;
                    }
                    break;
                case 38: // up arrow
                case 203: // Gamepad DPad up
                case 211: // Gamepad left thumbstick up
                    // Figure out if focus is about to move past the right boundary and we
                    // need to scroll the next element into view.
                    if (nextFocusElementRect.top < topBoundaryToTriggerScrollIntoView) {
                        // If yes, figure out how much to move scroll the viewport.
                        var yScrollAmount = nextFocusElementRect.top - topBoundaryToTriggerScrollIntoView;
                        yScrollPos = Math.max(0, bodyScroll.scrollTop + yScrollAmount);
                        //         console.log('nextFocusElementRect.right', nextFocusElementRect.right)
                        // console.log('rightBoundaryToTriggerScrollIntoView', rightBoundaryToTriggerScrollIntoView);
                        console.log('yScrollPos', yScrollPos)
                        bodyScroll.scrollTop = yScrollPos; //scrollTo??????????????
                    }
                    break;
                case 40: // down arrow
                case 204: // Gamepad DPad down
                case 212: // Gamepad left thumbstick down
                    // Figure out if focus is about to move past the right boundary and we
                    // need to scroll the next element into view.
                    bottomBoundaryToTriggerScrollIntoView = window.innerHeight - 100;
                    if (nextFocusElementRect.bottom > bottomBoundaryToTriggerScrollIntoView) {
                        // If yes, figure out how much to move scroll the viewport.
                        console.log('nextFocusElementRect.bottom', nextFocusElementRect.bottom)
                        var yScrollAmount = bottomBoundaryToTriggerScrollIntoView - nextFocusElementRect.bottom;
                        yScrollPos = Math.max(0, bodyScroll.scrollTop - yScrollAmount);
                        //         console.log('nextFocusElementRect.right', nextFocusElementRect.right)
                        // console.log('rightBoundaryToTriggerScrollIntoView', rightBoundaryToTriggerScrollIntoView);
                        console.log('yScrollPos', yScrollPos)
                        bodyScroll.scrollTop = yScrollPos; //scrollTo??????????????
                    }
                    break;
                default:
                    break;
            }

            requestAnimationFrame(function() {
                if (nextFocusElement) {
                    nextFocusElement.focus();
                }
            });
        }
    };
    // Listen to the focuschanging event. This event will fire right before focus is about to change
    // allowing us to scroll content into view if needed.
    TVJS.DirectionalNavigation.addEventListener("focuschanging", handleFocusChanging, false);

})(this);