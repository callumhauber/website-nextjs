import { Card } from '@/components/card';
import getPayloadClient from '@/lib/payload';
import type { Media } from '@/payload-types';

const GalleryCards = async () => {
  const payload = await getPayloadClient();
  const { docs: items } = await payload.find({
    collection: 'pottery',
    depth: 1,
  });

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(item => {
        const mainImage = Array.isArray(item.gallery) && item.gallery[0] ? (item.gallery[0] as Media) : null;

        const imageUrl = mainImage?.sizes?.card?.url || mainImage?.url || '/placeholder.jpg';
        const imageAlt = mainImage?.alt || item.title;

        return (
          <Card key={item.id} href={`/gallery/${item.slug}`}>
            <Card.Header>
              <Card.Title>{item.title}</Card.Title>
              {item.details && Array.isArray(item.details) && (
                <Card.DetailGroup>
                  {item.details.slice(0, 2).map((detail: any, i: number) => (
                    <Card.Detail key={i}>{detail.value}</Card.Detail>
                  ))}
                </Card.DetailGroup>
              )}
            </Card.Header>

            {mainImage && <Card.Image src={imageUrl} alt={imageAlt} />}

            <Card.Body>
              {/* <Card.Description>
                    We can render a summary of description here if we convert rich text to plain text, 
                    or just skip for now.
                  </Card.Description> */}
            </Card.Body>
          </Card>
        );
      })}

      {items.length === 0 && (
        <p className="col-span-full text-center text-slate-500">
          No pottery pieces found. Add some in the admin panel!
        </p>
      )}
    </div>
  );
};

export { GalleryCards };
