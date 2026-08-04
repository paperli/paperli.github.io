---
layout: pure
title: Privacy Policy
permalink: /mocap/privacy/
---

# Privacy Policy #

_Last updated: August 4, 2026_

Ken-Jung Lee built the MoCáp app as a Commercial app. This SERVICE is provided by Ken-Jung Lee and is intended for use as is.

This page informs you of my policies regarding the collection, use, and disclosure of Personal Information for anyone who uses this Service. In short: **MoCáp is designed to keep your recordings on your device.** Your camera footage, video recordings, and motion data never leave your device unless you choose to share them, I never receive them, and I do not sell or share your personal information.

If you choose to use my Service, then you agree to the collection and use of information in relation to this policy.

## Summary ##

| Data | Where it is processed | Leaves your device? |
|---|---|---|
| Camera frames (the live view you point at a person) | On your device only | **No — never** |
| Body-tracking data (skeleton joint positions from ARKit) | On your device only | **No — never** |
| Motion files (BVH) and video recordings | On your device, in MoCáp's private app storage | **No** — only when you explicitly export or share them yourself |
| Live camera preview on Apple Watch | Between your iPhone and your own paired Apple Watch | **No** — it reaches no server, mine or anyone else's |
| Anonymous product-usage events (e.g. "recording completed") | TelemetryDeck | Yes — see [Analytics](#analytics). Contains no video, no motion data, and no file names |
| Payment information | Apple | I never receive or store it |

MoCáp has no account, no login, and no server of my own. There is no iCloud sync.

## Camera and Body Tracking (ARKit) ##

MoCáp's purpose is motion capture: you point your iPhone or iPad camera at a person, and the app records their body movement as an animation file you can use in 3D software. This section describes in full what MoCáp accesses, why, where it is processed and stored, how long it is kept, and how you delete it.

### What MoCáp accesses ###

On supported devices, MoCáp uses Apple's ARKit body tracking (`ARBodyTrackingConfiguration`). From each camera frame, ARKit derives the positions and rotations of up to **91 skeleton joints** — numeric coordinates describing where a hip, elbow, or knee is in space.

**These joint values are the motion data MoCáp records.** They describe a pose, not a person: they contain no facial imagery, no measurements capable of identifying anyone, and no biometric identifier.

### Camera frames ###

Camera frames are used to draw the live on-screen view so you can frame your shot, and to feed ARKit's body tracking. The system discards each frame as the next one arrives. **Camera frames are never uploaded anywhere.**

If you turn on **video capture** in Settings, MoCáp additionally records the camera view as an MP4 video file so you have reference footage alongside the motion data. This is optional and off unless you enable it. The resulting video is a recording of whoever is in frame — it is saved **only to your device**, in MoCáp's private app storage, and it is never uploaded to me or to any third party.

### What MoCáp never records, stores, or transmits ###

MoCáp does **not** transmit, upload, or retain on any server:

* camera frames, photographs, or video;
* body-tracking joint data, skeleton poses, or motion files;
* a body measurement, gait profile, biometric identifier, or any other data capable of identifying you or verifying your identity;
* the names you give your recordings.

### Why the data is used — and the only purpose it is used for ###

Joint positions are converted into a BVH (Biovision Hierarchy) animation file — the standard skeleton-animation format read by Blender, Maya, Cinema 4D, Poser, and similar tools. Producing the motion file you asked for is **the sole purpose** for which MoCáp uses camera and body-tracking data. It is used for no other purpose whatsoever.

### All processing happens on your device ###

Body tracking, motion conversion, BVH export, and video recording all run entirely on your device. This data is **never** transmitted to me, to any server I operate, or to any third party. No network request made by MoCáp carries camera footage, video, or motion data of any kind.

### What is stored on your device, and where ###

For each recording you save, MoCáp writes to its own private app storage on your device:

* the motion file (BVH, and Poser-format BVH if you selected it);
* the video file, if you enabled video capture; and
* a small record of the recording's name, date, and duration, so it can be listed in History.

All of it stays inside MoCáp's sandbox on your device. None of it is uploaded to any server, included in iCloud sync, or shared with anyone. Because it is stored in the app's container, it may be included in your own encrypted Apple device backup (iCloud Backup or a local backup) if you have backups enabled; that backup belongs to you and is governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). I have no access to it.

### Retention and deletion ###

Your recordings are kept until you delete them — nothing expires on its own, and nothing is retained by me at any point.

You can delete them at any time, and the deletion is permanent:

* In MoCáp, open **History** and swipe a recording to delete it. This removes the motion file, the video, and its History entry from your device.
* Deleting the MoCáp app from your device also removes all of them.

Because your recordings never reach me, there is no copy of them for me to delete or for anyone to request. If you have questions about deletion, contact me using the details below.

### No sharing and no secondary use ###

I do not sell, rent, share, or otherwise disclose your camera footage, video, or motion data to any third party. This data is never:

* used to identify you, verify your identity, or authenticate you;
* used for advertising or marketing, or disclosed to advertising networks, data brokers, information resellers, or any similar service;
* sent to third-party analytics services (MoCáp's analytics, described below, never includes footage or motion data);
* used to create, train, contribute to, or enrich any database of bodies, body measurements, motion, or biometric information — mine or anyone else's;
* used to train any machine-learning model, mine or anyone else's;
* used for any purpose other than producing the motion capture you asked for, or for any purpose you have not consented to.

### Your consent and control ###

Before any body tracking begins, iOS asks for your permission to use the camera. Camera access is used solely for the motion capture described above. You can withdraw permission at any time in **iOS Settings → Privacy & Security → Camera → MoCáp**; MoCáp cannot record without it. Body tracking runs only while a MoCáp screen that uses it is open.

**If you record another person,** please make sure they know and agree. You are responsible for having their permission — and, where children are involved, their parent's or guardian's permission — before you capture or share footage of them.

## Files You Export or Share ##

Motion files and videos stay on your device until **you** choose to send them somewhere. When you tap Share, iOS presents its standard share sheet and the file goes wherever you send it — AirDrop, Files, Mail, your Photos library, another app, or a cloud service you use. At that point the file is handled by whatever destination you picked, under that service's own privacy policy, not mine. I receive nothing in this process and have no visibility into it.

MoCáp asks for permission to add to your photo library only so it can save a captured video there when you ask it to.

## Apple Watch ##

If you use the MoCáp watch app as a remote control, your iPhone sends the watch a heavily reduced, low-quality snapshot of the camera view so you can frame your shot from your wrist, along with the current recording status and timer setting. This travels **directly between your iPhone and your own paired Apple Watch** over Apple's WatchConnectivity, which is device-to-device. These snapshots reach no server — not mine, not anyone's — and are not stored on either device.

## Siri and Voice Commands ##

If you use Siri or Shortcuts to start and stop recording, the phrase you speak is processed by Apple, not by me. I receive no audio and no transcript. Siri's handling of your request is governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

## In-App Purchase ##

The MoCáp Grande upgrade is a one-time purchase sold through the Apple App Store. All payments are processed by Apple; **I do not receive or store your payment information.** I see no card details, no billing address, and no Apple ID. Purchases are managed by Apple through StoreKit and handled under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) and the [Apple Media Services Terms](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).

## Analytics ##

MoCáp uses [TelemetryDeck](https://telemetrydeck.com/privacy/), a privacy-focused analytics service, to count anonymous product-usage events so I can understand which features people use and where they get stuck.

**What is sent:** the name of an event (for example, app launched, recording started, recording completed, motion exported, settings viewed, upgrade shown, purchase completed); a small non-personal label where relevant (such as the chosen frame rate, the selected file format, whether a recording included video, a recording's length in seconds, or an error code when something fails); standard technical context provided by the service — app version, operating system version, device model, and language/region; and a one-way hashed identifier that lets TelemetryDeck count returning users without identifying them.

**What is never sent:** camera footage, video, body-tracking or motion data, BVH files, the names of your recordings, your name, email address, contact information, precise location, or the advertising identifier (IDFA).

MoCáp does not use the App Tracking Transparency framework and does **not** track you across other apps or websites. These analytics are not used for advertising, are not sold, and are not linked to your identity. TelemetryDeck processes this data as described in their privacy policy. MoCáp currently has no in-app switch to turn analytics off; if that matters to you, please tell me and I will add one.

## Your Rights and Choices ##

Depending on where you live, you may have the right to ask what personal information is held about you, to have it corrected or deleted, or to object to its processing.

In MoCáp's case, almost everything is already in your hands: your recordings are on your device, and deleting them in History or deleting the app erases them permanently. The only data that leaves your device is the anonymous analytics described above, which is not linked to your identity — so there is no profile of you for me to look up, hand over, or delete. You can stop all analytics by deleting the app.

If you have a question or request about your information, contact me using the details below and I will do what I can.

## Security ##

I value your trust. Because MoCáp keeps your recordings on your device, your information stays under your control. Motion files and videos are stored in MoCáp's private app sandbox, protected by iOS. No method of electronic storage or transmission is 100% secure, and I cannot guarantee absolute security.

## Children's Privacy ##

This Service does not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and believe your child has provided personal information, please contact me so I can take the necessary action. Please also see the note above about recording other people, including children.

## Changes to This Privacy Policy ##

I may update this Privacy Policy from time to time. You are advised to review this page periodically for any changes. Changes are effective immediately after they are posted on this page.

## Contact Us ##

If you have any questions or suggestions about this Privacy Policy — including any question about camera or motion data — do not hesitate to contact me.

[paperworkStudio](https://paperworkstud.io/) · [paper.li@gmail.com](mailto:paper.li@gmail.com)
