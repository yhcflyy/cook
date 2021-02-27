//
//  RCTConvert+ Mapkit.m
//  cook
//
//  Created by yao hongchao on 2021/2/24.
//

#import "RCTConvert+Mapkit.h"
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>

@implementation RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json{
  json = [self NSDictionary:json];
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"latitudeDelta"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json{
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}

@end
