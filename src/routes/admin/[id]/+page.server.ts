import { supabase } from '$lib/supabaseClient';
import { error, fail, redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const { data: student, error: fetchError } = await supabase
        .from('students')
        .select('*')
        .eq('id', params.id)
        .single();

    if (fetchError || !student) {
        error(404, 'Student not found');
    }

    return { student };
};

export const actions = {
    update: async ({ request, params }) => {
        const form = await request.formData();

        const name = form.get('name') as string;
        const belt_rank = form.get('belt_rank') as string;
        const belt_order = parseInt(form.get('belt_order') as string);
        const date_joined = form.get('date_joined') as string;
        const avatarFile = form.get('avatar') as File | null;

        let image_url: string | undefined = undefined;

        if (avatarFile && avatarFile.size > 0) {
            const fileExt = avatarFile.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(fileName, avatarFile);

            if (uploadError) {
                return fail(500, { error: 'Image upload failed: ' + uploadError.message });
            }

            const { data } = supabase.storage.from('avatars').getPublicUrl(fileName);
            image_url = data.publicUrl;
        }

        const updates: Record<string, unknown> = { name, belt_rank, belt_order, date_joined };
        if (image_url) updates.image_url = image_url;

        const { error: updateError } = await supabase
            .from('students')
            .update(updates)
            .eq('id', params.id);

        if (updateError) {
            return fail(500, { error: updateError.message });
        }

        return { success: true };
    },

    delete: async ({ params }) => {
        const { error: deleteError } = await supabase
            .from('students')
            .delete()
            .eq('id', params.id);

        if (deleteError) {
            return fail(500, { error: deleteError.message });
        }

        redirect(303, '/admin');
    }
};
