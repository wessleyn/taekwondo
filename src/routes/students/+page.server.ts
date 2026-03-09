import { supabase } from '$lib/supabaseClient';

export const load = async () => {
    const { data: students, error } = await supabase
        .from('students')
        .select('*')
        .order('belt_order', { ascending: true }) // Black belts first
        .order('date_joined', { ascending: true }); // Older students first

    if (error) {
        console.error('Error fetching students:', error);
        return { students: [] };
    }

    return {
        students: students ?? []
    };
};