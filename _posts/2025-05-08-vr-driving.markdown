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

### Study

I conducted a comprehensive review of ISO SAE J3016 autonomy standards, analyzed the target user demographics, and performed a competitive analysis to inform the project direction. Recognizing that approximately 75% of factory visitors are family groups with limited or no prior VR experience, I distilled key experience principles and shared them with the team to ensure alignment before development commenced.
- **Educatinoal and Insightful:** The primary goal was to enable visitors to clearly understand Yulon’s ADAS capabilities, allowing them to learn how these systems assist in everyday driving through an immersive medium.
- **Autonomous Experience:** The VR journey was designed to progress autonomously with minimal user intervention. This approach accommodated the limited VR setup capacity and brief session durations, reducing the learning curve and potential edge cases while authentically showcasing autonomous driving excellence.
- **Maximized comfort:** Comfort settings were prioritized and optimized by default to minimize the risk of motion sickness. Given that most visitors had little to no VR exposure, the experience was carefully crafted to ensure a pleasant and accessible introduction to virtual reality.

### Concept & Flow

We broke down scenarios to Level 2, Level 3, and the game end parts. I started sketching the low-fidelity user flow on Figma and used it to get aligned cross the board:

**Level 2 (Partial Automation)**
1. Adaptive cruise holds a constant speed.  
2. Automatic emergency braking engages when a lead vehicle decelerates.  
3. Blind-spot warnings appear in side-mirror clusters and via spatial audio.  
4. Stop-and-go traffic: vehicle comes to a full stop and resumes smoothly.  
5. **Hands-on detection** reminds drivers to keep their hands on the wheel.

**Level 3 (Conditional Automation)**
1. System confirms the driver may release the steering wheel.  
2. Vehicle accelerates to the highway set-speed autonomously.  
3. Lane-change assist overtakes a slower vehicle.  
4. Lifestyle prompt invites users to take a sip of coffee or snap a photo—reinforcing “eyes-off-road” allowances under Level 3.

**Finale** – The car executes an autonomous parking maneuver and connects to a charging bay inside Yulon’s R&D “lab-garage.”

![User Flow - 1](/assets/images/cases/vrdriving/flow1.png)

![User Flow - 2](/assets/images/cases/vrdriving/flow2.png)

### Interaction

**The Steering Wheel:** The experience was intentionally designed to be predominantly autonomous, with the steering wheel serving as the primary interactive element. Visitors were guided to grasp the steering wheel at the start, maintaining contact throughout the Level 2 scenario, and prompted to release it as the experience transitioned to Level 3. This approach emphasized the steering wheel’s role in delivering an authentic and immersive driving sensation, while minimizing unnecessary interactions to streamline the user journey and maintain engagement.

**Car Dashboard:** I also designed the car dashboard, featuring a speedometer and dynamic information/warning displays. These elements communicated real-time game states and alerts—such as ADAS activation, lane departure, and overtaking warnings—ensuring users remained informed and oriented throughout the experience.

**Voice Prompts:** Pre-generated AI voice prompts were integrated to deliver real-time road conditions and educational cues throughout the experience. This passive audio guidance kept users informed of the current scenario and safety information, supporting engagement and learning while preserving immersion.

**Robot Assistant:** To further enhance educational value, a floating robot assistant was introduced as an in-game guide, delivering contextual information at the onset of each scenario, while advocating the advanced AI system mindset.

**Optional Interactables:** Additionally, I developed optional interactive moments within the Level 3 scenario, encouraging users to pick up and sip a virtual coffee or use a phone to capture in-game scenes. These interactions reinforced the “eyes-off-road” capabilities of Level 3 automation, while adding moments of delight and reinforcing key learning objectives.

## User-Experience & Safety Tactics

**Comfort-First Motion Model:** To minimize motion sickness and make the experience accessible for VR newcomers, I capped lateral acceleration, used constant-velocity driving segments, and applied zero manual camera movement throughout the expereince.

**Bright, Simplified Visuals:** High-contrast UI elements and a stylized, minimal environment enhanced clarity and orientation. All visuals were optimized for mobile GPUs, ensuring smooth performance on both HTC Vive and Meta Quest headsets.

![Design System](/assets/images/cases/vrdriving/design_system.png)

## Outcome & Impact
- Deployed on schedule for the public factory tour launch.  
- Averaged **4.7 / 5 visitor satisfaction** (post-tour surveys; “clarity of ADAS explanation” rose by 32 pp compared with static video).  
- The dual-platform build gave Yulon purchasing flexibility, ultimately saving ~20 % on hardware procurement.

## Contributions

- **Strategic Blueprinting** - Established the design principles at the early on and use them to blueprint the user flow, Balancing **technical accuracy** with **user comfort** is vital when visualizing automotive innovation. 

- **Rapid Prototyping** - Delivered a production-grade VR demo in < 10 weeks, mirroring a quick iterative culture from start to end.

- **System Thinking** - Translated complex SAE autonomy specs into intuitive spatial interactions, and proposed the platform-independent development environment to ensure cross-platform support.

- **Technical Range:** — Unity XR-ITK, C# gameplay architecture, Shader Graph, asset-pipeline optimization, and comfort heuristics—all skills immediately applicable to building experimental prototypes for VR products.

