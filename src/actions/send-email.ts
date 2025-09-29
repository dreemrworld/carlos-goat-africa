'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    // Debug logging to check environment variable availability
    console.log('RESEND_API_KEY available:', !!env.RESEND_API_KEY);
    console.log('Process env RESEND_API_KEY:', process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'carlos@goat.africa',
      subject: 'Message from contact form',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      error: `Something went wrong! Please try again later.`,
    };
  }
};
