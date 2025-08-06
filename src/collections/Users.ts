import type {CollectionConfig} from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'email',
    },
    auth: {
        forgotPassword: {
            generateEmailHTML: ({req, token, user}) => {
                // Use the token provided to allow your user to reset their password
                const resetPasswordURL = `${process.env.EMAIL_REDIRECTION_URL}/${token}`

                return ``

            }
        }
    },
    fields: [
        // Email added by default
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
            name: 'wechatId',
            type: 'text',
        },
        {
            name: 'role',
            type: 'select',
            options: [
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'User',
                    value: 'user',
                },
            ],
            defaultValue: 'user',
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
    endpoints: []
}
