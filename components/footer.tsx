import { Store, Github, Linkedin } from "lucide-react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-10">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="rounded-lg bg-primary 0 p-1.5 text-white">
                <Store size={22} />
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900">
                Shop<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-gray-600 max-w-xs">
              Making your shopping experience seamless, fast, and secure.
              Discover the best deals on premium products.
            </p>
          </div>


          <div className="md:grid md:grid-cols-1 gap-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                Contact Us
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <a
                    href="https://github.com/sandhyakumari01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition"
                  >
                    <Github size={16} className="text-primary" /> GitHub
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <a
                    href="https://www.linkedin.com/in/sandhyakumari01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition"
                  >
                    <Linkedin size={16} className="text-primary" />{" "}
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="my-2.5 border-t border-gray-100 py-7 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 text-center  m-auto">
          &copy; {new Date().getFullYear()} ShopHub Inc. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
