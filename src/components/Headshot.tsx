import photo from "../assets/profileImage-400.jpg";

export default function Headshot({ className = "" }: { className?: string }) {
  return <img className={`headshot ${className}`.trim()} src={photo} alt="Anthony Chiappone" width={400} height={400} />;
}
