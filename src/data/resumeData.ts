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
        "Engineer on an NFC/BLE fixture-configuration app (React Native, iOS and Android): 35 merged PRs covering NFC tag memory mapping, BLE firmware updates with verification, diagnostics reporting, secured job data and platform parity.",
        "Co-developed RDM (ANSI E1.20) support for a fixture-control app and its SBC-based wireless DMX gateway; front-end UI design and QA test planning.",
        "Front-end UI and QA for a lighting-control system designer, a sales-enablement web tool for drawing complete system diagrams.",
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
    { name: "Particle Analyzer & Doser", bullets: ["ESP32-S3 closed-loop control: PM2.5 particle sensor over I2C drives DMX512 dosing output; web UI, OTA, watchdog."] },
    { name: "K2 Plus Dashboard", bullets: ["Stdlib-only Python proxy dashboard for Klipper/Moonraker with in-browser WebRTC camera negotiation."] },
    { name: "Development Dashboard", bullets: ["Remote and performance monitoring for a self-hosted dev server: live host metrics, service health, camera feeds, one-click deploys, network failover."] },
    { name: "OpenMarine Pi", bullets: ["Raspberry Pi boat computer: Signal K, NMEA 2000 over CAN, configuration deployed with Ansible."] },
    { name: "NVWAPP", bullets: ["React Native LED video-wall planner generating PDF drawings and bill of materials."] }
  ],
  // Hands-on software work inside the senior PM years, most intense last. Shown on the home career path.
  engineeringTrack: [
    { label: "Algorithm development", detail: "Designing algorithms with the software team", start: "2019-01" },
    { label: "Writing and debugging code", detail: "Hands-on in the product codebases every day", start: "2025-04" },
    { label: "Building my own software", detail: "Apps, firmware and infrastructure, end to end", start: "2026-01" },
  ],
  education: [{ school: "B.S., Engineering", details: "DeVry University" }]
};
