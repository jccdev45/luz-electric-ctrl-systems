import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-yellow-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>2991 Webster Avenue, Bronx, NY, 10458</p>
            <p>Phone: 718-220-8989</p>
            <p>Fax: 718-220-4441</p>
            <p>Email: luzcontrol@aol.com</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-center text-sm text-gray-300">
          &copy; {currentYear} Luz Electric and Control Systems Inc. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
