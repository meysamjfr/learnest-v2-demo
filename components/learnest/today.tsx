'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronLeft,
  Flame,
  Home,
  MessageCircle,
  Mic2,
  MoreHorizontal,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  X,
  Zap,
} from 'lucide-react'

type PlanItem = {
  icon: typeof BookOpen
  eyebrow: string
  title: string
  meta: string
  reason?: string
  accent: string
  completed?: boolean
}

const planItems: PlanItem[] = [
  { icon: BookOpen, eyebrow: 'ادامه یادگیری', title: 'Ordering at a Café', meta: '۶ دقیقه', accent: 'indigo' },
  { icon: RotateCcw, eyebrow: 'مرور سریع', title: '۵ لغت', meta: '۳ دقیقه', reason: 'زمان مرور این لغت‌ها رسیده.', accent: 'teal' },
  { icon: Target, eyebrow: 'رفع یک ضعف', title: 'Since vs For', meta: '۳ دقیقه', reason: 'این هفته دوبار این مبحث رو اشتباه زدی.', accent: 'coral' },
  { icon: Mic2, eyebrow: 'مکالمه', title: 'Coffee Shop Roleplay', meta: '۳ دقیقه', reason: 'برای هدف مکالمه‌ات پیشنهاد شده.', accent: 'blue' },
]

const navItems = [
  { label: 'خانه', icon: Home },
  { label: 'یادگیری', icon: BookOpen },
  { label: 'تمرین', icon: Target },
  { label: 'پیشرفت', icon: TrendingUp },
  { label: 'پروفایل', icon: UserRound },
]

export function TodayPage() {
  const [selectedReason, setSelectedReason] = useState<PlanItem | null>(null)
  const [activeNav, setActiveNav] = useState('خانه')

  return (
    <div dir="rtl" className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <DesktopSidebar activeNav={activeNav} onNavigate={setActiveNav} />
        <main className="min-w-0 flex-1 pb-24 lg:pb-0">
          <div className="mx-auto max-w-5xl px-5 py-6 sm:px-8 lg:px-12 lg:py-10">
            <header className="mb-8 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm text-[#64748b]">
                  <span>دوشنبه، ۲۱ آبان</span>
                  <span className="text-[#cbd5e1]">•</span>
                  <span className="flex items-center gap-1 text-[#f59e0b]"><Flame className="size-4 fill-current" /> ۶ روز</span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">سلام میثم <span aria-hidden="true">👋</span></h1>
                <p className="mt-2 text-sm text-[#64748b] sm:text-base">امروز ۱۵ دقیقه برای انگلیسیت وقت بذاریم.</p>
              </div>
              <button aria-label="اعلان‌ها" className="hidden size-11 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white text-[#475569] shadow-sm transition hover:border-[#c7d2fe] hover:text-[#4f46e5] sm:flex">
                <MoreHorizontal className="size-5" />
              </button>
            </header>

            <section className="mb-8 rounded-[24px] bg-[#4f46e5] p-5 text-white shadow-[0_12px_30px_-14px_rgba(79,70,229,0.6)] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-indigo-100">پیشرفت امروز</p>
                  <p className="mt-2 text-xl font-bold">۱ از ۴ کار انجام شده</p>
                </div>
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-[5px] border-indigo-300/50 border-t-white text-sm font-bold">۲۵٪</div>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-indigo-400/40" aria-label="۲۵ درصد از برنامه امروز تکمیل شده">
                <div className="h-full w-1/4 rounded-full bg-white" />
              </div>
              <p className="mt-3 text-xs text-indigo-100">با همین ریتم ادامه بده؛ فقط ۹ دقیقه دیگه مونده.</p>
            </section>

            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">برنامه امروز</h2>
              <span className="text-xs font-medium text-[#64748b]">۱۵ دقیقه</span>
            </div>
            <section className="grid gap-3 xl:grid-cols-2">
              {planItems.map((item, index) => <PlanCard key={item.title} item={item} index={index} onReason={() => item.reason && setSelectedReason(item)} />)}
            </section>

            <section className="mt-8">
              <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-bold">دسترسی سریع</h2><ChevronLeft className="size-5 text-[#94a3b8]" /></div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                <Link href="/practice/review"><QuickAction icon={RotateCcw} label="مرور" color="teal" /></Link>
                <Link href="/practice/mistakes"><QuickAction icon={Zap} label="اشتباه‌های من" color="coral" /></Link>
                <Link href="/tutor"><QuickAction icon={MessageCircle} label="Tutor" color="indigo" /></Link>
                <Link href="/speak"><QuickAction icon={Mic2} label="Speaking" color="blue" /></Link>
              </div>
            </section>

            <section className="mt-8 rounded-[24px] border border-[#e2e8f0] bg-white p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between"><div><h2 className="font-bold">تصویر این هفته</h2><p className="mt-1 text-xs text-[#64748b]">قدم‌های کوچک، پیشرفت واقعی</p></div><Sparkles className="size-5 text-[#14b8a6]" /></div>
              <div className="grid grid-cols-3 divide-x divide-x-reverse divide-[#e2e8f0] text-center">
                <Stat value="A2" label="سطح فعلی" />
                <Stat value="۴۵ دقیقه" label="یادگیری این هفته" />
                <Stat value="مکالمه" label="مهارتی که نیاز به توجه دارد" />
              </div>
            </section>
          </div>
        </main>
      </div>
      <MobileBottomNav activeNav={activeNav} onNavigate={setActiveNav} />
      {selectedReason && <ReasonSheet item={selectedReason} onClose={() => setSelectedReason(null)} />}
    </div>
  )
}

function PlanCard({ item, index, onReason }: { item: PlanItem; index: number; onReason: () => void }) {
  const Icon = item.icon
  const color = { indigo: 'bg-indigo-50 text-indigo-600', teal: 'bg-teal-50 text-teal-600', coral: 'bg-orange-50 text-[#ff6b5b]', blue: 'bg-blue-50 text-blue-600' }[item.accent]
  return <article className="group relative rounded-[20px] border border-[#e2e8f0] bg-white p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-[0_12px_24px_-18px_rgba(15,23,42,0.5)] sm:p-5">
    <div className="flex items-center gap-4"><div className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${color}`}><Icon className="size-5" /></div><div className="min-w-0 flex-1"><p className="text-xs font-medium text-[#64748b]">{item.eyebrow}</p><h3 className="mt-1 truncate text-[15px] font-bold" dir={index === 0 || index === 3 ? 'ltr' : 'rtl'}>{item.title}</h3><p className="mt-1 text-xs text-[#94a3b8]">{item.meta}</p></div><Link href={index === 0 ? '/learn/lesson' : index === 1 ? '/practice/review' : index === 2 ? '/practice/mistakes/since-for/practice' : '#'} className="flex h-10 items-center gap-1.5 rounded-xl bg-[#4f46e5] px-3.5 text-xs font-bold text-white transition hover:bg-indigo-700"><Play className="size-3.5 fill-current" /> ادامه</Link></div>
    {item.reason && <button onClick={onReason} className="mr-14 mt-3 text-xs font-medium text-[#64748b] underline decoration-[#cbd5e1] underline-offset-4 transition hover:text-[#4f46e5]">چرا اینو پیشنهاد دادی؟</button>}
  </article>
}

function QuickAction({ icon: Icon, label, color }: { icon: typeof Target; label: string; color: string }) { return <button className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-2xl border border-[#e2e8f0] bg-white text-xs font-semibold text-[#475569] transition hover:border-indigo-200 hover:text-[#4f46e5]"><Icon className={`size-5 ${color === 'teal' ? 'text-teal-500' : color === 'coral' ? 'text-[#ff6b5b]' : color === 'blue' ? 'text-blue-500' : 'text-indigo-500'}`} />{label}</button> }
function Stat({ value, label }: { value: string; label: string }) { return <div className="px-2"><p className="truncate text-sm font-bold sm:text-base" dir="auto">{value}</p><p className="mt-1 truncate text-[10px] text-[#64748b] sm:text-xs">{label}</p></div> }
function DesktopSidebar({ activeNav, onNavigate }: { activeNav: string; onNavigate: (value: string) => void }) { return <aside className="hidden w-64 shrink-0 border-l border-[#e2e8f0] bg-white px-5 py-7 lg:block"><div className="mb-12 flex items-center gap-3 px-2"><div className="flex size-10 items-center justify-center rounded-xl bg-[#4f46e5] text-white"><BookOpen className="size-5" /></div><span className="text-xl font-extrabold tracking-tight">Learnest</span></div><nav className="flex flex-col gap-2">{navItems.map(({ label, icon: Icon }) => label === 'یادگیری' ? <Link key={label} href="/learn" className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${activeNav === label ? 'bg-indigo-50 text-[#4f46e5]' : 'text-[#64748b] hover:bg-slate-50 hover:text-[#0f172a]'}`}><Icon className="size-5" />{label}</Link> : <button key={label} onClick={() => onNavigate(label)} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${activeNav === label ? 'bg-indigo-50 text-[#4f46e5]' : 'text-[#64748b] hover:bg-slate-50 hover:text-[#0f172a]'}`}><Icon className="size-5" />{label}</button>)}</nav><div className="mt-16 rounded-2xl bg-[#fffbf7] p-4"><p className="text-xs font-bold text-[#ff6b5b]">هدف این هفته</p><p className="mt-2 text-sm font-bold leading-6">هر روز یک قدم برای مکالمه</p><div className="mt-3 h-1.5 rounded-full bg-orange-100"><div className="h-full w-3/5 rounded-full bg-[#ff6b5b]" /></div></div></aside> }
function MobileBottomNav({ activeNav, onNavigate }: { activeNav: string; onNavigate: (value: string) => void }) { return <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-[#e2e8f0] bg-white/95 px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden"><div className="mx-auto flex max-w-lg items-center justify-around">{navItems.map(({ label, icon: Icon }) => <button key={label} onClick={() => onNavigate(label)} className={`flex min-w-14 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[10px] font-semibold ${activeNav === label ? 'text-[#4f46e5]' : 'text-[#94a3b8]'}`}><Icon className="size-5" />{label}</button>)}</div></nav> }
function ReasonSheet({ item, onClose }: { item: PlanItem; onClose: () => void }) { return <div className="fixed inset-0 z-40 flex items-end justify-center bg-slate-950/30 p-0 sm:items-center sm:p-5" role="presentation" onClick={onClose}><section role="dialog" aria-modal="true" aria-labelledby="reason-title" onClick={(event) => event.stopPropagation()} className="w-full rounded-t-[28px] bg-white p-6 pb-8 shadow-2xl sm:max-w-md sm:rounded-[28px]"><div className="mx-auto mb-6 h-1.5 w-10 rounded-full bg-slate-200 sm:hidden" /><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold text-[#64748b]">دلیل پیشنهاد Learnest</p><h2 id="reason-title" className="mt-2 text-lg font-bold" dir="ltr">{item.title}</h2></div><button onClick={onClose} aria-label="بستن" className="rounded-xl p-2 text-[#64748b] hover:bg-slate-100"><X className="size-5" /></button></div><p className="mt-5 rounded-2xl bg-[#f8fafc] p-4 text-sm leading-7 text-[#475569]">چون این هفته دو بار در استفاده از <span dir="ltr" className="font-semibold text-[#0f172a]">Since</span> و <span dir="ltr" className="font-semibold text-[#0f172a]">For</span> اشتباه داشتی، یک تمرین کوتاه برای مرورش به برنامه امروزت اضافه کردیم.</p><button onClick={onClose} className="mt-5 flex h-12 w-full items-center justify-center rounded-2xl bg-[#4f46e5] text-sm font-bold text-white hover:bg-indigo-700">متوجه شدم</button></section></div> }

export { Check }

