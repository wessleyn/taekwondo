// src/routes/admin/login/+page.server.ts
import { ADMIN_PASSWORD } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const password = data.get('password');

        if (password === ADMIN_PASSWORD) {
            cookies.set('admin_session', 'authenticated', {
                path: '/admin',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7
            });

            redirect(303, '/admin/students');
        }

        return fail(401, { incorrect: true });
    }
};
