---
layout: post
title: Flutter Error Case Solution
tags: [flutter,error]
---

## Common Case

1. The lower bound of "sdk: '>=2.7.0 <3.0.0'" must be 2.12.0' or higher to enable null safety.

> The current Dart SDK (3.2.3) only supports null safety.
> flutter pub get

```sh
#pubspec.yaml

environment:
-  sdk: ">=2.7.0 <3.0.0"
+  sdk: '>=3.2.2 <4.0.0'
```

## Android Case

1. Flutter android build.gradle unable to resolve class GradleException

> Remove the new keyword before GradleException.

```sh
# android/app/build.gradle
throw GradleException("Flutter SDK not found. Define location with flutter.sdk in the local.properties file.")
```

## Ios Case

1. Create requirement setting

  > Error (Xcode): Sandbox: rsync(27129) deny(1) file-write-create

  ```sh
  Could not build the precompiled application for the device.
  Error (Xcode): Sandbox: rsync(27129) deny(1) file-write-create
  "<Project Root>/build/ios/Debug-iphoneos/Flutter.framework"

  Error (Xcode): Sandbox: dart(27098) deny(1) file-write-create
  "<Project Root>/build/ios/Debug-iphoneos/.last_build_id"

  Error (Xcode): Flutter failed to write to a file at
  "<Project Root>/build/ios/Debug-iphoneos/.last_build_id".

  # info.plist > Build Settings
  open ios/Runner.xcodeproj/
  ENABLE_USER_SCRIPT_SANDBOXING = NO
  ```

1. The request to open "io.cpeso.test" failed.

  > Verify that the Developer App certificate for your account is trusted on your device.
  > Open Settings on the device and navigate to General -> VPN & Device Management, then select your Developer App certificate to trust it.

1. Error: Could not find included file 'Generated.xcconfig' in search paths (in target 'Runner')

  > Try running flutter build ios and then rerun in Xcode

1. fatal error: module 'firebase_core' not found

  > open terminal
  > cd "your-project"/ios
  > pod install
