import Image from "next/image";

interface AvatarProps {
  name: string;
  src?: string;
}

export default function Avatar({
  name,
  src = "/avatar-placeholder.jpg",
}: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      alt={name}
      src={src}
      title={name}
      width={40}
      height={40}
    />
  );
}
