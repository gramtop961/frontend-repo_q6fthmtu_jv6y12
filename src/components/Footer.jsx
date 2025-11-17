function Footer() {
  return (
    <footer className="border-t border-gray-200/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-gray-900">CRLUXURY</p>
          <p className="text-xs text-gray-500">Where precision meets artistry.</p>
        </div>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} CRLUXURY. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
