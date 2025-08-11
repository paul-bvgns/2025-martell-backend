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
            relationTo: 'participants',
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
            type: 'upload',
            relationTo: 'media',
        },
    ],
    hooks: {
        afterDelete: [
            async ({req, id, doc}) => {
                // Delete the corresponding media
                await req.payload.delete({
                    collection: 'media',
                    where: {
                        id: {
                            equals: doc.media.id,
                        }
                    }
                })
                await req.payload.delete({
                    collection: 'messages',
                    where: {
                        canvas: {
                            equals: id,
                        }
                    }
                })
            },
        ],
    }
}
