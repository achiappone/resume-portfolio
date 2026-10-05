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
    title: "NFC/BLE — Fixture Configuration App",
    label: "Professional",
    description:
      "Cross-platform mobile app that configures and diagnoses professional lighting fixtures over NFC and " +
      "Bluetooth LE, including fixtures that are not yet powered. 35 merged PRs: NFC tag memory mapping, " +
      "BLE firmware updates with verification, diagnostics reporting, secured job data and iOS/Android parity. Proprietary code.",
    stack: ["React Native", "TypeScript", "MobX-State-Tree", "BLE", "NFC"],
  },
  {
    title: "Wireless DMX Gateway — RDM Support",
    label: "Professional",
    description:
      "A fixture-control app and the SBC-based wireless DMX gateway it talks to. Co-developed RDM " +
      "(ANSI E1.20) support across app and gateway: device addressing, protocol alignment and wireless " +
      "link reliability. Front-end UI design and much of the QA test planning. Proprietary code.",
    stack: ["React Native", "TypeScript", "Node.js", "SBC / embedded Linux", "RDM", "DMX512"],
  },
  {
    title: "Lighting-Control System Designer",
    label: "Professional",
    description:
      "Sales-enablement web tool that lets sales and support teams draw complete lighting-control system " +
      "diagrams from a product catalogue. Team development with a focus on front-end UI design and QA. Proprietary code.",
    stack: ["React", "TypeScript", "Vite"],
  },
  {
    title: "Particle Analyzer & Doser",
    label: "Personal",
    description:
      "Closed-loop particle control: a PM2.5 particle sensor over I2C drives DMX512 dosing output. " +
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
    title: "Development Dashboard",
    label: "Personal",
    description:
      "Remote and performance monitoring for a self-hosted development server: live host metrics, service " +
      "health, camera feeds, one-click deploys and automatic network failover.",
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
