"use client";

type LocationMapProps = {
  address: string;
  title?: string;
  viewOnMapsLabel?: string;
  zoom?: number;
  apiKey?: string;
  viewUrl?: string;
};

export function LocationMap({
  address,
  title = "Company Location",
  viewOnMapsLabel = "View on Google Maps",
  zoom = 14,
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY,
  viewUrl
}: LocationMapProps) {
  const query = encodeURIComponent(address);
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${query}&zoom=${zoom}`
    : `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`;
  const openUrl = viewUrl || `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section className="map-card" aria-label="Company map card">
      <div className="map-card-header">
        <h3>{title}</h3>
        <p>{address}</p>
      </div>
      <div className="map-frame-wrap">
        <iframe
          className="map-frame"
          title={title}
          src={src}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="map-card-actions">
        <a className="btn btn-outline map-nav-btn" href={openUrl} target="_blank" rel="noreferrer">
          {viewOnMapsLabel}
        </a>
      </div>
    </section>
  );
}
