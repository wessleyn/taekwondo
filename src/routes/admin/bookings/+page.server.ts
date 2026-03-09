import { PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';
import { fail } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY, {
        cookies: {
            getAll: () => cookies.getAll(),
            setAll: (cookiesToSet) => {
                cookiesToSet.forEach(({ name, value, options }) =>
                    cookies.set(name, value, { ...options, path: '/' })
                );
            }
        }
    });

    const { data: bookings, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching bookings:', error);
        return { bookings: [] };
    }

    return { bookings: bookings ?? [] };
};

export const actions = {
    updateStatus: async ({ request, cookies }) => {
        const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY, {
            cookies: {
                getAll: () => cookies.getAll(),
                setAll: (cookiesToSet) => {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        cookies.set(name, value, { ...options, path: '/' })
                    );
                }
            }
        });

        const formData = await request.formData();
        const id = formData.get('id') as string;
        const status = formData.get('status') as string;

        if (!id || !['pending', 'confirmed', 'cancelled'].includes(status)) {
            return fail(400, { error: 'Invalid request.' });
        }

        const { error } = await supabase
            .from('bookings')
            .update({ status })
            .eq('id', id);

        if (error) {
            return fail(500, { error: error.message });
        }

        return { success: true };
    }
};
