export type Project = {
  title: string;
  description: string;
  stack: string[];
  label: "Professional" | "Personal" | "Hobby";
  repo?: string; // omitted for proprietary employer work
  live?: string;
};

export const projects: Project[] = [
  {
    title: "UNRIVAL — Fixture Configuration App",
    label: "Professional",
    description:
      "Chauvet Professional's iOS/Android app for configuring and diagnosing fixtures over NFC and Bluetooth LE. " +
      "35 merged PRs: NFC tag memory mapping to the company spec, BLE firmware-update gating and verification, " +
      "diagnostics report rework, encrypted job PINs, MVR IP patching, Android/iOS parity. Proprietary code.",
    stack: ["React Native", "TypeScript", "MobX-State-Tree", "BLE", "NFC"],
  },
  {
    title: "Connect FX & WellCom Server — RDM Release",
    label: "Professional",
    description:
      "Fixture control app and its wireless gateway server. Co-developed the 5.0.0 release that added RDM " +
      "(ANSI E1.20) across app and gateway; front-end UI design and much of the QA test planning. Proprietary code.",
    stack: ["React Native", "TypeScript", "Node.js", "RDM", "DMX512"],
  },
  {
    title: "ChamSys Systems Builder",
    label: "Professional",
    description:
      "Sales-enablement web tool for drawing complete lighting-control system diagrams with ChamSys/Chauvet " +
      "products. Team development with a focus on front-end UI design and QA. Proprietary code.",
    stack: ["React", "TypeScript", "Vite"],
  },
  {
    title: "DMX Haze Regulator",
    label: "Personal",
    description:
      "Closed-loop haze control: a PM2.5 sensor over I2C drives DMX512 output to haze machines. " +
      "Live web UI with charts, OTA updates, watchdog.",
    stack: ["ESP32-S3", "C++", "I2C", "DMX512"],
    repo: "https://github.com/achiappone/DMX_Haze_Regulator",
  },
  {
    title: "K2 Plus Dashboard",
    label: "Personal",
    description:
      "Read-only proxy dashboard for a Klipper/Moonraker 3D printer: live temperatures, progress, and an " +
      "in-browser WebRTC camera negotiation. Python standard library only.",
    stack: ["Python", "JavaScript", "WebRTC"],
    repo: "https://github.com/achiappone/k2plus-dashboard",
  },
  {
    title: "pve-stack",
    label: "Personal",
    description:
      "Self-hosted infrastructure on Proxmox: ops dashboard, host metrics exporter, WebRTC→MJPEG camera relay, " +
      "deploy tooling and network failover.",
    stack: ["TypeScript", "Python", "Bash", "systemd", "Proxmox"],
    repo: "https://github.com/achiappone/pve-stack",
  },
  {
    title: "OpenMarine Pi",
    label: "Personal",
    description:
      "Raspberry Pi boat computer: Signal K, NMEA 2000 over a CAN HAT, engine diagnostics and audio, " +
      "with configuration managed as code.",
    stack: ["Raspberry Pi", "Node.js", "Python", "Ansible", "CAN"],
    repo: "https://github.com/achiappone/openMarineChipAjoi",
  },
  {
    title: "NVWAPP — LED Video Wall Planner",
    label: "Personal",
    description:
      "Cross-platform planner for LED video walls: screen, processing and cabling, with a generated PDF of " +
      "drawings and a bill of materials.",
    stack: ["React Native", "Expo", "TypeScript", "MobX-State-Tree", "pdfmake"],
    repo: "https://github.com/achiappone/NVWAPP",
  },
  {
    title: "Helm Design",
    label: "Hobby",
    description:
      "Parametric CAD as code for a 3D-printed boat helm display housing; assertions block geometry that can't be printed.",
    stack: ["Python", "build123d", "3D printing"],
    repo: "https://github.com/achiappone/helm-design",
  },
];
