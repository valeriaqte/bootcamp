// /module_I/lab2/app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Bienvenida</h1>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Ver Posts</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
