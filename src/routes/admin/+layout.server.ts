// src/routes/admin/+layout.server.ts
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, url }) => {
    const authCookie = cookies.get('admin_session');

    // If NOT logged in, and trying to access anything other than the login page, kick them out
    if (authCookie !== 'authenticated' && !url.pathname.startsWith('/admin/login')) {
        redirect(303, '/admin/login');
    }

    // If they ARE logged in, but try to visit the login page, redirect them to the dashboard
    if (authCookie === 'authenticated' && url.pathname === '/admin/login') {
        redirect(303, '/admin/students');
    }
};
