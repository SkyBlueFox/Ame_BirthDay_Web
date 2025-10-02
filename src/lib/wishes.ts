// src/lib/wishes.ts
import { supabase } from './supabase'

export type Wish = {
  id: string
  author: string
  message: string
  created_at: string
}

/** อ่านล่าสุด เรียงใหม่->เก่า */
export async function fetchWishes(limit = 200): Promise<Wish[]> {
  const { data, error } = await supabase
    .from('wishes')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return data ?? []
}

/** สร้างคำอวยพรใหม่ */
export async function createWish(input: { author: string; message: string }): Promise<Wish> {
  const author = input.author.trim()
  const message = input.message.trim()
  if (!author || !message) throw new Error('กรอกข้อมูลให้ครบ')
  if (author.length > 80) throw new Error('ชื่อยาวเกิน 80 ตัวอักษร')
  if (message.length > 500) throw new Error('ข้อความยาวเกิน 500 ตัวอักษร')

  const { data, error } = await supabase
    .from('wishes')
    .insert({ author, message })
    .select()
    .single()
  if (error) throw error
  return data!
}

/** subscribe realtime เมื่อมีการ insert */
export function subscribeWishes(onInsert: (w: Wish) => void) {
  const channel = supabase
    .channel('wishes-insert')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'wishes' }, (payload) => {
      onInsert(payload.new as Wish)
    })
    .subscribe()
  return () => { supabase.removeChannel(channel) }
}
