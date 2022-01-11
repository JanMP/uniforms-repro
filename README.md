# repro demonstrating error with local uniforms-unstyled on meteor cordova builds

Import of a local copy of the sources of uniforms-unstyled for easy customization works
fine in the web browser but leads to the following error on cordova builds:

```
[Error] TypeError: Cannot call a class constructor without |new|
	AutoValidatedQuickUnstyledForm (modules.js:39890)
	_ (app.js:231)
	constructClassInstance (modules.js:16777)
	updateClassComponent (modules.js:21486)
	callCallback (modules.js:8006)
	dispatchEvent
	invokeGuardedCallbackDev (modules.js:8055)
	invokeGuardedCallback (modules.js:8117)
	beginWork$1 (modules.js:28025)
	performUnitOfWork (modules.js:26837)
	workLoopSync (modules.js:26768)
	renderRootSync (modules.js:26731)
	performSyncWorkOnRoot (modules.js:26354)
	scheduleUpdateOnFiber (modules.js:25942)
	updateContainer (modules.js:29543)
	(anonyme Funktion) (modules.js:30082)
	unbatchedUpdates (modules.js:26492)
	legacyRenderSubtreeIntoContainer (modules.js:30081)
	(anonyme Funktion) (app.js:2097)
	maybeReady (meteor.js:975)
	releaseReadyHold (meteor.js:964)
	(anonyme Funktion) (cordova.js:827)
	(anonyme Funktion) (cordova.js:232)
```

In App.jsx you will find three scenarios with different imports of uniforms-unstyled.

