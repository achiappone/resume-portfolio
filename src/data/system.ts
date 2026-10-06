// The home-page signal-flow diagram: where each piece of work sits in a lighting-control system.
// Coordinates are in the SVG's 760x400 viewBox.

export type WireKind = "net" | "dmx" | "ble";

export type SystemWire = { id: string; kind: WireKind; d: string; label?: { text: string; x: number; y: number } };

export type SystemNode = {
  id: string;
  name: string;
  sub: string;
  subIsProtocol?: boolean; // protocol subs are set in mono; names are not
  box: { x: number; y: number; w: number; h: number };
  kind: "Professional" | "Personal" | "Protocols" | "Hardware";
  title: string;
  body: string;
  tags: string[];
  link?: { href: string; text: string };
  note?: string;
  wires: string[]; // wires lit when this node is selected, in signal order
};

export const wires: SystemWire[] = [
  { id: "console-net", kind: "net", d: "M150 80 H300", label: { text: "OSC", x: 225, y: 70 } },
  { id: "net-gw", kind: "net", d: "M400 80 H530", label: { text: "Art-Net · sACN", x: 465, y: 70 } },
  { id: "net-srv", kind: "net", d: "M350 104 V200" },
  { id: "gw-fix", kind: "dmx", d: "M640 104 V236", label: { text: "DMX · RDM", x: 652, y: 176 } },
  { id: "haze-fix", kind: "dmx", d: "M400 290 H560", label: { text: "DMX512", x: 480, y: 280 } },
  { id: "app-fix", kind: "ble", d: "M150 312 C 270 372, 450 372, 572 320", label: { text: "NFC · BLE", x: 360, y: 382 } },
  { id: "app-gw", kind: "ble", d: "M110 262 C 170 170, 420 150, 540 104" },
  { id: "design-net", kind: "net", d: "M380 104 V184 H450" },
];

export const nodes: SystemNode[] = [
  {
    id: "app", name: "Phone app", sub: "NFC/BLE", subIsProtocol: true, box: { x: 30, y: 262, w: 120, h: 64 },
    kind: "Professional", title: "NFC/BLE fixture configuration app",
    body: "Cross-platform mobile app that configures and diagnoses professional lighting fixtures over NFC and Bluetooth LE, including fixtures that are not yet powered. 35 merged pull requests: NFC tag memory mapping, BLE firmware updates with verification, diagnostics reporting and secured job data.",
    tags: ["React Native", "TypeScript", "MobX-State-Tree", "BLE", "NFC"],
    note: "Proprietary, not linked.",
    wires: ["app-gw", "app-fix"],
  },
  {
    id: "gw", name: "Wireless gateway", sub: "SBC · RDM", subIsProtocol: true, box: { x: 530, y: 56, w: 190, h: 48 },
    kind: "Professional", title: "Wireless DMX gateway: RDM support",
    body: "A fixture-control app and the SBC-based wireless DMX gateway it talks to. Co-developed RDM (ANSI E1.20) support across both: device addressing, protocol alignment and wireless link reliability. Front-end UI design and much of the QA test planning.",
    tags: ["React Native", "TypeScript", "Node.js", "SBC", "RDM", "DMX512"],
    note: "Proprietary, not linked.",
    wires: ["net-gw", "gw-fix"],
  },
  {
    id: "console", name: "Console", sub: "Office Lighting", box: { x: 30, y: 56, w: 120, h: 48 },
    kind: "Personal", title: "Office Lighting",
    body: "A web app that runs an office lighting rig from any phone or laptop, beside the lighting console: executors and faders over OSC, saved looks recorded as console cues, fixture management over RDM, and a throttled sign-in.",
    tags: ["React", "TypeScript", "Node.js", "OSC", "RDM"],
    note: "Private repository for now.",
    wires: ["console-net", "net-gw", "gw-fix"],
  },
  {
    id: "net", name: "Network", sub: "Lighting LAN", box: { x: 300, y: 56, w: 100, h: 48 },
    kind: "Protocols", title: "Art-Net · sACN · OSC",
    body: "The network layer between consoles, gateways and servers. My tools monitor it live: universe levels, per-source packet rate, sequence errors and gaps.",
    tags: ["Art-Net", "sACN", "OSC", "UDP"],
    wires: ["console-net", "net-gw", "net-srv", "design-net"],
  },
  {
    id: "design", name: "Design tool", sub: "System Designer", box: { x: 450, y: 160, w: 140, h: 48 },
    kind: "Professional", title: "Lighting-Control System Designer",
    body: "A sales-enablement web tool that lets sales and support teams draw complete lighting-control system diagrams, like this one, from a product catalogue. Team development with a focus on front-end UI design and QA.",
    tags: ["React", "TypeScript", "Vite"],
    note: "Proprietary, not linked.",
    wires: ["design-net"],
  },
  {
    id: "srv", name: "Server", sub: "Dev Dashboard", box: { x: 285, y: 200, w: 130, h: 48 },
    kind: "Personal", title: "Development Dashboard",
    body: "Remote and performance monitoring for a self-hosted development server: live host metrics, service health, camera feeds, one-click deploys and automatic network failover.",
    tags: ["TypeScript", "Python", "Bash", "systemd", "Proxmox"],
    link: { href: "https://github.com/achiappone/pve-stack", text: "View the code" },
    wires: ["net-srv"],
  },
  {
    id: "haze", name: "ESP32 controller", sub: "Particle Analyzer", box: { x: 250, y: 266, w: 150, h: 48 },
    kind: "Personal", title: "Particle Analyzer & Doser",
    body: "Closed-loop particle control on an ESP32-S3: a PM2.5 particle sensor over I2C drives DMX512 dosing output. Live web UI with charts, over-the-air updates and a watchdog.",
    tags: ["ESP32-S3", "C++", "I2C", "DMX512"],
    link: { href: "https://github.com/achiappone/DMX_Haze_Regulator", text: "View the code" },
    wires: ["haze-fix"],
  },
  {
    id: "fix", name: "Fixtures", sub: "DMX · RDM · NFC · BLE", subIsProtocol: true, box: { x: 560, y: 236, w: 160, h: 84 },
    kind: "Hardware", title: "Where every path lands",
    body: "Every signal ends at a fixture: configured by phone, addressed over RDM, driven over DMX. Fifteen years at Chauvet Professional, from writing the manuals to product engineering, product management and the software that drives it.",
    tags: ["DMX512", "RDM", "NFC", "BLE"],
    wires: ["gw-fix", "haze-fix", "app-fix"],
  },
];
