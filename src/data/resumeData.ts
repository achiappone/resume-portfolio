export const resumeData = {
  name: "Anthony Chiappone",
  title: "Software Engineer · Senior Product Manager",
  location: "Sunrise, FL",
  email: "anthonychiappone@gmail.com",
  summary:
    "Software engineer and senior product manager with 15 years in professional lighting and control systems. I build software that talks to hardware: React Native apps that configure fixtures over BLE and NFC, RDM/DMX protocol work, ESP32 firmware, and the web tools and infrastructure around them.",
  skills: [
    "TypeScript", "React", "React Native", "Node.js", "MobX-State-Tree", "Python", "C/C++ (ESP32)", "C#",
    "DMX512 / RDM / Art-Net / sACN", "BLE / NFC", "GitHub Actions / CI", "Linux / Proxmox / systemd",
    "Product Management", "Agile Delivery", "Technical Writing"
  ],
  experience: [
    {
      role: "Senior Product Manager",
      company: "Chauvet Professional",
      dates: "2019–Present",
      bullets: [
        "Engineer on UNRIVAL, a React Native fixture-configuration app (BLE + NFC): 35 merged PRs covering NFC tag memory mapping, BLE firmware-update verification, diagnostics, encrypted job PINs and Android/iOS parity.",
        "Co-developed the Connect FX / WellCom Server 5.0.0 release adding RDM (ANSI E1.20) across app and gateway; front-end UI design and QA test planning.",
        "Front-end UI and QA for ChamSys Systems Builder, a sales-enablement system-diagram tool.",
        "Led engineering and docs for LED video wall tools.",
        "Built internal apps for quoting and spec PDFs.",
        "Led cross-functional teams to deliver products on time and on budget.",
        "Liaised with customers and sales to gather requirements and feedback.",
        "Led Software team using Agile methodologies.",
        "Implemented life cycle processes to improve quality and efficiency."
      ],
    },
    {
      role: "Product Manager",
      company: "Chauvet Professional",
      dates: "2016–2019",
      bullets: [
        "Managed pro lighting/video products from concept to release.",
        "Coordinated between engineering, marketing, sales, and support teams."
      ]
    },
    {
      role: "Product Engineer",
      company: "Chauvet Professional",
      dates: "2013–2016",
      bullets: [
        "Developed hardware, software and firmware for lighting controllers and LED panels.",
        "Provided technical support and training for dealers and end users."  
      ]
    },
    { role: "Technical Writer",
      company: "Chauvet Professional",
      dates: "2011–2013",
      bullets: [
        "Created user manuals, help files, and release notes.",
        "Collaborated with engineers and product managers to gather information."
      ]
    }
  ],
  projects: [
    { name: "DMX Haze Regulator", bullets: ["ESP32-S3 closed-loop control: PM2.5 sensor over I2C drives DMX512 output; web UI, OTA, watchdog."] },
    { name: "K2 Plus Dashboard", bullets: ["Stdlib-only Python proxy dashboard for Klipper/Moonraker with in-browser WebRTC camera negotiation."] },
    { name: "pve-stack", bullets: ["Proxmox self-hosted infrastructure: ops dashboard, metrics exporter, camera relay, CI deploys, network failover."] },
    { name: "OpenMarine Pi", bullets: ["Raspberry Pi boat computer: Signal K, NMEA 2000 over CAN, configuration deployed with Ansible."] },
    { name: "NVWAPP", bullets: ["React Native LED video-wall planner generating PDF drawings and bill of materials."] }
  ],
  education: [{ school: "B.S., Engineering", details: "Devry University" }]
};
