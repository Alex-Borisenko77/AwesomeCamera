@objc (RCTMyCustomViewManager)
class MyCustomViewManager: RCTViewManager {

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func view() -> UIView! {
    return MyCustomView()
  }

  @objc func takePhotoViaManager(_ node:NSNumber) {
    DispatchQueue.main.async {
      let view = self.bridge.uiManager.view(forReactTag: node) as! MyCustomView
      view.takePhoto()
    }
  }
}
