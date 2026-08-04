---
layout: pure
title: Privacy Policy
permalink: /fascroll/privacy/
---

# Privacy Policy #

_Last updated: August 3, 2026_

Ken-Jung Lee built the Fascroll app as a Commercial app. This SERVICE is provided by Ken-Jung Lee and is intended for use as is.

This page informs you of my policies regarding the collection, use, and disclosure of Personal Information for anyone who uses this Service. In short: **Fascroll is designed to keep your data on your device.** Your face data never leaves your device, I never receive it, and I do not sell or share your personal information.

If you choose to use my Service, then you agree to the collection and use of information in relation to this policy.

## Summary ##

| Data | Where it is processed | Leaves your device? |
|---|---|---|
| Face data (facial expression values from the TrueDepth camera) | On your device only | **No — never** |
| Expression training samples and your personalized recognition model | On your device only, in Fascroll's private app storage | **No** (except within your own encrypted Apple device backup, if you have backups enabled) |
| Browsing history (URL, title, time) | On your device | Only to your own private iCloud, and only if you are a Premium subscriber with iCloud enabled |
| Anonymous product-usage events (e.g. "training completed") | TelemetryDeck | Yes — see [Analytics](#analytics). Contains no face data and no browsing data |
| Payment information | Apple | I never receive or store it |

## Face Data (TrueDepth Camera and ARKit) ##

Fascroll's purpose is hands-free browsing: you scroll and navigate web pages by making facial expressions instead of touching the screen. This section describes in full what face data Fascroll accesses, why, where it is processed and stored, how long it is kept, and how you delete it.

### What Fascroll accesses ###

On devices with a TrueDepth camera, Fascroll uses Apple's ARKit face tracking (`ARFaceTrackingConfiguration`). From each camera frame, ARKit derives a set of 52 numeric **blend shape coefficients** — abstract values between 0 and 1 that describe the relative movement of facial features, such as "jaw open," "brow down (left)," or "mouth smile (right)."

**These coefficients are the only face data Fascroll reads.**

### What Fascroll never records, stores, or transmits ###

Fascroll does **not** record, save, transmit, or retain:

* camera images, photographs, video, or any recording of your face;
* the TrueDepth depth map or any depth data;
* the ARKit face mesh or face geometry;
* a faceprint, face template, biometric identifier, or any other data capable of identifying you or verifying your identity.

Camera frames are used only to draw the live on-screen preview while you are training an expression, and the system discards each frame as the next one arrives. Frames are never written to storage and never sent anywhere.

### Why the data is used — and the only purpose it is used for ###

The blend-shape coefficients are passed to a machine-learning model that runs on your device (Apple Core ML) which classifies your current expression and maps it to a browsing command — scroll, go back, reload, and so on. Recognizing an expression in order to perform the browsing action you assigned to it is **the sole purpose** for which Fascroll uses face data. Face data is used for no other purpose whatsoever.

### All processing happens on your device ###

Face tracking, expression recognition, and expression training all run entirely on your device. Face data is **never** transmitted to me, to any server I operate, or to any third party. No network request made by Fascroll carries face data of any kind.

### What is stored on your device, and where ###

If you choose to personalize recognition using **Train AI model**:

* the expression samples you record — the numeric blend-shape coefficients together with the expression label you assigned to them — are written to a file in Fascroll's private Application Support directory, inside the app's sandbox on your device; and
* the personalized Core ML recognition model built from those samples is written to that same private directory.

Both remain inside Fascroll's sandbox on your device. Neither is uploaded to any server, included in iCloud sync, or shared with anyone. Because they are stored in the app's container, they may be included in your own encrypted Apple device backup (iCloud Backup or a local backup) if you have backups enabled; that backup belongs to you and is governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). I have no access to it.

When you are simply browsing rather than training, blend-shape values are held in memory only long enough to classify the current camera frame and are then discarded. They are never written to storage.

### Retention and deletion ###

Face data is not retained longer than needed for the purpose above:

* **Live recognition:** discarded frame by frame; retained only in memory.
* **Training samples and your personalized model:** retained until you delete them.

You can delete all of it at any time, and the deletion is permanent:

* In Fascroll, go to **Settings → Train AI model → Reset → "Reset & Delete."** This deletes your personalized model and every stored training sample from your device and restores the default model.
* Deleting the Fascroll app from your device also removes them.

Because face data never reaches me, there is no copy of it for me to delete or for anyone to request. If you have questions about deletion, contact me using the details below.

### No sharing and no secondary use ###

I do not sell, rent, share, or otherwise disclose your face data to any third party. Face data is never:

* used to identify you, verify your identity, or authenticate you;
* used for advertising or marketing, or disclosed to advertising networks, data brokers, information resellers, or any similar service;
* sent to third-party analytics services (Fascroll's analytics, described below, never includes face data);
* used to create, train, contribute to, or enrich any database of faces, facial measurements, or biometric information — mine or anyone else's;
* used to train any model outside your device, or any model shared between users;
* used for any purpose other than performing the hands-free browsing action you asked for, or for any purpose you have not consented to.

### Your consent and control ###

Before any face tracking begins, iOS asks for your permission to use the camera. Camera access is used solely for the expression recognition described above. You can withdraw permission at any time in **iOS Settings → Privacy & Security → Camera → Fascroll**; Fascroll then continues to work as an ordinary touch-operated browser. Face tracking runs only while a Fascroll screen that uses it is open.

## On-Device Model Training ##

Training is optional. It runs entirely on your device using Apple's on-device machine learning; no training data is sent to a server, and the resulting model is personal to your device. See [Retention and deletion](#retention-and-deletion) above for exactly what is stored and how to erase it.

## Browsing History ##

The web pages you open in Fascroll (URL, page title, and time) are saved locally on your device so you can revisit them. I never receive your browsing history.

## iCloud Sync ##

If you are a Fascroll Premium subscriber and signed in to iCloud, your browsing history may sync across your devices through your **private iCloud account** using Apple's iCloud/CloudKit. Free users' history stays local to the device and is not synced. Synced history is stored in your personal iCloud and is governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/); I do not have access to it and it is not stored on any server operated by me. **Face data and training data are never synced to iCloud.**

## Subscriptions ##

Fascroll Premium is an auto-renewable subscription sold through the Apple App Store. All payments are processed by Apple; **I do not receive or store your payment information.** Subscription purchases and status are managed by Apple through StoreKit. Payment, billing, and subscription management are handled under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) and the [Apple Media Services Terms](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).

## AI Model Updates ##

Fascroll may download improved expression-recognition models from `paperworkstud.io` to keep recognition accurate. These requests are **downloads only** — no personal information, and no face or training data, is sent in them.

## Analytics ##

Fascroll uses [TelemetryDeck](https://telemetrydeck.com/privacy/), a privacy-focused analytics service, to count anonymous product-usage events so I can understand which features people use and where they get stuck.

**What is sent:** the name of an event (for example, onboarding shown, browsing started, training completed, paywall shown, subscription purchased); a small non-personal label where relevant (such as which screen opened the paywall, or the number identifying which expression was trained); standard technical context provided by the service — app version, operating system version, device model, and language/region; and a one-way hashed identifier that lets TelemetryDeck count returning users without identifying them.

**What is never sent:** face data of any kind, camera images, expression training samples, your personalized model, URLs, page titles, browsing history, search queries, your name, email address, contact information, precise location, or the advertising identifier (IDFA).

Fascroll does not use the App Tracking Transparency framework and does **not** track you across other apps or websites. These analytics are not used for advertising, are not sold, and are not linked to your identity. TelemetryDeck processes this data as described in their privacy policy.

## Web Browsing, Cookies & Other Sites ##

Fascroll is a web browser. Websites you visit inside Fascroll are operated by third parties and may set their own cookies and collect information according to their own privacy policies. I do not operate those sites, and I have no control over and assume no responsibility for their content or privacy practices. I strongly advise you to review the privacy policy of any website you visit.

## Security ##

I value your trust. Because Fascroll keeps your data on your device (and, if enabled, in your private iCloud), your information stays under your control. Face data and training data are stored in Fascroll's private app sandbox, protected by iOS. No method of electronic storage or transmission is 100% secure, and I cannot guarantee absolute security.

## Children's Privacy ##

This Service does not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and believe your child has provided personal information, please contact me so I can take the necessary action.

## Changes to This Privacy Policy ##

I may update this Privacy Policy from time to time. You are advised to review this page periodically for any changes. Changes are effective immediately after they are posted on this page.

## Contact Us ##

If you have any questions or suggestions about this Privacy Policy — including any question about face data — do not hesitate to contact me.

[paperworkStudio](https://paperworkstud.io/) · [paper.li@gmail.com](mailto:paper.li@gmail.com)
