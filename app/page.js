import Link from "next/link";

export default function Home() {
  return (
    <div id="border" className="flex h-full w-full justify-center items-center">
      <div className="w-2/3 h-2/3">
        <div id="window" className="flex flex-col">
          <h1 id="title">CPRG 306: Web Development 2 - Assignments</h1>
          <div id="window-i-nb">
            <div className="flex flex-col flex-wrap w-20 text-center">
              <Week num={2} />
              <Week num={3} />
              <Week num={4} />
              <Week num={5} />
              <Week num={6} />
              <Week num={7} />
              <Week num={8} />
              <Week num={9} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Week(props) {
  return (
    <Link id="border" href={`http://localhost:3000/week-${props.num}`}>
      Week-{props.num}
    </Link>
  );
}