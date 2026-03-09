import { RESEND_API_KEY } from '$env/static/private';
import { supabase } from '$lib/supabaseClient';
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const student_name = formData.get('name') as string;
        const contact_email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const preferred_date = formData.get('date') as string;
        const class_type = formData.get('classType') as string;
        const message = formData.get('message') as string;

        if (!student_name || !contact_email) {
            return fail(400, { error: 'Name and email are required.' });
        }

        // 1. Insert into Supabase
        const { error: dbError } = await supabase
            .from('bookings')
            .insert([{ student_name, contact_email, phone, preferred_date, class_type, message }]);

        if (dbError) {
            console.error('Database Error:', dbError);
            return fail(500, { error: 'Failed to save booking. Please try again.' });
        }

        // 2. Notify admin via Resend
        try {
            await resend.emails.send({
                from: 'Bandong Ryok Bookings <bookings@bandongryok.com>',
                to: 'saidi@bandongryok.com',
                subject: `🥋 New Booking Request: ${student_name}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
                        <div style="background: #111; padding: 20px 24px; border-radius: 8px 8px 0 0;">
                            <h1 style="color: #FF4500; margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">
                                New Booking Request
                            </h1>
                        </div>
                        <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${student_name}</td></tr>
                                <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${contact_email}" style="color: #FF4500;">${contact_email}</a></td></tr>
                                <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${phone || '—'}</td></tr>
                                <tr><td style="padding: 8px 0; color: #666;">Preferred Date</td><td style="padding: 8px 0;">${preferred_date || '—'}</td></tr>
                                <tr><td style="padding: 8px 0; color: #666;">Class Type</td><td style="padding: 8px 0;">${class_type || '—'}</td></tr>
                                <tr><td style="padding: 8px 0; color: #666; vertical-align: top;">Message</td><td style="padding: 8px 0;">${message || '—'}</td></tr>
                            </table>
                            <div style="margin-top: 24px;">
                                <a href="https://bandongryok.com/admin/bookings"
                                   style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; font-size: 13px;">
                                    View in Admin Dashboard →
                                </a>
                            </div>
                        </div>
                    </div>
                `
            });
        } catch (emailError) {
            // Email failure doesn't fail the submission — booking is safe in the DB
            console.error('Resend Error:', emailError);
        }

        return { success: true };
    }
};
