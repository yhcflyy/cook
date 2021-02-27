//
//  RCTConvert+ Mapkit.h
//  cook
//
//  Created by yao hongchao on 2021/2/24.
//

#import <Foundation/Foundation.h>
#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end

NS_ASSUME_NONNULL_END
