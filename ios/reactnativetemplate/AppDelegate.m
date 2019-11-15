/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
//#import <CodePush/CodePush.h> -> Caso use CodePush, descomentar linhas com final '-> 1'
//#import <Firebase.h> ->  Caso use CodePush, descomentar linhas com final '-> 2'

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <ReactNativeNavigation/ReactNativeNavigation.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  //[FIRApp configure]; -> 2
  NSURL *jsCodeLocation;
  //#ifdef DEBUG -> 1
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  //#else -> 1
  //  jsCodeLocation = [CodePush bundleURL]; -> 1
  //#endif -> 1

  [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
  return YES;
}

@end
