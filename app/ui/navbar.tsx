import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
        <div className="container px-4 relative mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <span>Git Dash</span>
            </div>
            <input
              className="w-100 border rounded-lg py-1 text-center"
              placeholder="Search username"
            />
            <div className="flex justify-end gap-5">
              <button type="button" className="py-2 px-3 border rounded-md border-white/10 hover:bg-[#171717]  cursor-pointer">
                Sign In
              </button>
              <button
                type="button"
                className="py-2 px-3 border rounded-md border-white/10
             bg-gradient-to-r from-[#7b9fe8] to-[#294bd6]
             hover:from-[#294bd6] hover:to-[#171717] cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
