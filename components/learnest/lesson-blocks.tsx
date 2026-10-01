'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bookmark, Check, Headphones, Lightbulb, Play, Volume2 } from 'lucide-react'

type BlockProps = { eyebrow?: string; children: React.ReactNode; className?: string }

function Block({ eyebrow, children, className = '' }: BlockProps) {
  return <section className={`rounded-[24px] border border-[#e6e9f0] bg-white p-5 shadow-[0_8px_30px_-24px_rgba(15,23,42,0.35)] sm:p-7 ${className}`}>
    {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#94a3b8]">{eyebrow}</p>}
    {children}
  </section>
}

export function AudioButton({ label = 'האזנה' }: { label?: string }) {
  return <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-600 transition hover:bg-indigo-100" aria-label={label}><Volume2 className="size-4" />{label}</button>
}

export function ImageBlock() {
  return <Block className="overflow-hidden bg-[#fff8f1] p-0"><div className="relative min-h-64 overflow-hidden"><Image src="/images/cafe-lesson.png" alt="A quiet morning at a café" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" /></div><div className="p-5 sm:p-7"><p className="text-xs font-bold text-[#c4775a]">در موقعیت واقعی</p><p className="mt-3 text-xl font-bold tracking-tight" dir="ltr">Can I get a coffee to go, please?</p><p className="mt-2 text-sm text-[#64748b]">می‌تونم یک قهوه بیرون‌بر بگیرم؟</p><div className="mt-5"><AudioButton /></div></div></Block>
}

export function DialogueBlock() { return <Block eyebrow="Dialogue"><div className="flex flex-col gap-4"><div className="max-w-[86%] rounded-2xl rounded-tr-sm bg-[#f5f6fb] p-4"><p className="text-xs font-bold text-indigo-600">A · Customer</p><p className="mt-2 text-base font-semibold" dir="ltr">Can I get a coffee to go, please?</p><div className="mt-3"><AudioButton label="پخش جمله" /></div></div><div className="mr-auto max-w-[86%] rounded-2xl rounded-tl-sm bg-[#effaf8] p-4"><p className="text-xs font-bold text-teal-600">B · Barista</p><p className="mt-2 text-base font-semibold" dir="ltr">Sure! What size would you like?</p><div className="mt-3"><AudioButton label="پخش جمله" /></div></div></div></Block> }

const words = [{ word: 'to go', meaning: 'بیرون‌بر', pos: 'phrase' }, { word: 'coffee', meaning: 'قهوه', pos: 'noun' }, { word: 'would like', meaning: 'مایل بودن / دوست داشتن', pos: 'phrase' }]
export function VocabularyBlock() { return <Block eyebrow="Vocabulary"><div className="flex flex-col gap-3">{words.map((item) => <div key={item.word} className="flex items-center gap-3 rounded-2xl border border-[#edf0f4] p-4"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#fff4eb] text-[#e97955]"><Volume2 className="size-4" /></div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="font-bold" dir="ltr">{item.word}</p><span className="text-[10px] text-[#94a3b8]">{item.pos}</span></div><p className="mt-1 text-sm text-[#64748b]">{item.meaning}</p></div><button aria-label={`ذخیره ${item.word}`} className="rounded-lg p-2 text-[#94a3b8] hover:bg-slate-50 hover:text-indigo-600"><Bookmark className="size-4" /></button></div>)}</div></Block> }

export function GrammarNote() { const [open, setOpen] = useState(false); return <Block className="bg-[#fffaf4]"><div className="flex gap-3"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#ffe8d4] text-[#d66b43]"><Lightbulb className="size-5" /></div><div><p className="font-bold">Polite requests</p><p className="mt-2 text-sm leading-7 text-[#64748b]" dir="ltr">Use <strong>Can I get ... ?</strong> when you want to ask for something politely.</p><button onClick={() => setOpen(!open)} className="mt-3 text-xs font-bold text-[#d66b43]">{open ? 'بستن توضیح' : 'توضیح فارسی'}</button>{open && <p className="mt-3 rounded-xl bg-white/70 p-3 text-sm leading-7 text-[#64748b]">برای درخواست مؤدبانه، از این ساختار استفاده کن: «می‌تونم ... داشته باشم؟»</p>}</div></div></Block> }

export function ListeningBlock() { const [answer, setAnswer] = useState<string | null>(null); return <Block eyebrow="Listening"><div className="flex items-center justify-between rounded-2xl bg-[#f7f8fc] p-4"><div><p className="text-sm font-bold">Café dialogue</p><p className="mt-1 text-xs text-[#64748b]">گفت‌وگوی کوتاه را گوش کن</p></div><button aria-label="پخش فایل صوتی" className="flex size-11 items-center justify-center rounded-full bg-[#4f46e5] text-white"><Headphones className="size-5" /></button></div><p className="mt-6 text-sm font-bold">What does the customer want?</p><div className="mt-3 grid gap-2 sm:grid-cols-2">{['A coffee to go', 'A table for two'].map((option) => <button key={option} onClick={() => setAnswer(option)} className={`rounded-xl border p-3 text-left text-sm transition ${answer === option ? option === 'A coffee to go' ? 'border-teal-400 bg-teal-50 text-teal-700' : 'border-orange-300 bg-orange-50 text-orange-700' : 'border-[#e6e9f0] hover:border-indigo-300'}`} dir="ltr">{answer === option && <Check className="mr-2 inline size-4" />}{option}</button>)}</div></Block> }

export function PracticeBlock() { const [choice, setChoice] = useState<string | null>(null); return <Block eyebrow="Practice"><p className="text-lg font-bold" dir="ltr">I&apos;d like ___ coffee, please.</p><div className="mt-5 flex flex-wrap gap-2">{['a', 'an', 'the'].map((answer) => <button key={answer} onClick={() => setChoice(answer)} className={`rounded-xl border px-5 py-3 text-sm font-bold ${choice === answer ? answer === 'a' ? 'border-teal-400 bg-teal-50 text-teal-700' : 'border-orange-300 bg-orange-50 text-orange-700' : 'border-[#e6e9f0]'}`} dir="ltr">{answer}</button>)}</div>{choice && <p className={`mt-4 text-sm font-semibold ${choice === 'a' ? 'text-teal-600' : 'text-orange-600'}`}>{choice === 'a' ? 'درست است؛ آفرین.' : 'تقریباً؛ قبل از صدای همخوان از a استفاده می‌کنیم.'}</p>}</Block> }

export function SpeakingPrompt() { return <Block className="border-0 bg-[#4f46e5] text-white"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-lg font-bold">تمرینش کنیم؟</p><p className="mt-1 text-sm text-indigo-100">این جمله رو با صدای خودت بگو.</p></div><Link href="/speak" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-indigo-600"><Play className="size-4 fill-current" />شروع Speaking</Link></div></Block> }

export function LessonSummary() { return <Block className="bg-[#effaf8]"><div className="flex items-start gap-3"><div className="flex size-10 items-center justify-center rounded-full bg-teal-500 text-white"><Check className="size-5" /></div><div><h2 className="text-xl font-bold">درس تمام شد</h2><p className="mt-1 text-sm text-[#64748b]">امروز یک قدم واقعی برای مکالمه برداشتی.</p><div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4"><span>۵ لغت تمرین شد</span><span>۱ نکته گرامری</span><span>۱ فعالیت شنیداری</span><span>۱ لغت برای مرور</span></div></div></div></Block> }

export function TextBlock({ title, text }: { title: string; text: string }) { return <Block><h2 className="text-lg font-bold">{title}</h2><p className="mt-3 leading-8 text-[#64748b]">{text}</p></Block> }
export function AudioBlock() { return <Block><AudioButton label="پخش فایل صوتی" /></Block> }
export function VideoBlock() { return <Block><div className="grid h-40 place-items-center rounded-2xl bg-slate-100"><Play className="size-8 text-indigo-500" /></div></Block> }
export function ExampleBlock() { return <TextBlock title="Example" text="Can I get a coffee to go, please?" /> }
export function MultipleChoice() { return <ListeningBlock /> }
export function FillBlank() { return <PracticeBlock /> }
export function MatchingExercise() { return <TextBlock title="Match the words" text="Connect each phrase with its meaning." /> }
export function OrderingExercise() { return <TextBlock title="Put it in order" text="Arrange the words to make a polite request." /> }
export function WritingPrompt() { return <TextBlock title="Writing" text="Write one sentence you could use at a café." /> }
export function LessonBlock() { return <TextBlock title="Lesson block" text="A flexible learning block." /> }
