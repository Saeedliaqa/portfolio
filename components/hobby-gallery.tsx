"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { hobbies } from "@/content/profile";

function HobbyCard({ name, image, alt, note }: (typeof hobbies)[number]) {
  const descriptionId = useId();
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const expanded = pinned || hovered;

  return (
    <li
      className="hobby-card"
      data-expanded={expanded}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="hobby-faces">
        <div className="hobby-front">
          <Image
            src={`/images/hobbies/${image}.webp`}
            alt={alt}
            width={480}
            height={320}
            sizes="(max-width: 560px) 90vw, (max-width: 880px) 46vw, 370px"
          />
          <strong>{name}</strong>
        </div>
        <div className="hobby-back" id={descriptionId} aria-hidden={!expanded}>
          <strong>{name}</strong>
          <p>{note.split("*").map((part, index) => index % 2 ? <em key={part}>{part}</em> : part)}</p>
        </div>
      </div>
      <button
        type="button"
        className="hobby-toggle"
        aria-label={`${expanded ? "Hide" : "Show"} details about ${name}`}
        aria-expanded={expanded}
        aria-controls={descriptionId}
        onClick={() => {
          setPinned(!expanded);
          setHovered(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && expanded) {
            event.stopPropagation();
            setPinned(false);
            setHovered(false);
          }
        }}
      />
    </li>
  );
}

export function HobbyGallery() {
  return (
    <ul className="hobby-gallery" aria-label="My hobbies">
      {hobbies.map((hobby) => <HobbyCard key={hobby.name} {...hobby} />)}
    </ul>
  );
}
