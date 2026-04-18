import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">06. Selanjutnya?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Mari Terhubung
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Saya sedang mencari peluang baru dan inbox saya selalu terbuka. 
          Apakah Anda memiliki pertanyaan atau hanya ingin menyapa, 
          saya akan berusaha untuk membalas pesan Anda!
        </p>
        <Link
          href="mailto:hello@example.com"
          className="inline-block bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-md font-medium hover:bg-primary/10 transition-colors"
        >
          Kirim Pesan
        </Link>
      </div>
    </section>
  )
}
