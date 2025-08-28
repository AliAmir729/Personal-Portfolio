const Contact = () => {
  return (
    <div id="Contact" className="text-center mt-10 mb-2 px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-[#ff8c00]">
        Contact Me
      </h2>
      <p className="text-slate-200 max-w-2xl mx-auto text-sm md:text-base mt-2">
        Have any questions? Feel free to ask or connect with me!
      </p>

      {/* Connect Card */}
      <div className="mt-10 flex flex-col justify-center items-center space-y-4 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[#ff8c00]/10 w-[100%] ">
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-[#ff8c00] mb-4">
          Connect With Me
        </h3>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 w-[100%] md:w-[60%] ">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ali-amir-589a53219/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-3  rounded-xl space-x-3 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] w-full"
          >
            <span className="w-5 h-5 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-5 h-5 text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></span>
            <div>
              <h5 className="text-white font-semibold text-sm">Let's Connect</h5>
              <p className="text-xs text-gray-300">on LinkedIn</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AliAmir729"
            target="_blank"
            rel="noopener noreferrer"
            className="flex  justify-center items-center p-3 rounded-xl space-x-3 bg-gradient-to-r from-[#333] to-[#24292e] w-full"
          >
            <span className="w-5 h-5 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5 text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></span>
            <div>
              <h5 className="text-white font-semibold text-sm">Let's Connect</h5>
              <p className="text-xs text-gray-300">on GitHub</p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://web.facebook.com/ali.amir.875649"
            target="_blank"
            rel="noopener noreferrer"
            className="flex  justify-center items-center p-3 rounded-xl space-x-3 bg-gradient-to-r from-[#1877F2] to-[#3b5998] w-full"
          >
            <span className="w-5 h-5 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-5 h-5 text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></span>
            <div>
              <h5 className="text-white font-semibold text-sm">Let's Connect</h5>
              <p className="text-xs text-gray-300">on Facebook</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+923244225640"
            target="_blank"
            rel="noopener noreferrer"
            className="flex  justify-center items-center p-3 rounded-xl space-x-3 bg-gradient-to-r from-[#075E54] to-[#128C7E] w-full"
          >
            <span className="w-5 h-5 text-white"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium w-5 h-5 text-white css-q7mezt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WhatsAppIcon"><path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path></svg></span>
            <div>
              <h5 className="text-white font-semibold text-sm">Let's Connect</h5>
              <p className="text-xs text-gray-300">on WhatsApp</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
