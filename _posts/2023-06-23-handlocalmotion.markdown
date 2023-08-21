---
layout: post
title:  "Hand Local Motion"
short: "handlocalmotion"
tags:
    - "VR"
    - "Interaction"
    - "UX"
    - "Prototype"
images: 
    - "/assets/images/cases/handlocalmotion/promo.png"

---
<!--summary-->

 The prototype in this study experiments the hand local motion by letting users use the pinch gesture to replicate the thumbstick moving behavior. The user testing result shows that users can easily move around with such a gesture without significant motion sickness. However, mapping local-rotating, jumping, and even flying is still a challenge and it feeds the future exploration. 

<!--more-->

Among immersive app users, there’s a common desire to walk around freely in open virtual worlds with “sliding” movement. When hands become a more dominant interaction media in spatial computing, inheriting users’ intention to explore worlds is an unsolved challenge. The prototype in this study examinates the hand local motion by letting users use the pinch gesture to replicate the thumbstick moving behavior. The user testing result shows that users can easily move around with such a gesture without significant motion sickness. However, mapping local-rotating, jumping, and even flying is still a challenge and it feeds the future exploration.

![Hand Local Motion](/assets/images/cases/handlocalmotion/moving.jpg)

## People Problem

> I want to move around in the immersive virtual world. 

When we explore a new immersive experience, I frequently heard friends asking about “how to move?” “how do I turn on sliding mode?”. And oftently, I see that they are already moving before they accomplish the question. People see a new world and they want to explore. It's a built DNA which remains true in virtual environment. 

## Challenge

> How do I move around with my bare hands?

Using hands is natural in many interface media. The emerging spatial computing platforms push hand tracking into the main stage of user interaction in virtual worlds. For example, Apple’s upcoming Vision Pro product doesn't ship with dedicated controllers. Meta also keeps investigating and improving their hand-tracking accountability. Common and reliable gestures have been well-defined by those big players, however, how to move around in spatial experiences remains unsettled.

![Hand Local Motion - picking up](/assets/images/cases/handlocalmotion/pickupbox.jpg)

I see that experienced VR players tend to “slide” around the open virtual worlds by turning the thumbstick in games like VRChat, Sprial, AltspaceVR, etc. When those games are migrated into the hand-tracking-dominated spatial computing experience, making users move around with their inherent habits becomes a challenge and yet the opportunity to build players’ confidence to adopt the interaction.

## User Insights

* Experienced VR players tend to “slide” around in open virtual worlds by turning the thumbstick on their controller.￼
* The continuous movement makes them move freely and it matches how they move in real life more closely than teleporting.
￼Continuous movement can also cause motion sickness with the fact that you see the world is moving but you sense no movement in your physical body.
   * However, we have seen that some people are easier to get motion sickness than others in the same program. 
   * We also see people may feel sick in one app but not in another one by using the same sliding movement. The visual effect and acceleration settings can contribute to motion sickness to users, while the level can also be differed by individuals. 
* Users who have used hand tracking on VR headsets before are already familiar with the pinch gesture, which has been defined as the main interactor in the major spatial computing devices.

## Resolution

In this experiment, users close their thumb and index fingertips and travel the pinch gesture around the directional pad to move themselves in the virtual world. 
The resolution allows users to move freely in an immersive virtual space with the wide-adopted pinch gesture. It’s based on the following assumptions:
* The pinch gesture has been widely adopted to spatial computing platforms and users use it to perform common interactions, like tapping a button, grabbing a virtual object, etc. 
* Experienced users prefer to move continuously instead of teleporting to a nearby locations.
* The mismatching of physical immobility and visual movement causes motion sickness. Forcing users to pay close attention on some sole elements can reduce the sickness during local movements. 

![Hand Local Motion - instruction](/assets/images/cases/handlocalmotion/instruction.jpg)

## User Testing

I follow the below steps to conduct user testing among 5 experienced Oculus Quest 2 users:
1. I guided testers to sideload the prototype apk into their Quest headset, and asked them to watch the instruction reel for the movement interaction.
2. We partied up in Oculus Home and made the brief interview to explain the testing process and acknowledge their engagement with immersive apps and hand tracking interaction. 
3. I asked the testers to initialize the prototype and accomplish 2 tasks in sequence:
   1. Walk straight to the end of the hallway to reach the finish line.
   2. Walk back to the start location and pick up the box at the spawn point. 
4. We kept the party connected so I can hear their response during the testing but not interfering the process. I also asked them to screen recording during the session. 
5. After they finished the tasks, I asked their scores about degrees of comfort, lwarnability of the interactions, and instruction usefulness. And then we conduct the testing by asking the open form of recommendations. 

### Instruction Video
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/856304018?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Volleyverse - voice powered metaverse"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Task 1 - Move To The Finish Line
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/856305781?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Volleyverse - voice powered metaverse"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Task 2 - Turn Back And Pick Up Objects
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/856306005?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Volleyverse - voice powered metaverse"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>



## Result

* All testers completed the 1st task smoothly and quickly. 
* Although all testers successfully picked the box in the 2nd task, they accomplished in different ways.
   * All testers expressed their intention to “snap turn” by a command initially but realized that the prototype doesn’t offer such an ability. 
   * Some testers move backwards to reach the start location. Others physically turn their body 180 degree  and resume waking in new direction. 
   * Many testers suffered in sudden moves when they were trying to move backwards.
* No people feel a worse motion sickness comparing to Spatial and other open world VR apps.
* All testers agree that the instruction is enough and feel easy to move around with the gesture.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/856305431?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Volleyverse - voice powered metaverse"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

## Opportunities

* People can see the benefits to replace controllers with hands, but they unlikely want to trade off on controller commands.
   * Testers expressed their desire to snap turn, jump, and even teleport to a far distance to move faster.
   * It will be a challenge to include all local motion options and keep the easiness of the interaction.
   * We can try to make snap turn as buttons on the side of the directional panel. Users can use their right hand to tap the buttons to turn.
* Applying acceleration or not remains debating. In this prototype, I apply the mechanism that the moving speed increases when users move their fingers further for the direction pad center. However, some testers expressed the worry about the potential discomfort while others feel it didn’t accelerate enough. 
   * We must fine tune the acceleration properties for matching a real-world moving speed.
   * We can run another test but replace the environment with a more realistic one. In this way, we can collect a more vivid feedback on adjusting the speed and behavior.
