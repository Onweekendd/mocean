import { add } from "@repo/math/add";
import "./globals.css";


function Page() {
  return <div className="text-xl text-red-500">{add(1, 2)}</div>;
}

export default Page;
