import Link from "next/link";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <div className="shell interior not-found">
      <p className="label">404</p>
      <h1>Page not found</h1>
      <p>The page may have moved. You can return home or browse my projects.</p>
      <div className="actions">
        <Link className="button button-primary" href="/"><Icon name="back" /> Back to home</Link>
        <Link className="button button-secondary" href="/#projects">View projects <Icon name="arrow" /></Link>
      </div>
    </div>
  );
}
