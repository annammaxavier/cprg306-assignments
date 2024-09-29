import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Assignments</h1>
      <ul className="list-disc ml-5">
        {/* Existing Links */}
        <li>
          <Link href="C:\cprg306\cprg306-assignments\app\week-2">
            Week 2 Assignment
          </Link>
        </li>
        {/* New Link to Week 3 */}
        <li>
          <Link href="C:\cprg306\cprg306-assignments\app\week-3">
            Week 3 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
