import type {CollectionConfig} from 'payload'

export const Messages: CollectionConfig = {
    slug: 'messages',
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
            name: 'canvas',
            type: 'relationship',
            relationTo: 'canvas',
            required: true,
        },
        {
            name: 'firstName',
            type: 'text',
            required: true,
        },
        {
            name: 'wechatId',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'message',
            type: 'text',
            required: true,
        },
    ],
}
