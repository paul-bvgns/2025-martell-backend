import type {CollectionConfig} from 'payload'

export const Participant: CollectionConfig = {
    slug: 'participants',
    access: {
        read: () => true,
        create: () => true,
    },
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        {
            name: 'firstName',
            type: 'text',
            required: true,
        },
        {
            name: 'lastName',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
            unique: true,
        },
        {
            name: 'wechatId',
            type: 'text',
            required: true,
        },
        {
            name: 'optin1',
            type: 'checkbox',
        },
        {
            name: 'optin2',
            type: 'checkbox',
        },
    ],
    endpoints: [],
    hooks: {
        beforeDelete: [
            async ({req, id}) => {
                await req.payload.delete({
                    collection: 'canvas',
                    where: {
                        user: {
                            equals: id,
                        }
                    }
                })
            },
        ],
    }
}
