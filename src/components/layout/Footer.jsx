    export default function Footer() {
    return (
        <footer id="contact" className="bg-[#020612] text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
            <div className="text-cyan-400 font-bold text-lg">Wellnex</div>
            <div className="mt-2 text-sm">Connecting people, providers and data for better outcomes.</div>
            </div>

            <div>
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-2 text-sm">hello@wellnex.example</div>
            <div className="mt-2 text-sm">+1 (555) 123-4567</div>
            </div>

            <div>
            <h4 className="font-semibold">Follow</h4>
            <div className="mt-2 flex gap-3">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
            </div>
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Wellnex Systems — All rights reserved.</div>
        </footer>
    );
    }
