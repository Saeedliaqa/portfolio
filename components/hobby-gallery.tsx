import Image from "next/image";
import { hobbies } from "@/content/profile";

export function HobbyGallery() {
  return (
    <ul className="hobby-gallery" aria-label="My hobbies">
      {hobbies.map(({ name, image, alt }) => (
        <li key={name}>
          <figure>
            <Image
              src={`/images/hobbies/${image}.webp`}
              alt={alt}
              width={480}
              height={320}
              sizes="(max-width: 600px) 44vw, (max-width: 900px) 28vw, 220px"
            />
            <figcaption>{name}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
