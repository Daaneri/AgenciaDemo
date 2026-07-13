export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Línea divisoria superior fina, como en el resto del sitio */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marca */}
          <div>
            <h3 className="text-lg font-bold tracking-tight">
              <span className="text-white">TROYA</span>{" "}
              <span className="text-cyan-400">AUTOMOTORES</span>
            </h3>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Confianza, transparencia y respaldo en cada operación.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#catalogo" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Horarios
            </h4>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Lun a Vie: 9:00 – 18:00
              <br />
              Sáb: 9:00 – 13:00
              <br />
              Dom: Cerrado
            </p>
          </div>

          {/* Contacto + Ubicación */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Contacto
            </h4>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Los Nogales y Los Eucaliptos
              <br />
              Villa Constitución, Santa Fe
            </p>
            <a
              href="https://wa.me/5490000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 border border-cyan-400 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-cyan-400 hover:text-black transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-10">
          <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4">
            Ubicación
          </h4>
          <div className="border border-white/10 overflow-hidden">
            <iframe
              title="Ubicación Troya Automotores"
              src="https://www.google.com/maps?q=-33.252542,-60.346679&output=embed"
              width="100%"
              height="220"
              loading="lazy"
              style={{ border: 0 }}
              className="grayscale invert-[0.9] contrast-[0.85]"
            />
          </div>
        </div>

        {/* Redes */}
        <div className="flex items-center gap-6 mt-10">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            Seguinos
          </span>
          <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
            Instagram
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
            Facebook
          </a>
        </div>
      </div>

      {/* Barra final de copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} TROYA AUTOMOTORES - TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}