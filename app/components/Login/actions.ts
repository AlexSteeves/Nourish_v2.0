
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signInWithEmailPassword, signUpWithEmailPassword } from '@utils/supabase/Services/authService';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await signInWithEmailPassword(email, password);
  console.log('hello')
  if (error) {
    console.log('Login error');
    return;
  }

  revalidatePath('/');
  redirect('/components/MealPlanSelection');
}

export async function signup(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await signUpWithEmailPassword(email, password);

  if (error) {
    console.error('Signup error:', error);
    redirect('/error');
    return;
  }

  revalidatePath('/');
  redirect('/components/MealPlanSelection');
}
