import { createClient } from '../server';

export async function signInWithEmailPassword(email, password) {
  const supabase = await createClient();
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function signUpWithEmailPassword(email, password) {
  const supabase = await createClient();
  return await supabase.auth.signUp({ email, password });
}