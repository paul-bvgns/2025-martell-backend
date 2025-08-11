import type {CollectionConfig} from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
    upload: true,
    hooks: {
        beforeDelete: [
            async ({req, id}) => {
                // Delete the corresponding canvas
                console.log(`Deleting media with ID: ${id}`)
                await req.payload.delete({
                    collection: 'canvas',
                    where: {
                        media: {
                            equals: id,
                        }
                    }

                })
            },
        ],
    }
}
