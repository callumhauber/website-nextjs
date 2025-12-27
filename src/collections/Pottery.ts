import type { CollectionConfig } from 'payload';

export const Pottery: CollectionConfig = {
  slug: 'pottery',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: true, // Allow multiple images? The card implies a preview, but a detail page might want more. Let's assume one main preview + gallery.
      // Wait, the user mockup has one main image. Let's make it an array of images to support a full gallery, but maybe a dedicated "mainImage" field is better, or just use the first one.
      // Let's stick to 'gallery' hasMany: true for now, we can pick the first as thumbnail.
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'details',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
