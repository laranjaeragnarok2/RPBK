export function Map() {
  return (
    <section className="w-full">
      <div className="mb-8 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Como <span className="text-primary neon-primary">Chegar</span></h2>
        <p className="text-lg text-muted-foreground">Estamos esperando por você.</p>
      </div>
      <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.707019623862!2d-50.91684702480436!3d-17.78855517726467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a11f26a57c0e5b%3A0xb6247c4731a50c82!2sRepublika%20Bar!5e0!3m2!1spt-BR!2sbr!4v1717180290509!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de localização do Republika Bar"
        ></iframe>
      </div>
    </section>
  );
}
