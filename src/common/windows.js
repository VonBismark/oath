const { Windows } = window;

if (Windows) {
  // Fill screen (No overscan-safe-area)
  const applicationView = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
  const { useCoreWindow } = Windows.UI.ViewManagement.ApplicationViewBoundsMode;
  applicationView.setDesiredBoundsMode(useCoreWindow);
  Windows.UI.ViewManagement.ApplicationViewScaling.trySetDisableLayoutScaling(true);
}
