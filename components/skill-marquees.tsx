"use client";

import Image from "next/image";
import { useState } from "react";

const rows = [
  [
    ["React", "react"],
    ["Next.js", "nextdotjs"],
    ["TypeScript", "typescript"],
    ["Tailwind CSS", "tailwindcss"],
    ["Node.js", "nodedotjs"],
    ["Express", "express"],
    ["Python", "python"],
    ["PostgreSQL", "postgresql"],
    ["FastAPI", "fastapi"],
  ],
  [
    ["AWS", "aws"],
    ["Vercel", "vercel"],
    ["Docker", "docker"],
    ["GitHub Actions", "githubactions"],
    ["OpenAI API", "openai"],
    ["LangChain", "langchain"],
    ["Pandas", "pandas"],
    ["Supabase", "supabase"],
  ],
] as const;

function SkillList({ tools, repeated = false }: { tools: (typeof rows)[number]; repeated?: boolean }) {
  return (
    <ul className="skill-marquee-list" aria-hidden={repeated || undefined}>
      {tools.map(([name, logo]) => (
        <li className="skill-marquee-item" key={logo}>
          <Image src={`/images/skills/${logo}.svg`} alt="" width={23} height={23} />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export function SkillMarquees() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="skill-marquees" data-paused={paused}>
      <button type="button" className="skill-motion-toggle" onClick={() => setPaused(!paused)}>
        {paused ? "Resume animation" : "Pause animation"}
      </button>
      {rows.map((tools, index) => (
        <div className="skill-marquee" key={tools[0][1]}>
          <div className="skill-marquee-track" data-direction={index === 0 ? "right" : "left"}>
            <SkillList tools={tools} />
            <SkillList tools={tools} repeated />
          </div>
        </div>
      ))}
    </div>
  );
}
