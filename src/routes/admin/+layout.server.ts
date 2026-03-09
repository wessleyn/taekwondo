import { PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, url }) => {
    const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY, {
        cookies: {
            getAll: () => cookies.getAll(),
            setAll: (cookiesToSet) => {
                cookiesToSet.forEach(({ name, value, options }) => {
                    cookies.set(name, value, { ...options, path: '/' });
                });
            }
        }
    });

    const { data: { session } } = await supabase.auth.getSession();

    const isLoginPage = url.pathname === '/admin/login';

    if (!session && !isLoginPage) {
        redirect(303, '/admin/login');
    }

    if (session && isLoginPage) {
        redirect(303, '/admin');
    }

    return { userEmail: session?.user?.email ?? null };
};
