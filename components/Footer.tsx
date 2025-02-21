export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Workfreaks Events</h3>
            <p className="text-sm">Creating Unforgettable Moments</p>
          </div>
          <div className="w-full md:w-1/3 text-center my-4 md:my-0">
            <ul className="inline-flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Workfreaks Events. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

