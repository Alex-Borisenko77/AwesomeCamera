#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RCTMyCustomViewManager, RCTViewManager)
    RCT_EXPORT_VIEW_PROPERTY(onResultImageExported, RCTBubblingEventBlock)
    RCT_EXTERN_METHOD(takePhotoViaManager:(nonnull NSNumber *)node)
@end