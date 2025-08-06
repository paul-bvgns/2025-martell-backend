import type {CollectionConfig} from 'payload'

export const Canvas: CollectionConfig = {
    slug: 'canvas',
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
        },
        {
            name: 'provenance',
            type: 'text',
            required: true,
        },
        {
            name: 'creation',
            type: 'json',
            required: true,
        },
        {
            name: 'media',
            type: 'relationship',
            relationTo: 'media',
        },

    ],
}
