//
//  CookMapManager.m
//  cook
//
//  Created by yao hongchao on 2021/2/24.
//

#import "CookMapManager.h"
#import <UIKit/UIKit.h>
#import "CookMapView.h"
#import "RCTConvert+Mapkit.h"
#import <React/RCTComponent.h>

@interface CookMapManager()<MKMapViewDelegate>


@end

@implementation CookMapManager

RCT_EXPORT_MODULE(CookMap)
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView){
  [view setRegion:(json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region) animated:YES];
}

- (UIView*)view{
  CookMapView *mapView = [[CookMapView alloc] init];
  mapView.delegate = self;
  return mapView;
}


- (void)mapView:(CookMapView *)mapView regionDidChangeAnimated:(BOOL)animated{
  if (!mapView.onRegionChange) return;
  MKCoordinateRegion region = mapView.region;
  NSLog(@"%f",region.center.latitude);
  mapView.onRegionChange(@{@"region":@{
    @"latitude": @(region.center.latitude),
    @"longitude": @(region.center.longitude),
    @"latitudeDelta": @(region.span.latitudeDelta),
    @"longitudeDelta": @(region.span.longitudeDelta),
  }});
}

@end
