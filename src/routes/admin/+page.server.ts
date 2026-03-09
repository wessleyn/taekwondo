import { supabase } from '$lib/supabaseClient';

export const load = async () => {
    const { data: students, error } = await supabase
        .from('students')
        .select('id, name, belt_rank, belt_order, date_joined, image_url')
        .order('belt_order', { ascending: true })
        .order('date_joined', { ascending: true });

    if (error) {
        console.error('Error fetching students:', error);
        return { students: [] };
    }

    return { students: students ?? [] };
};
