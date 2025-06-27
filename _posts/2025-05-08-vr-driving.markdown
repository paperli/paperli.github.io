---
layout: post
title:  "VR Driving Tour"
short: "vrdriving"
tags:
    - "VR"
    - "Interaction"
    - "UX"
    - "Prototype"
    - "Develop"
images: 
    - "/assets/images/cases/vrdriving/promo.png"

---
<!--summary-->

 Yulon Motor wanted an immersive centerpiece for its factory tour—a virtual-reality “test-drive” that demonstrates the company’s Level 2 and Level 3 autonomous-driving capabilities. I was engaged as a solo contractor to design and build the experience end-to-end, from rapid concepts to an install-ready Unity application that runs on HTC Vive and Meta Quest headsets.

<!--more-->

Yulon Motor wanted an immersive centerpiece for its factory tour—a virtual-reality “test-drive” that demonstrates the company’s Level 2 and Level 3 autonomous-driving capabilities. I was engaged as a solo contractor to design and build the experience end-to-end, from rapid concepts to an install-ready Unity application that runs on HTC Vive and Meta Quest headsets.

<div style="padding:0;position:relative;"><iframe width="560" height="315" src="https://www.youtube.com/embed/GvvHeRzSmok?si=k5tIIE9hqeUVmTU6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## My Role

- **End-to-End Ownership** — UX research, interaction design, Unity development, shader & performance optimization, stakeholder alignment, on-site deployment.  
- **Cross-Cultural Coordination** — Bridged Yulon’s engineering team in Taiwan with external 3-D artists, ensuring technical specs met automotive-grade messaging and local tour-guide requirements.

## Objectives

1. Educate visitors on the differences between Level 2 Advanced Driver-Assistance Systems (ADAS) and Level 3 Conditional Automation.  
2. Showcase branded HMI cues (dash cluster, HUD, mirror indicators, voice prompts).  
3. Deliver sickness-free comfort suitable for first-time VR users on a factory floor.  
4. Remain hardware-agnostic until the headset decision (Vive vs Quest) was finalized.

![Study](/assets/images/cases/vrdriving/study.png)

## Design & Development Highlights

| Phase                | Key Actions                                                                                                                      |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **Discovery**        | • Reviewed ISO SAE J3016 autonomy definitions.<br>• Mapped real vehicle functions to VR-friendly use cases.<br>• Ran comfort tests to set max acceleration & field-of-view parameters. |
| **Concept & Flow**   | • Sketched low-fidelity storyboards and a branching user-flow (Figma).<br>• Aligned scope and acceptance criteria with Yulon safety engineers. |
| **Prototype Engineering** | • Chose **Unity 2022.3 LTS + XR Interaction Toolkit** for parity across OpenXR devices.<br>• Authored custom C# scripts for driving logic, sensor emulation, and hands-off detection.<br>• Built lightweight URP shaders and baked lighting to hit 90 FPS on Quest 2. |
| **Iteration & QA**   | • Weekly play-tests with factory staff; tuned speed curves and camera damping to minimize vection.<br>• Localized Mandarin voice-over prompts and regulatory terminology. |

## Scenario Breakdown

### Level 2 (Partial Automation)
1. Adaptive cruise holds a constant speed.  
2. Automatic emergency braking engages when a lead vehicle decelerates.  
3. Blind-spot warnings appear in side-mirror clusters and via spatial audio.  
4. Stop-and-go traffic: vehicle comes to a full stop and resumes smoothly.  
5. **Hands-on detection** reminds drivers to keep their hands on the wheel.

### Level 3 (Conditional Automation)
1. System confirms the driver may release the steering wheel.  
2. Vehicle accelerates to the highway set-speed autonomously.  
3. Lane-change assist overtakes a slower vehicle.  
4. Lifestyle prompt invites users to take a sip of coffee or snap a photo—reinforcing “eyes-off-road” allowances under Level 3.

**Finale** – The car executes an autonomous parking maneuver and connects to a charging bay inside Yulon’s R&D “lab-garage.”

![User Flow - 1](/assets/images/cases/vrdriving/flow1.png)

![User Flow - 2](/assets/images/cases/vrdriving/flow2.png)

## User-Experience & Safety Tactics

- **Comfort-First Motion Model** — Capped lateral acceleration, used constant-velocity segments, and blended camera easing to keep VR newcomers comfortable.  
- **Bright, Simplified Visuals** — High-contrast UI, stylized environment, and optimized draw calls for mobile GPUs.

![Design System](/assets/images/cases/vrdriving/design_system.png)

## Outcome & Impact
- Deployed on schedule for the public factory tour launch.  
- Averaged **4.7 / 5 visitor satisfaction** (post-tour surveys; “clarity of ADAS explanation” rose by 32 pp compared with static video).  
- The dual-platform build gave Yulon purchasing flexibility, ultimately saving ~20 % on hardware procurement.

## Contributions
- **Rapid Prototyping** — Delivered a production-grade VR demo in < 10 weeks, mirroring a quick iterative culture.  
- **Systems-Level Thinking** — Translated complex SAE autonomy specs into intuitive spatial interactions.  
- **Technical Range** — Unity XR-ITK, C# gameplay architecture, Shader Graph, asset-pipeline optimization, and comfort heuristics—all skills immediately applicable to building experimental prototypes for VR products.
- Balancing **technical accuracy** with **user comfort** is vital when visualizing automotive innovation.  
- Cross-platform abstraction (OpenXR) future-proofs stakeholder decisions and accelerates hardware trials.  
- Early, hands-on prototypes drive consensus faster than slideware—especially across language and discipline boundaries.
